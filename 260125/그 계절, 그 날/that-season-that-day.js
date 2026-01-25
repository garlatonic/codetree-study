const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

const isLeapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) return true;
            return false;
        }
        return true;
    }
    return false;
}

const season = (year, month, date) => {
    const days = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 존재하지 않는 날이면 -1 출력
    if (days[month - 1] < date) return -1;

    // 3~5월
    if (3 <= month && month <= 5) return "Spring";
    else if (6 <= month && month <= 8) return "Summer";
    else if (9 <= month && month <= 11) return "Fall";
    else return "Winter";
}

console.log(season(year, month, day))