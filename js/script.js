import { LinkedList } from "./linkedList.js";

const onOffSwitch = document.querySelector("#flexSwitchCheckChecked");
onOffSwitch.checked = true;
onOffSwitch.addEventListener("change", togglePlaySlides);

var intId = setInterval(displayNext, 250);

// Get id names from images:
var ids = [];
var items = document.querySelectorAll(".dragons").values();
for (let i of items) {
  console.log(i);
  ids.push(i.id);
}

// Instantiate a Linked list
var lList = new LinkedList(ids);
var current = lList.getFirst();

console.log(lList.displayList());

/**
 * Toggles the class "current" to show or hide an element.
 */
function displayNext() {
  document.getElementById(current.data).classList.toggle("current");
  current = current.getNext();
  document.getElementById(current.data).classList.toggle("current");
}

/**
 * A callback function for the checkbox that starts or stops the slide-show
 */
function togglePlaySlides() {
  if (intId) {
    clearInterval(intId);
    intId = null;
  } else {
    intId = setInterval(displayNext, 250);
  }
}
