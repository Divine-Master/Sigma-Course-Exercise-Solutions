function realAddMirror(str) {
  // Check if the input string is valid
  if (!str || typeof str !== 'string') {
    throw new Error('Invalid input string');
  }

  // Create a new string to store the mirror string
  let mirrorString = '';

  // Iterate over the input string in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    // Append the current character to the mirror string
    mirrorString += str[i];
  }

    return str.concat(mirrorString)
}

console.log(realAddMirror('deku'))