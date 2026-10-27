document.addEventListener('keydown', (event) => {
  // Prevent execution if user is focused inside a text input
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    return;
  }

  const key = event.key.toLowerCase();

  // Navigation targets matching your HomeScreen link matrix
  const hotkeyMap = {
    'g': 'https://gemini.google.com',
    'm': 'https://mynoise.net',
    'b': 'https://www.behance.net',
    's': 'https://open.spotify.com',
    't': 'https://www.tumblr.com',
    'a': 'https://www.amazon.com'
  };

  if (hotkeyMap[key]) {
    // Spawns destination in a new tab/subspace window
    window.open(hotkeyMap[key], '_blank');
  }
});