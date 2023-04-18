const titleVideo = document.getElementsByTagName("video")[0];
const titleVideoContainer = document.getElementById("title_intro");
const mainContainer = document.getElementsByClassName("--main-video-container")[0];
const mainVideo = document.getElementById("main_video");
const timeline = document.getElementById("timeline_elements");

titleVideo.onended = function() {
    titleVideoContainer.classList.add("--video-end");
    document.body.classList.remove("--lock-scroll");
}

window.onload = function() {
    titleVideo.classList.add("--video-start");
    document.body.classList.add("--lock-scroll");
    mainContainer.classList.add("--fade-opacity-in");
    mainVideo.classList.add("--fade-opacity-in");
    timeline.classList.add("--fade-opacity-in");
    setTimeout(() => {
        titleVideo.play();
    }, 100);
}