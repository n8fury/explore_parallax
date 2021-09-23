 let controller = new ScrollMagic.Controller();
 let timeline = new TimelineMax();
 timeline
 .to(".text", 3, {
   x: 250
 })
 .to(".text", 2, {
   opacity: 0
 },"-2");
