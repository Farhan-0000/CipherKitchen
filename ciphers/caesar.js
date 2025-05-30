export function caesarCipher(input, shift = 3) {
    return input.split('').map(char => {
      const isUpper = char >= 'A' && char <= 'Z';
      const isLower = char >= 'a' && char <= 'z';
      
      if (!isUpper && !isLower) return char;
      
      const base = isUpper ? 65 : 97;
      return String.fromCharCode((char.charCodeAt(0) - base + shift + 26) % 26 + base);
    }).join('');
  }