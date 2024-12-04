function findSundayOnJan1(startYear, endYear) {
    console.log("Years when 1st January is a Sunday:");
    for (let year = startYear; year <= endYear; year++) {
        const date = new Date(year, 0, 1); // January is month 0 in JavaScript's Date object
        if (date.getDay() === 0) { // 0 represents Sunday
            console.log(year);
        }
    }
}

// Example usage:
findSundayOnJan1(2014, 2050);
