var titleVideo = document.getElementsByTagName("video")[0];
const videoContainer = document.getElementById("title_intro");
const mainContainer = document.getElementsByTagName("main")[0];

titleVideo.onended = function() {
    videoContainer.classList.add("--video-end");
    document.body.classList.remove("--lock-scroll");
}

window.onload = function() {
    titleVideo.classList.add("--video-start");
    document.body.classList.add("--lock-scroll");
    mainContainer.classList.add("--fade-opacity-in");
    setTimeout(() => {
        titleVideo.play();        
    }, 100);
}