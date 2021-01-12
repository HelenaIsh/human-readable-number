module.exports = function toReadable (number) {
    let result = '';
    const numbers = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
    const [hundreds, tens, digits] = number.toString().padStart(3).split('').map(x => parseInt(x));
    if (number === 0) {
        result = 'zero';
    }
    if (hundreds) {
        result = numbers[hundreds - 1] + ' hundred';
    }
    if (tens) {
        if (tens > 1) {
            if (tens === 8) {
                result += ' eighty';
            } else if (tens === 5) {
                result += ' fifty';
            } else if (tens === 4) {
                result += ' forty';
            } else if (tens === 3) {
                result += ' thirty';
            } else if (tens === 2) {
                result += ' twenty';
            } else {
                result += ' ' + numbers[tens - 1] + 'ty'
            }
            if (digits) {
                result += ' ' + numbers[digits - 1];
            }
        } else if (tens === 1) {
            if (digits === 8) {
                result += ' eighteen';
            } else if (digits === 5) {
                result += ' fifteen';
            } else if (digits === 3) {
                result += ' thirteen'
            } else if (digits === 2) {
                result += ' ' + numbers[11]
            } else if (digits === 1) {
                result += ' ' + numbers[10]
            }else if (digits === 0) {
                result += ' ' + numbers[9]
            } else {
                result += ' ' + numbers[digits - 1] + 'teen'
            }
        }
    }
    if (digits && !tens){
        result += ' ' + numbers[digits - 1];
    }
    return result.trim();
}
