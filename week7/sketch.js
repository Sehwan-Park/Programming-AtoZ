// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

var dot;

function setup() {

  // Make a tiny canvas for loading animation
  var canvas = createCanvas(50, 50);
  canvas.parent('canvas');

  dot = "■";

  // Make 5,000 DOM elements one a time
  // Using a function that triggers the action with a delay
  for (var i = 0; i < 2500; i++) {
    makeIt(i);
  }

  function makeIt(count) {
    // Do this every 5 milliseconds
    setTimeout(reallyMakeIt, count*5);


    // This "closure" gives us access to the value of count
    // which was filled from i in the original loop
    function reallyMakeIt() {

      var span = createSpan(dot + ' ');
      span.parent('stuff');
       var colorR = Math.floor(Math.random() * 140);
       var colorG = Math.floor(160+(Math.random() * 90));
       var colorB = 255;
       span.elt.style.fontSize = "70px";
       span.elt.style.color = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
       //console.log(span.elt.style);
    }
  }
}

