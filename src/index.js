const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    
    function getLetter(elem) {
        if (elem === '**********') {
            return ' ';
        }
        let charStr = '';
        for (let i = 0; i < 10; i += 2) {
            let twoNumbers = elem.slice(i, i + 2);
            if (twoNumbers === '00') {
                continue;
            }
            if (twoNumbers === '10') {
                charStr += '.';
            }
            if (twoNumbers === '11') {
                charStr += '-';
            }
        }
        return MORSE_TABLE[charStr];
    }

    return expr.match(/[01*]{10,10}/g).map(elem => getLetter(elem)).join('')
}

module.exports = {
    decode
}