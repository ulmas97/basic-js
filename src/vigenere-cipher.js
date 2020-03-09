class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = reverse;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error();
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const maxLength = Math.max(message.length, message.length);
        let result = '';
        let rightMessage = this.reverse == false ? message.toUpperCase().split('').reverse() : message.toUpperCase();
        key = key.toUpperCase();
        let newMessage = [];
        let newKey = '';
        let innerCount = 0;
        for (let i = 0; i < maxLength; i++) {
            if (alphabet.indexOf(rightMessage[i]) != -1) {
                newMessage.push(alphabet.indexOf(rightMessage[i]));
                if (innerCount >= key.length) {
                    newKey += key[innerCount % key.length];
                    innerCount++;
                } else {
                    newKey += key[innerCount];
                    innerCount++;
                }
            } else {
                newMessage.push(-1);
            }
        }
        innerCount = 0;
        for (let i = 0; i < maxLength; i++) {
            if (newMessage[i] == -1) result += rightMessage[i];
            else {
                result += alphabet[(newMessage[i] + alphabet.indexOf(newKey[innerCount])) % alphabet.length];
                innerCount++;
            }
        }
        return result;
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error();
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const maxLength = Math.max(message.length, message.length);
        let result = '';
        let rightMessage = this.reverse == false ? message.toUpperCase().split('').reverse() : message.toUpperCase();
        key = key.toUpperCase();
        let newMessage = [];
        let newKey = '';
        let innerCount = 0;
        for (let i = 0; i < maxLength; i++) {
            if (alphabet.indexOf(rightMessage[i]) != -1) {
                newMessage.push(alphabet.indexOf(rightMessage[i]));
                if (innerCount >= key.length) {
                    newKey += key[innerCount % key.length];
                    innerCount++;
                } else {
                    newKey += key[innerCount];
                    innerCount++;
                }
            } else {
                newMessage.push(-1);
            }
        }
        innerCount = 0;
        for (let i = 0; i < maxLength; i++) {
            if (newMessage[i] == -1) result += rightMessage[i];
            else {
                result +=
                    alphabet[
                        Math.abs(
                            (newMessage[i] + alphabet.length - alphabet.indexOf(newKey[innerCount])) % alphabet.length
                        )
                    ];
                innerCount++;
            }
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;