const titleVideo = document.getElementsByTagName("video")[0];
const titleVideoContainer = document.getElementById("title_intro");
const mainContainer = document.getElementsByClassName("--main-video-container")[0];
const mainVideo = document.getElementById("main_video");

const timeline = document.getElementById("timeline_elements");

var currentIndex = 0;

titleVideo.onended = function() {
    titleVideoContainer.classList.add("--video-end");
    const c = document.getElementsByClassName("--controls");
    for (i in c) {
        if (c[i].nodeName) {
            c[i].onclick = e => {
                if (e.target.classList.contains("--f")) {
                    if (currentIndex < 9) {
                        currentIndex += 1;
                    } else {
                        currentIndex = 0;
                    }
                } else if (e.target.classList.contains("--b")) {
                    if (currentIndex > 0) {
                        currentIndex += -1;
                    } else {
                        currentIndex = 9;
                    }
                }
                console.log(currentIndex);

                mainVideo.play();
                setTimeout(() => {
                    mainVideo.pause();
                }, 4160);
            }
        }
    }
};

window.onload = function() {
    titleVideo.classList.add("--video-start");
    mainContainer.classList.add("--fade-opacity-in");
    mainVideo.classList.add("--fade-opacity-in");
    timeline.classList.add("--fade-opacity-in");
    setTimeout(() => {
        titleVideo.play();
    }, 100);
}
