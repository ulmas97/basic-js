const chainMaker = {
    arr: [],
    getLength() {
        return this.arr;
    },
    addLink(value) {
        this.arr.push(value);
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' || position > this.arr.length - 1 || position < 1) {
            this.arr = [];
            throw new Error();
        }
        this.arr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        const result = this.arr.reduce((acc, key, i) => {
            if (i == this.arr.length - 1) acc += `( ${key} )`;
            else acc += `( ${key} )~~`;
            return acc;
        }, '');
        this.arr = [];
        return result;
    }
};

module.exports = chainMaker;