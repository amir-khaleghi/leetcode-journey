class Animal {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }
  hell0() {
    console.log(this.color);
  }
}

// let myDog = Object.create(Animal);

console.log('🟩 // file: index.js:5 // myDog:', Animal);

let newDog = new Animal('blue', 200);
console.log('🟩 // file: index.js:7 // newDog:', newDog);
newDog.hell0();
