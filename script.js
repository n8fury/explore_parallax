let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
timeline
  .to(".rock1", 3, { y: -300, })
  .to(".girl1", 3, { y: -200, }, "-=3")
  .to(".bg1", 3, { y: 50, }, "-=3");
let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);


