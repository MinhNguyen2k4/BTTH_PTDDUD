let doi1 = [96, 108, 89];  
let doi2 = [99, 91, 120];  
const min = 100;  

let avg_doi1 = (doi1[0] + doi1[1] + doi1[2]) / doi1.length;
let avg_doi2 = (doi2[0] + doi2[1] + doi2[2]) / doi2.length;

console.log(`Điểm trung bình đội 1: ${avg_doi1.toFixed(2)}`);
console.log(`Điểm trung bình đội 2: ${avg_doi2.toFixed(2)}`);

if (avg_doi1 > avg_doi2) {
    console.log(`Đội 1 giành chiến thắng với điểm: ${avg_doi1.toFixed(2)}`);
} else if (avg_doi2 > avg_doi1) {
    console.log(`Đội 2 giành chiến thắng với điểm: ${avg_doi2.toFixed(2)}`);
} else {
    console.log(`Hai đội hòa nhau`);
}

if (avg_doi1 >= min || avg_doi2 >= min) {
    if (avg_doi1 > avg_doi2) {
        console.log(`Đội 1 giành cúp với điểm trung bình: ${avg_doi1.toFixed(2)}`);
    } else if (avg_doi2 > avg_doi1) {
        console.log(`Đội 2 giành cúp với điểm trung bình: ${avg_doi2.toFixed(2)}`);
    } else if (avg_doi1 === avg_doi2 && avg_doi1 >= min && avg_doi2 >= min) {
        console.log(`Hai đội hòa nhau và cùng giành cúp với điểm trung bình: ${avg_doi1.toFixed(2)}`);
    } else {
        console.log(`Hai đội hòa nhau nhưng không đạt đủ điều kiện điểm tối thiểu.`);
    }
} else {
    console.log(`Không đội nào giành được cúp vì không đủ điểm tối thiểu.`);
}