//
// Programming A to Z - Daniel Shiffman
// 2015 Fall
//
// by Sehwan Park
// 1st Project
//

var commonWords = [];

function setup() {

  noCanvas();


  $.get('words.txt', function(data) {
    var lines = data.split('\n');
      for (var i = 0; i<lines.length; i++){
          var item = lines[i];
          commonWords.push(item); // modify data_array here
      }
    // no need to return it
    }
  );



  // Selecting the text field and button
  input = select('#textinput');
  button = select('#submit');

  input2 = select('#textinput2');
  button2 = select('#submit2');


  // What to do when button pressed
  button.mousePressed(handleInput);
  button2.mousePressed(handleInput2);

  // Selected the div which will be the "drop zone"
  // for dragging and dropping files
  dropZone = select('#drop_zone');
  // Here are the events to handle
  dropZone.dragOver(highlight);
  dropZone.drop(gotFile, unHighlight);
}


function process(txt) {
  clearText();
  
  var concordance = new Concordance();
  concordance.process(txt);
  concordance.sortByCount();
  console.log(concordance);

  var p = createP('');
  p.class('text col1'); //textLeft');
  paragraphs.push(p);
  
  var div = createElement('div', '');
  div.parent(p);
  var keys = concordance.getKeys();

  for (var i = 0; i < 20; i++) {           // if put '5' instead of 'keys.length', it show me the first 5 list
    var divIn = createElement('div', keys[i] + ' : ' + concordance.getCount(keys[i]));
    divIn.parent(div);
  }
}


function process2(txt2) {
  clearText2();
  var concordance2 = new Concordance();
  concordance2.process(txt2);
  concordance2.sortByCount();
  console.log(concordance2);

  var p2 = createP('');
  p2.class('text col2'); //textRight');
  paragraphs2.push(p2);
  
  var div2 = createElement('div', '');
  div2.parent(p2);
  var keys = concordance2.getKeys();

  for (var i = 0; i < 20; i++) {
    var divIn2 = createElement('div', keys[i] + ' : ' + concordance2.getCount(keys[i]));
    divIn2.parent(div2);
  }
}


// Many DOM elements
var dropZone, input, button, sample, clearButton;
var input2, button2;

// An array to keep track of all the new DOM elements being added
var paragraphs = [];
var paragraphs2 = [];

var inputText = '';
var inputText2 = '';


// When the file is loaded
function fileLoaded(data) {
  var txt = data.join('\n');
  var txt2 = data.join('\n');

  input.html(txt);
  input2.html(txt2);
}

// Handle dropzone events
function highlight() {
  dropZone.style('background', '#AAA');
}

function unHighlight() {
  dropZone.style('background','');
}

function gotFile(file) {
  if (file.type === 'text') {
    // process(file.data);
    inputText += file.data + '\n\n';
    input.html(inputText);
  } else {
    // In case it's some weird other kind of file
    alert('this is not a .txt file.');
  }
}



// Handle the text input field
function handleInput() {
  process(input.value());
}

function handleInput2() {
  process2(input2.value());
}


// Clear all the divs with remove()
function clearText() {
  //input.html('');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].remove();
  }
  paragraphs = [];
}

function clearText2() {
  //input.html('');
  for (var i = 0; i < paragraphs2.length; i++) {
    paragraphs2[i].remove();
  }
  paragraphs2 = [];
}
