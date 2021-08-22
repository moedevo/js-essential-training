const Teamug = class {
  constructor(name, volume, color, mugNum, initHot, initCold, boil, dateAcquired) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.mugNum = mugNum;
    this.teaTemp = {
      Hot: initHot,
      Cold: initCold,
    };
    this.boiling = boil;
    this.dateAcquired = dateAcquired;
  }
  boilingStatus(boil) {
    this.boiling = boil;
  }
  newTeaTemp(SoHot, SoCold) {
    this.teaTemp.Hot = SoHot;
    this.teaTemp.Cold = SoCold;
  }
  teaAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}
export default Teamug;