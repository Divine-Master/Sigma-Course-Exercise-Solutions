function validatePassword(password) {
  // Check if the password is at least 8 characters long.
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains both uppercase and lowercase letters.
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one digit.
  if (!/\d/.test(password)) {
    return false;
  }

  // The password meets all the criteria.
  return true;
}

console.log(validatePassword('Devdu9d'))