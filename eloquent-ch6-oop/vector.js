class Vec{
    constructor(x, y){
        this.x= x;
        this.y = y;
    }
    plus(anotherVec){
        let addedX = this.x + anotherVec.x;
        let addedY = this.y + anotherVec.y;
        return new Vec(addedX, addedY)
    }
    minus(anotherVec){
        let subX = this.x - anotherVec.x;
        let subY = this.y - anotherVec.y;
        return new Vec(subX, subY)
    }
     length(){
        return Math.sqrt(this.x**2 + this.y**2)
    }
} 

console.log(new Vec(3, 4).length);
// → 5
