function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split("").reverse().join("");

    // Check if the original cleaned string is the same as the reversed string
    return cleanedStr === reversedStr;
}

// Example usage:
const testString = "A man, a plan, a canal: Panama"; // Replace with any string
if (isPalindrome(testString)) {
    console.log(`"${testString}" is a palindrome.`);
} else {
    console.log(`"${testString}" is not a palindrome.`);
}
