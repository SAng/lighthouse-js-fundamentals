var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var counter = 0
// Write a while loop that prints out the contents of ingredients:
while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter++
}

// Write a for loop that prints out the contents of ingredients:
for (counter = 0; counter < ingredients.length; counter++) {
  console.log(ingredients[counter])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (counter = (ingredients.length - 1); counter > -1; counter--) {
  console.log(ingredients[counter])
}