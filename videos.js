async function setVideos(){
    var container = document.getElementById("videos_container");
    const response = await fetch("videos.json");
    const data = response.json();
    var already_stream_type = [];
    data["videos"].forEach(element => {
        var div1 = document.createElement("div");
        var img1 = document.createElement("img");
        img1.setAttribute("src", element["thumbnail"]);
        div1.appendChild(img1);
        var div2 = document.createElement("div");
        div1.appendChild(div2);
        var p1 = document.createElement("p");
        p1.textContent = element["title"];
        div2.appendChild(p1);
        var p2 = document.createElement("p");
        p2.textContent = dayCreater(element["publishedAt"]);
        div2.appendChild(p2);
        var ty = "その他";
        if(element["stream_type"]){
            ty = element["stream_type"];
            if( !(ty in already_stream_type) ){
                already_stream_type[already_stream_type.length] = ty;
                var details1 = document.createElement("details");
                details1.setAttribute("id", "videos_stream_type_" + ty);
                var summary1 = document.createElement("summary");
                summary1.textContent = ty;
                details1.appendChild(summary1);
                container.appendChild(details1);
            }
        }
        document.getElementById("videos_stream_type_" + ty).appendChild(div1);
    });
}

function dayCreater(dayString){
    var day = new Date(dayString);
    return day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate();
}

window.addEventListener("load", function() {
   setVideos();
});