let item = "Fireworks";
const array = [5, true, item, "something"]
console.log("Array: ",array)

// Array length
console.log("Array Length: ",array.length)

// Get an item
console.log("Third Item: ",array[3])

// Change an item
array[1] = false
console.log("Change the Second Item: ",array)

/** Array Methods **/

const newArray = ["Apple" , "Banana", "Strawberry"]
// Join
console.log("join:", newArray.join(" "))

// Push : Adding at the End of Array
newArray.push("Watermelon")
console.log("push", newArray)

// Unshift: Adding at the Begining of Array
newArray.unshift("Grapes")
console.log("unshift: ",newArray)

// Sort:
newArray.sort()
console.log("sort:",newArray)

// Shift: Removing the first item
newArray.shift()
console.log("shift:",newArray)

// Pop: Removing the last item 
newArray.pop()
console.log("pop:",newArray)


/** Array Functions **/

const arrayFun1 = ["Apple" , "Banana", "Strawberry", "Watermelon", "Grapes"]
arrayFun1.forEach((item) => {
    item = `Fruits: ${item}`;
    console.log(item)
});

const backpackContents = ["piggy", "headlamp", "pen"];
const longItems = backpackContents.find( (item) => {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);