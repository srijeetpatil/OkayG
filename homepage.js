import {database} from './database.js';

const myFunction = (btn) => {  
  document.getElementById("videos").appendChild(btn);
}  

const myfunc = database.videos.map((video) => {
    var btn = document.createElement("DIV");
    btn.className = "card col-md-3";
    btn.style = "display: inline-block"; 
    var videoTitle = video.name; 
    var video = '<a href="video.html?name=' + encodeURIComponent(videoTitle) + '" style="text-decoration:none; color:black">' + '<div class="card-image-top">' + '<video width="100%">' + 
    '<source src="videos/' + videoTitle + '.mkv" type="video/mp4">' +
    '<source src="videos/' + videoTitle + '.webm" type="video/webm">' +
    'Your browser does not support HTML video.' +
    '</video>' + '<p>' + video.title + '</p>' + '</div>' + '</a>';
    btn.innerHTML = video;
    return myFunction(btn);
});
