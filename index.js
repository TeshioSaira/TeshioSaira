async function getNewestVideo(){
    const response = await fetch('data.json');
    const data = await response.json();
    const videos = data["videos"];
    var newestDate = new Date('2001-01-01T08:00:16+00:00');
    var newestNumber = 0;
    for(var i = 0; i < videos.length; i++){
        element_date = new Date(videos[i]["publishedAt"]);
        if(newestDate.getTime() < element_date.getTime()){
            newestDate = element_date;
            newestNumber = i;
        }
    }
    document.getElementById("videoIframe").setAttribute("src", videos[newestNumber]["url"]);
    document.getElementById("videoTitle").textContent = videos[newestNumber]["title"];
}

window.addEventListener("load", function() {
    getNewestVideo();
});