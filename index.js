// Your code here
// moving the dodger left
// first i grab the dodger
const dodger = document.getElementById("dodger");
// create a function moveDodgerLeft and adding a check on the current position of the dodger
// when the event listener detects a keydown event 
// we check if the key property has the value arrow left
//if it does we get the current value of the dodgers style.left property
// then we use the string (.replace())method to strip out the px
// then store the results in the leftNumbers
// then we parse leftNumbers as an integer and store the result in left
// finally we update the dodgers style.left property using string interpolation
// by injecting the current value minus one
// if the key pressed is not arrowleft we do zilch
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
// create a function to move the dodger right using left values 
function moveDodgerRight() {
    const leftValue = parseInt(dodger.style.left.replace("px", ""), 10);
    if (leftValue > 0) {
        dodger.style.left = `${leftValue + 1}px`;// adding the left side in order to push the dodger right
    }
    }
    // Adding the event listener
    document.addEventListener("keydown", function (event) {
        if (event.key ==="ArrowRight") {
            moveDodgerRight();
        }
    });