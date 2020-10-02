const myFunction = () => {
    var btn = document.createElement("DIV");
    btn.className = "card col-md-3";
    btn.style = "display: inline-block"; 
    var videoTitle = "sample"; 
    var video = '<a href="www.facebook.com">' + '<div class="card-image-top">' + '<video width="100%">' + 
    '<source src="videos/' + videoTitle + '.mkv" type="video/mp4">' +
    '<source src="videos/' + videoTitle + '.webm" type="video/webm">' +
    'Your browser does not support HTML video.' +
  '</video>' + '<p>' + 'Criminal Justice Video Sample' + '</p>' + '</div>' + '</a>';
    btn.innerHTML = video;
    document.getElementById("videos").appendChild(btn);
}  

for(var i = 0; i < 5; i++){
    myFunction();
}
