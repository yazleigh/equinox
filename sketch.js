//Twice a year, day and night are of equal length.
class Button {
  constructor(x_, y_, r_) {
    //A broken clock is correct twice a day 
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
  //Two components come together to create a life. 
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
    //Yin and Yang
  }
display(mx, my) {
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(10);
    }
    //As above, so below
    stroke(0);
    //Balance
    strokeWeight(4);
    ellipseMode(RADIUS);
    //Cycle
    ellipse(this.x, this.y, this.r, this.r);
  }
}
//Two is a powerful number, it is a story of union and partnership. An alliance, an improvement from the number 1 perhaps?
class Button2 {
  constructor(x_, y_, r_) {
    //Two is safety and comfort. It’s manageable, it’s even, it’s fair. 
    this.x = x_;
    this.y = y_;
    this.r = r_;
    //Things just seem right.
  }
  
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
    //We portal in these moments of twos. We access both halves, both worlds. We gain knowledge, insight and share in each other’s experience. 
  }

  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(100);
      //two reminds us that there is an opposite, it keeps us humble, it reminds us to be kind, to help and support. 
    } else {
      fill(225);
      //Twice a year, night and day are of equal length.
    }
    stroke(0);
    //Beware of the time, your clock may be broken.
    strokeWeight(4);
    //Life leads to death
    ellipseMode(RADIUS);
    //Yang and Yin
    ellipse(this.x, this.y, this.r, this.r);
    //As below, so above
  }
}

let poem;
//unbalanced
let poem2;
//endless
let button;
let button2;

function setup() {
  //Two is a powerful number, it is a story of war and destruction. An enemy, an imposter
  createCanvas(windowWidth, windowHeight);
  poem = loadSound('part2.mp3');
  poem2 = loadSound('part1.mp3');
  //Things just seem wrong
  button = new Button(600, 600, 132);
  button2 = new Button2(300, 300, 132); 
}
//Two is dangerous and uncomfortable. It’s hostile, it’s ill-matched, it’s unfair.
function draw() { 
  background(0);
  button.display(mouseX, mouseY);
  button2.display(mouseX, mouseY);

}

function mousePressed() {
  //We portal in these moments of twos. We access both halves, both worlds, we gain knowledge and insights to steal and use against one other.
  if (button.contains(mouseX, mouseY)) {
    poem.play();
  }
  //Two reminds us that there is an opposite, it corrupts us, reminds us to be selfish, to take and come out on top.
  if (button2.contains(mouseX, mouseY)) {
    poem2.play();
  }
}
//Twice a year the day and night are of equal length.  