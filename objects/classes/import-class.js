import Teamug from "./class.js";

const blackTeaMug = new Teamug(
  "Black Tea",
  20,
  "black",
  10,
  15,
  26,
  true,
  "December 10, 2020 15:00:00 PST"
);

console.log("The blackTeaMug Object:", blackTeaMug);
console.log("The balckTeaMug Mug Number:", blackTeaMug.mugNum);
console.log("The balckTeaMug Hot Temp:", blackTeaMug.teaTemp.Hot);
console.log("The balckTeaMug Cold Temp:", blackTeaMug.teaTemp.Cold);
console.log("The blackTeaMug Boil:", blackTeaMug.boiling);
console.log("Date Acquired:", blackTeaMug.dateAcquired);
console.log("Days Since Acquired:", blackTeaMug.teaAge());
console.log('Solved with L<3VE by @moedevo')