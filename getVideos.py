import json
import urllib.request
import xml.etree.ElementTree as ET

CHANNEL_ID = "UCv1fFr156jc65EMiLbaLImw"
RSS_URL = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"

JSON_FILE = "videos.json"


def get_videos_from_rss():
    with urllib.request.urlopen(RSS_URL) as response:
        xml_data = response.read()
    root = ET.fromstring(xml_data)
    namespace = {
        "atom": "http://www.w3.org/2005/Atom",
        "yt": "http://www.youtube.com/xml/schemas/2015"
    }
    videos = []
    for entry in root.findall("atom:entry", namespace):
        video_id = entry.find("yt:videoId", namespace).text
        title = entry.find("atom:title", namespace).text
        published = entry.find("atom:published", namespace).text
        videos.append({
            "id": video_id,
            "title": title,
            "publishedAt": published,
            "url": f"https://www.youtube.com/watch?v={video_id}"
        })
    return videos


def main():
    new_videos = get_videos_from_rss()
    try:
        with open(JSON_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        data = {
            "videos": []
        }
    old_videos = data.get("videos", [])
    old_ids = {
        video["id"]
        for video in old_videos
    }
    added = 0
    for video in new_videos:
        if video["id"] not in old_ids:
            old_videos.append(video)
            added += 1
    old_videos.sort(
        key=lambda video: video["publishedAt"],
        reverse=True
    )
    with open(JSON_FILE, "w", encoding="utf-8") as f:
        json.dump(
            {
                "videos": old_videos
            },
            f,
            ensure_ascii=False,
            indent=2
        )
    print(f"RSSから取得: {len(new_videos)}件")
    print(f"新規追加: {added}件")


if __name__ == "__main__":
    main()