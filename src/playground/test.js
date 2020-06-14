const multiplier = {
    arr: [13, 12, 1],
    x: 5,
    multiply(){
        return this.arr.map((num) => num * this.x);
    }
}

console.log(multiplier.multiply());