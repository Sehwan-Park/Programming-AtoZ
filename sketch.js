
var verb1 = [
'Spend money', 'Pay tax',
'Drink beers', 'Kiss your wife',
'Read your diary', 'Create messy sculpture',
'Ask about your job', 'Work hard',
'Drive your car', 'Use your computer'
] 

var verb2 = [
'Eat bagel','Study hard',
'Play all night', 'Love my cat',
'Pay tax','Climb mountain',
'Use credit card', 'Pay back loan',
'Enjoy baseball game', 'Buy playstation 4'
] 

var verb3 = [
'Visit Karaoke', 'Plan sex',
'Study at library', 'Order coffee',
'See him', 'Go to bed',
'Return home', 'Change her dress',
'Live in isolated province', 'See your wife'
]


var v1 = Math.floor(Math.random() * 10);
var v2 = Math.floor(Math.random() * 10);
var v3 = Math.floor(Math.random() * 10);


//var yyy = int(1.1);
var n1 = verb1[v1];
var n2 = verb2[v2];
var n3 = verb3[v3];

// write the sentence
document.write(n1 +", "+ n2 +", "+ n3);



