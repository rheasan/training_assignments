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
    pop = () => {
        if(this.array.length == 0) {
            throw new Error("Cannot pop from empty Array_");
        }
        return this.array.pop();
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

test("should throw when accessing undefined or null index", () => {
    expect(() => {
        let arr = new Array_();
        arr.at(null);
    }).toThrow("Index not specified");
    expect(() => {
        let arr = new Array_();
        arr.at();
    }).toThrow("Index not specified");
});

test("pop works", () => {
    let arr = new Array_();
    arr.push(1);
    expect(arr.pop()).toBe(1);
});

test("pop throws when popping from empty array", () => {
    expect(() => {
        let arr = new Array_();
        arr.pop();
    }).toThrow("Cannot pop from empty Array_");
})