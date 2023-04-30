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
const mainContent = document.getElementsByClassName("section-wrap")[0];

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
        mainContent.classList.remove("hidden");
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


var slides=document.querySelectorAll('.slide'),tl=gsap.timeline({paused:true});
for(var i=slides.length;i--;){
    if(i>0){
      if(i!=slides.length-1){tl.addPause()}
        tl.to(slides[i],0.5,{scale:.5,ease:Back.easeInOut})
        .to(slides[i],0.7,{xPercent:-100},'L'+i)
        .from(slides[i-1],0.7,{xPercent:100},'L'+i)
        .set(slides[i],{zIndex:1-i}).set(slides[i-1],{zIndex:slides.length})
        .from(slides[i-1],0.5,{scale:.5,ease:Back.easeIn})
    };
};
function GO(e){
  var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
  if(SD<0){tl.play()}else{tl.reverse()};
};

document.getElementsByClassName('right')[0].addEventListener("click",function(){GO(-1)});
document.getElementsByClassName('left')[0].addEventListener("click",function(){GO(1)});