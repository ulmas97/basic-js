module.exports = function transform(arr) {

    if (!Array.isArray(arr)) {
        throw Error;
    }

    var transArr = [];
    var currentIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                transArr.pop();
                break;
            case '--double-next':
                if (i < arr.length - 1)
                    transArr.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (i > 0)
                    transArr.push(arr[i - 1]);
                break;
            default:
                transArr.push(arr[i]);
                break;
        }
    }

    return transArr;
};