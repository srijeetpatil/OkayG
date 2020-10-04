import {database} from './database.js';

window.onload = function () {    
    var url = document.location.href,
    params = url.split('?')[1].split('=')[1];
    var title = database.videos[findVideo(params)].title; 
    myfunc(params);
    var like = "Like";
    var status = true;    
    document.getElementById("videoPlace").innerHTML = 
    '<video class="video" style="margin: auto; display: block;" controls id="videoPlace" autoplay loop autobuffer muted playsinline>' +                         
        '<source src="videos/'+ params + '.mkv" type="video/mp4"></source>' + 
        '<source src="videos/'+ params + '.webm" type="video/webm"></source>' + 
        'Your browser does not support HTML video.' +
    '</video>' + 
    '<div class="video" style="margin: auto; display: block"><h5>' + title + '  <button id="like" type="button" class="btn btn-outline-info">'+ like +'</button></h5></div>';        
    document.getElementById("like").addEventListener('click', function() {
        var danger = "btn btn-danger";
        var info = "btn btn-outline-info";        
        status = !status;
        if(status == false){
            like = "Dislike";
            document.getElementById("like").className = danger; 
            database.videos[findVideo(params)].Liked = 1;                       
        }
        else{
            like = "Like";
            document.getElementById("like").className = info;  
            database.videos[findVideo(params)].Liked = 0;          
        }
        document.getElementById("like").innerHTML = like;
    });
}

function findVideo(params) {
    for(var i = 0; i < database.videos.length; i++){
        if(database.videos[i].name === params){
            return i;
        }
    }
}


const myFunction = (btn) => {  
    document.getElementById("alsoWatch").appendChild(btn);
  }  
  
  const myfunc = (params) => database.videos.map((video) => {
      if(video.name != params){
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
      }
  });
 