class Array_ {
    #array;
    constructor(){
        this.array = [];
    }
    at = (index) => {
        if(index === undefined || index === null) {
            throw new Error("Index not specified");
        }
        if(this.array.length <= index || index < 0){
            throw new Error("Out of Bounds access");
        }
        return this.array[index];
    }
    push = (item) => {
        this.array.push(item);
    }
}

test("should throw when accessing out of bounds", () => {
    expect(() => {
        let arr = new Array_();
        arr.push(1);
        arr.at(5000);
    }).toThrow("Out of Bounds access");
});

test("array index access works", () => {
    let arr = new Array_();
    arr.push(1);
    arr.push(1);
    expect(arr.at(0)).toBe(1);
});