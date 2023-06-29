
export class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static of(x,y){
        return new Vector(x,y)
    }

    //It adds 2 vectors and returns rge results as a new vector
    //@param {Vector} v - the vector to add
    //@returns {Vector} - the sum of the two vector
    add(v) {
      return new Vector(this.x + v.x,this.y + v.y);
    }

    //It subtracts 2 vectors and returns a new vector
    //@param {Vector} v - the vector to add
    //@returns {Vector} - the results of the subtraction
    subtract(v) {
      return new Vector(this.x - v.x,this.y - v.y);
    }

    //It subtracts 2 vectors and returns a new vector
    //@param {Vector} scalar - the factor that would be used to scale the vector
    //@returns {Vector} - the results of a vector that was scaled with the scaling factor
    multiply(scalar){
        return new Vector(this.x * scalar, this.y * scalar);
    }

    //It calculates vector length
    //@param {Vector} -
    //@returns {Vector} x - y
    abs() {
      return Math.sqrt(this.x**2 + this.y**2);
    }

    //It calculates vector length
    //@param {Vector} x - y
    //@returns floating value
    unit(){
        const length = this.abs();
        if (length == 0){
            return new Vector(0,0)
        }
        return new Vector(this.x/length, this.y/length);
    }

    //It calculates vector length
    //@param {Vector} -
    //@returns floating value
    direction(){
        return Math.atan2(this.y, this.x)
    }
}

const vector_1 = new Vector(1, 2)
const vector_2 = new Vector(2, 0.5)

console.log(vector_1.add(vector_2))
console.log(vector_1.subtract(vector_2))
console.log(vector_1.multiply(2))
console.log(vector_1.abs())
console.log(vector_1.unit())
console.log(vector_1.direction())