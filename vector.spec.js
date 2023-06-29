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
})