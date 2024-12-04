function checkLeapYears(startYear, endYear) {
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(`${year} 'is a leap year.`);
        } else {
            console.log(`${year} is not a leap year.`);
        }
    }
}

// Example usage:
const startYear = 1990; // Replace with your starting year
const endYear = 2025;   // Replace with your ending year
checkLeapYears(startYear, endYear);
