module.exports = function repeater(
    str, { repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|' }
) {
    function add() {
        if (!additionRepeatTimes) return addition ? addition : '';
        let result = addition;
        for (let i = 1; i < additionRepeatTimes; i++) {
            result += additionSeparator + addition;
        }
        return result;
    }

    let result = str;
    for (let i = 1; i < repeatTimes; i++) {
        result += add() + separator + str;
    }
    return result + add();
};