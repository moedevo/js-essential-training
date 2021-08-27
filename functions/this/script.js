// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume); // takes the volume inside the object
    this.volume = volume;
    console.log("this.volume after update:", this.volume); // takes the volume inside the function because we declar it 
    (function () {
      console.log("this.volume in nested function:", this.volume); // takes the default volume for the DOM
    })();
    ( () => {
        console.log("this.volume using arrow function:", this.volume); // takes the volume inside the function
    })();
  },
};
console.log(greenPack.newVolume(5));
