// box animation with GreenSock
 
gsap.timeline({
    scrollTrigger: {
        trigger : ".box",
        start: "center center",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true,
    }
 }).from(".text1", {x : innerWidth * 1})
  .from(".text2", {x : innerWidth * -1})
  .from(".text3", {x : innerWidth * 1})
  .from(".logo", {
      y : innerWidth * 1,
      rotate: 360
})

// box2 animation with GreenSock
gsap.timeline({
    scrollTrigger: {
        trigger : ".box2",
        start: "center center",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true,
    }
 })
.from(".box2", {opacity: 0})
.from(".text4", {x : innerWidth * 1})
.from(".text5", {x : innerWidth * -1})
.from(".text6", {x : innerWidth * 1})
  
