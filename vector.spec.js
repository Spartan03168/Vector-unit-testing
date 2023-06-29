import {Vector} from "./Vector.js";

describe("Vector.js",function(){
    const vector_1 = new Vector(1, 2)
    const vector_2 = new Vector(2, 0.5)
    it('should add two vectors correctly', function() {
        var result = vector_1.add(vector_2);
        expect(result.x).toEqual(3);
        expect(result.y).toEqual(2.5);
     });
     it('should subtract two vectors correctly', function() {
        var result = vector_1.subtract(vector_2);
        expect(result.x).toEqual(-1);
        expect(result.y).toEqual(1.5);
     });
     it('should multiply vector 1 with a scalar properly', function() {
     const scalar = 2
        var result = vector_1.multiply(scalar);
          expect(result.x).toEqual(2);
          expect(result.y).toEqual(4);
     });
     it('should multiply vector 2 with a scalar properly', function() {
     const scalar = 2
        var result = vector_2.multiply(scalar);
        expect(result.x).toEqual(4);
        expect(result.y).toEqual(1);
        });
     it('should return the square root', function() {
        const vector = new Vector(1, 2);

        var result = vector.abs();
        expect(result.x).toEqual(Math.abs(vector.x));
        expect(result.y).toEqual(Math.abs(vector.y));
        });
     it('should return the square root', function() {
        const vector = new Vector(1, 2);
        var result = vector.abs();
        expect(result.x).toEqual(Math.abs(vector.x));
        expect(result.y).toEqual(Math.abs(vector.y));
        });
})

//Math.sqrt(this.x**2 + this.y**2)