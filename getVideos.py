import json
import os
import urllib.parse
import urllib.request

API_KEY = os.environ["YOUTUBE_API_KEY"]
CHANNEL_ID = "@TeshioSaira"
JSON_FILE = "videos.json"

def youtube_api(url, params):
    params["key"] = API_KEY
    query = urllib.parse.urlencode(params)
    try:
        with urllib.request.urlopen(
            url + "?" + query
        ) as response:
            return json.loads(response.read())
    except urllib.error.HTTPError as e:
        print("HTTP Error:", e.code)
        print(e.read().decode("utf-8"))
        raise

def get_videos():
    data = youtube_api(
        "https://www.googleapis.com/youtube/v3/search",
        {
            "part": "snippet",
            "channelId": CHANNEL_ID,
            "maxResults": 50,
            "order": "date",
            "type": "video"
        }
    )
    videos = []
    for item in data.get("items", []):
        video_id = item["id"]["videoId"]
        snippet = item["snippet"]
        videos.append({
            "id": video_id,
            "title": snippet["title"],
            "description": snippet["description"],
            "thumbnail": snippet["thumbnails"]["high"]["url"],
            "publishedAt": snippet["publishedAt"],
            "live": False
        })
    return videos

def main():
    new_videos = get_videos()
    print(new_videos)
    with open(
        JSON_FILE,
        "r",
        encoding="utf-8"
    ) as f:
        old_data = json.load(f)
    old_videos = old_data.get("videos", [])
    old_ids = {
        video["id"]
        for video in old_videos
    }
    added = 0
    for video in new_videos:
        if video["id"] not in old_ids:
            old_videos.append(video)
            added += 1
    # 新しい順に並べる
    old_videos.sort(
        key=lambda video: video["publishedAt"],
        reverse=True
    )
    with open(
        JSON_FILE,
        "w",
        encoding="utf-8"
    ) as f:
        json.dump(
            {
                "videos": old_videos
            },
            f,
            ensure_ascii=False,
            indent=2
        )
    print(f"取得した動画: {len(new_videos)}")
    print(f"新しく追加した動画: {added}")

if __name__ == "__main__":

    main()