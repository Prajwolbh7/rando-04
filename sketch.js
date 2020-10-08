//randiomizer favourite food


let friends = [];

let randomIndex;
let animating = false;
let rando = [];
let imageCounter = 0;
let startRandomizerbutton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;
let bg;


function preload() {


  for (let i = 0; i <= 11; i++) {
    rando[i] = loadImage("images/rando_" + i + ".jpg")
  }
}


function setup() {

  cnv = createCanvas(500, 800);
  cnv.parent("#canvasDiv");
//  background();
  textSize(40);
  imageMode(CENTER);
  frameRate(8);




//  text("Your Answer is here !!!", 100, 300);
  //setInterval(randomizer,2000);
  //button = createButton("click to randomize");

  startRandomizerbutton = select("#randButton");
  startRandomizerbutton.mousePressed(buttonPressed);

  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addAnotherInput);

  for (let i = 0; i <4; i++){

    fill(255);

  nameInputs.push(createInput());
  nameInputs[nameInputs.length-1].parent("#inputFields");

}
}

function draw() {

  if (animating == true) {
    clear(); //it clear anything behide the canvas
    image(rando[imageCounter], width / 2, height / 2);
    if (imageCounter < rando.length-1) {
      imageCounter++;
    } else {
      imageCounter = 0;

    }

  }


}

function addAnotherInput(){


  nameInputs.push(createInput());
  nameInputs[nameInputs.length-1].parent("#inputFields");

}
function randiomizer() {



  animating = false;
  if (friends[0]) {
    // this displays random name and slice it out of array
    //background(random(200, 255));
    clear();
    randomIndex = int(random(friends.length))
    // calls the ramdom index from friends array
    //console.log(friends[randomIndex].name);
    // to print in the canvas write text and give coordinates
        image(rando[imageCounter], width / 2, height / 2);
    text(`${friends[randomIndex]}`, 50 , 190 );
    //text(friends[randomIndex].name +"'s favourite color is'"+ friends[randomIndex].color, 100,100);

    friends.splice(randomIndex, 1);
    //console.log(friends);


  } else {

    fill(255);
  //  background();
  //  textAlign(RIGHT);
    //bg = loadImage("images/rando_1.jpg");
    text("NO FOOD TODAY !!!", 50,190);


  }

}

function buttonPressed() {

  if (firstTime){
  for (let i = 0; i < nameInputs.length; i++){
    friends.push(nameInputs[i].value());
  }
    firstTime = false;
  }
  animating = true;
  setTimeout(randiomizer, 2000);

}
