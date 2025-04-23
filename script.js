import { applyOperation } from './utils/operations.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById('inputText');
  const cipherSelect = document.getElementById('cipherSelect');
  const shiftInput = document.getElementById('shiftValue');
  const keyInput = document.getElementById('keyValue');
  const caesarOptions = document.getElementById('caesarOptions');
  const vigenereOptions = document.getElementById('vigenereOptions');
  const outputText = document.getElementById('outputText');
  const translateBtn = document.getElementById('translateBtn');

  // Show/hide cipher-specific options
  cipherSelect.addEventListener('change', () => {
    // Hide all options first
    document.querySelectorAll('.cipher-options').forEach(el => {
      el.style.display = 'none';
    });
    
    // Show relevant options
    if (cipherSelect.value === 'caesar') {
      caesarOptions.style.display = 'block';
    } else if (cipherSelect.value === 'vigenere') {
      vigenereOptions.style.display = 'block';
    }
  });

  // Apply selected cipher
  translateBtn.addEventListener('click', () => {
    const input = inputText.value;
    const cipher = cipherSelect.value;
    let options = {};
    
    // Get cipher-specific options
    if (cipher === 'caesar') {
      options.shift = parseInt(shiftInput.value) || 3;
    } else if (cipher === 'vigenere') {
      options.key = keyInput.value;
    }
    
    const result = applyOperation(cipher, input, options);
    outputText.textContent = result;
  });

  // Initialize options visibility
  document.querySelectorAll('.cipher-options').forEach(el => {
    el.style.display = 'none';
  });
  
  if (cipherSelect.value === 'caesar') {
    caesarOptions.style.display = 'block';
  } else if (cipherSelect.value === 'vigenere') {
    vigenereOptions.style.display = 'block';
  }

  // Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeToggleText = themeToggle.querySelector('span');

// Check for saved theme preference or use the system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggleText.textContent = 'Light Mode';
  themeToggle.innerHTML = '☀️ <span>Light Mode</span>';
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '🌙 <span>Dark Mode</span>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '☀️ <span>Light Mode</span>';
  }
});
});