import { caesarCipher } from '../ciphers/caesar.js';
import { rot13 } from '../ciphers/rot13.js';
import { atbash } from '../ciphers/atbash.js';
import { vigenere } from '../ciphers/vigenere.js';
import { morseCode } from '../ciphers/morse.js';

export function applyOperation(type, input, options = {}) {
  switch (type) {
    case 'caesar':
      return caesarCipher(input, options.shift || 3);
    case 'rot13':
      return rot13(input);
    case 'atbash':
      return atbash(input);
    case 'vigenere':
      return vigenere(input, options.key || '');
    case 'morse':
      return morseCode(input);
    default:
      return input;
  }
}