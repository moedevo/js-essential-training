const teamug = {
  name: "Green Tea Mug",
  volume: 30,
  color: "white",
  mugNum: 5,
  teaTemp: {
    hot: 39,
    cold: 6,
  },
  boiling: false,
  boilingStatus: function (boil) {
    this.boiling = boil;
  },
  newTeaTemp: function (SoHot, SoCold) {
    this.teaTemp.hot = SoHot;
    this.teaTemp.cold = SoCold;
  },
};

console.log("The Tea Mug Object:", teamug);
console.log("The Tea Mug Volume:", teamug.volume);

console.log("The Tea Temperature Before Boiling:", teamug.teaTemp.hot);

teamug.boilingStatus(true)
console.log("Boil The Tea", teamug.boiling)

teamug.newTeaTemp(100, 0);

console.log("The Tea Temperature After Boiling:", teamug.teaTemp.hot);

teamug.boilingStatus(false)
console.log("Boil The Tea", teamug.boiling)

teamug.newTeaTemp(0, -3);

console.log("The Tea Temperature After Putting it in a Fridge:", teamug.teaTemp.cold);

console.log('Solved with L<3VE by @moedevo')