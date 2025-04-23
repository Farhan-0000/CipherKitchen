export function vigenere(input, key) {
    if (!key || key.length === 0) {
      return input; // Return unchanged if no key is provided
    }
    
    // Ensure key only contains letters
    key = key.replace(/[^a-zA-Z]/g, '');
    if (key.length === 0) return input;
    
    let result = '';
    let keyIndex = 0;
    
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const isUpper = char >= 'A' && char <= 'Z';
      const isLower = char >= 'a' && char <= 'z';
      
      if (!isUpper && !isLower) {
        result += char; // Non-alphabetic characters remain unchanged
        continue;
      }
      
      // Get the key character (case-insensitive)
      const keyChar = key[keyIndex % key.length].toUpperCase();
      const shift = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
      
      // Apply shift with appropriate base
      const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const shifted = (char.charCodeAt(0) - base + shift) % 26 + base;
      
      result += String.fromCharCode(shifted);
      keyIndex++; // Move to next key character
    }
    
    return result;
  }