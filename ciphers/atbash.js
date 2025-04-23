export function atbash(input) {
    return input.split('').map(char => {
      const isUpper = char >= 'A' && char <= 'Z';
      const isLower = char >= 'a' && char <= 'z';
      
      if (!isUpper && !isLower) return char;
      
      const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const lastChar = isUpper ? 'Z'.charCodeAt(0) : 'z'.charCodeAt(0);
      
      // Reverse the position in the alphabet
      return String.fromCharCode(lastChar - (char.charCodeAt(0) - base));
    }).join('');
  }