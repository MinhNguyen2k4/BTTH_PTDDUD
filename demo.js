let cannangmark = 78, chieucaomark = 1.69;
let cannangjohn = 92, chieucaojohn = 1.95;

let bmimark = cannangmark / chieucaomark ** 2;
let bmijohn = cannangjohn / chieucaojohn **2;

let markhigherbmi = bmimark > bmijohn;

console.log(`BMI cua Mark la: ${bmimark.toFixed(2)}, BMI cua John la: ${bmijohn.toFixed(2)}`);
console.log(`Mark co BMi cao hon John khong? ${markhigherbmi}`);

