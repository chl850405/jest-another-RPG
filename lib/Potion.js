//constructor function 
function Potion(name) {
    //instance of a new object /creates empty object
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    //conditional statement if potion in health potion
    if (this.name === 'health') {
        //value of health potion random number between 30 & 40
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        //if not health potion value  random number between 7 & 12
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

//constructor so the tests can create potion
module.exports = Potion;