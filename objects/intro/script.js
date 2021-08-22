const backpack = {
    name:'everyday backpack',
    volume: 30,
    color:'grey',
    pocketNum: 15,
    strapLength: {
        left:26,
        right:20,
    },
    lidOpen: false,
    toggleLid: function(lidStatus) {
        this.lidOpen =lidStatus;
    },
    newStrapLength: function(lengthLeft,lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};
// to access an object and show it on the browser console
console.log(backpack);

// to add a string to the object
console.log('the backpack object:',backpack);

// to access an object property using dot notation
console.log('the backpack color:',backpack.color);

// to access an object property using bracket notation
console.log('the backpack color:',backpack['color']);

// to access an object propery and change its name using bracket notation
var query = 'pocketNum'; 
console.log('the backpack query:',backpack[query]);