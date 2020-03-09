const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr.split("");
    const array_size = 10;
    let sliced_expr = [];
    let final_string = "";
    for (let i = 0; i <expr.length; i += array_size) {
        sliced_expr.push(expr.slice(i, i + array_size));
    }

    for (let i = 0; i < sliced_expr.length; i++) {
        morze_expr = "";
        for (let j = 0; j < sliced_expr[i].length; j+=2) {
            if(sliced_expr[i][j]==0 && sliced_expr[i][j]==0)
            {
                continue;
            }
            if(sliced_expr[i][j]==1 && sliced_expr[i][j+1]==0)
            {
                morze_expr += '.';
            }
            else
            if(sliced_expr[i][j]==1 && sliced_expr[i][j+1]==1)
            {
                morze_expr += '-';
            }
            else
            if(sliced_expr[i][j]=="*")
            {
                morze_expr += ' ';
                break;
            }   
        }   
        if (morze_expr == " ") {
            final_string += morze_expr;
        }
        else {
            final_string += MORSE_TABLE[morze_expr];
        }
    }
    return final_string;
}



module.exports = {
    decode
}