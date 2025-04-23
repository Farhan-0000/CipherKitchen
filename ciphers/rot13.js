export function rot13(input) {
    return input.split('').map(char => {
      const isUpper = char >= 'A' && char <= 'Z';
      const isLower = char >= 'a' && char <= 'z';
      
      if (!isUpper && !isLower) return char;
      
      const base = isUpper ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
    }).join('');
  }