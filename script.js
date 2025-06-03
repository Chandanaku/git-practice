let index = 0;
function genratecolor() {
  var ls = {
    Active: "Orange",
    Responsible: "Yellow",
    Supportive: "Purple",
    Happy: "Green",
    Sad: "Blue",
    Angry: "Red",
    Tense: "Black",
    NotSure: "gray",
  };
  const option = document.getElementsByTagName("select")[0].value;
  document.getElementsByTagName("body")[0].style.backgroundColor =
    ls[option] || "white";
  index++;
  if (ls.length - 1 < index) {
    index = 0;
  }
}
