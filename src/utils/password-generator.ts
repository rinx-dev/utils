/**
 * Generate a random password with the specified length and character set options.
 * 
 * @param length - The length of the password to generate. Default is 12.
 * @param includeLowercase - Whether to include lowercase letters in the password. Default is true.
 * @param includeUppercase - Whether to include uppercase letters in the password. Default is true.
 * @param includeSpecialChars - Whether to include special characters in the password. Default is true.
 * @param includeNumbers - Whether to include numbers in the password. Default is true.
 * @param avoidAmbiguousChars - Whether to avoid ambiguous characters like 'l', '1', 'O', and '0'. Default is true.
 * @returns A randomly generated password.
 * @throws If all include parameters are set to false or if the password length is less than or equal to 0.
 */
export function generateRandomPassword(
  length: number = 12,
  includeLowercase: boolean = true,
  includeUppercase: boolean = true,
  includeSpecialChars: boolean = true,
  includeNumbers: boolean = true,
  avoidAmbiguousChars: boolean = true
): string {
  // Check if at least one include parameter is true
  if (!(includeLowercase || includeUppercase || includeSpecialChars || includeNumbers)) {
    throw new Error("At least one include parameter must be set to true.");
  }

  // Check if length is valid
  if (length <= 0) {
    throw new Error("Password length must be greater than 0.");
  }

  // Define the characters to be used in the password
  let charset = "";
  if (includeLowercase) charset += "abcdefghijkmnpqrstuvwxyz"; // Exclude 'l'
  if (includeUppercase) charset += "ABCDEFGHJKLMNPQRSTUVWXYZ"; // Exclude 'O'
  if (includeSpecialChars) charset += "!@#$%^&*()_+";
  if (includeNumbers) charset += "23456789"; // Exclude '1' and '0'

  // Exclude ambiguous characters if avoidAmbiguousChars is true
  if (avoidAmbiguousChars) {
    charset = charset.replace(/[l1O0]/g, '');
  }

  // Initialize an empty string to store the password
  let password = "";

  // Generate random characters until the password reaches the desired length
  for (let i = 0; i < length; i++) {
    // Generate a random index to select a character from the charset
    const randomIndex = Math.floor(Math.random() * charset.length);
    // Append the randomly selected character to the password
    password += charset[randomIndex];
  }

  // Return the generated password
  return password;
}