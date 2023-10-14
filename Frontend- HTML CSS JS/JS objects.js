//constructor function (capital letter)
// object will start with 'new' and the name

function HouseKeeper (exp, name, cleaning, clean) {
  this.exp = exp;
  this.name = name;
  this.cleaning = cleaning;
  this.clean = function () {
    alert("start cleaning");
  }
}

var HouseKeeper1 = new HouseKeeper(12, "james", ["bedroom", "lobby"]);
HouseKeeper1.clean();