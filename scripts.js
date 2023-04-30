gsap.registerPlugin(TextPlugin, EasePack);

const introVideo = document.getElementById("intro_video");
const introVideoWrap = document.getElementById("title_intro");
const h1Wrap = document.getElementsByClassName("h1-wrap")[0];

window.onload = function() {
    introVideo.classList.add("--video-start");
    setTimeout(() => {
        introVideo.play();
    }, 100);
}

let introText = gsap.timeline({autoRemoveChildren: true}).pause();

introVideo.onended = function() {
    introVideoWrap.style.display = "none";
    introVideo.classList.remove("--video-start");
    introVideo.classList.add("--video-end");
    introText.play();
}

const b = document.querySelectorAll("span.beginning")[0];
const t = document.querySelectorAll("span.there")[0];
const a = document.querySelectorAll("span.and")[0];
const c = document.querySelectorAll("span.canoe")[0];
const canoe = document.getElementsByClassName("theCanoe")[0];

introText.to(".beginning", {
    duration: 4,
    opacity: 100,
    scale: 2,
    ease: "power1.out"
}).to(".beginning", {
    duration: 1,
    opacity: 0,
    ease: "expo.inOut",
    onComplete: () => {
        b.style.display = "none";
        t.style.display = "block";
    }
}, ">-=1")

introText.to(".there", {
    duration: 2,
    opacity: 100,
    scale: 2,
    y: "+=100",
    ease: "power1.out"
}).to(".there", {
    duration: 1,
    opacity: 0,
    ease: "expo.inOut",
    onComplete: () => {
        t.style.display = "none";
        a.style.display = "block";
        canoe.classList.remove("hidden");
    }
}, ">-=1");

introText.set(".and", {
    x: "-200%"
}).to(".and", {
    duration: 2,
    x: "250%",
    ease: "slow(0.7, 0.7, false)",
    onComplete: () => {
        a.style.display = "none";
        c.style.display = "block";
    }
})

introText.set(".canoe", {
    scale: 0
}).to(".canoe", {
    duration: 2,
    scale: 4,
    ease: "power1.in"
})

introText.to(".h1-wrap", {
    duration: 2,
    y: "-100%",
    onComplete: () => {
        h1Wrap.style.display = "none";
    }
}, ">+=1")