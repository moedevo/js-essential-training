// Challenge: Build and modify an array

// Build an array with 8 items.
const food = ["Burger", "Potatoes" ,"Yogurt", "Broccoli", "Salmon", "Oat", "Beans", "Tuna"]
console.log(food)

// Remove the last item.
food.pop()
console.log(food)

// Add the last item as the first item on the array.
food.unshift(food.pop())
console.log(food)

// Sort the items by alphabetical order.
food.sort()
console.log(food)

// Use the find() method to find a specific item in the array.
const meats = food.find((item) => {
    if (item === "Burger")  {
        return item;
    }
});
console.log(meats)

// Remove the item you found using the find method from the array.
const remove = food.indexOf("Burger")
food.splice(remove,1)
console.log(food)
