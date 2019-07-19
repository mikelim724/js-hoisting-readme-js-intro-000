function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe"; //place before return statement
  return lyric;

}


function crazy() {
  // fix the code in here:

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }

  thisIsCrazy(); // call function after because before it was declare thisiscrazy, then called nothing, then assigned it a function
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";
  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
  sayMy();


}
