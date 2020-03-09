module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0, count = []) {
        depth++;
        count.push(depth);
        arr.forEach((key) => {
            if (Array.isArray(key)) this.calculateDepth(key, depth, count);
        });
        return Math.max(...count);
    }
};