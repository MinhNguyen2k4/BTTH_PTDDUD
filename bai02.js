let cannangmark = 78, chieucaomark = 1.69;
let cannangjohn = 92, chieucaojohn = 1.95;

let bmimark = cannangmark / chieucaomark ** 2;
let bmijohn = cannangjohn / chieucaojohn **2;

let markhigherbmi = bmimark > bmijohn;

console.log(`BMI cua Mark la: ${bmimark.toFixed(2)}, BMI cua John la: ${bmijohn.toFixed(2)}`);
console.log(`Mark co BMi cao hon John khong? ${markhigherbmi}`);

if(markhigherbmi){
    console.log(`BMi cua Mark ${bmimark.toFixed(2)} cao hon BMI cua John ${bmijohn.toFixed(2)}`);
}else{
    console.log(`BMi cua John ${bmijohn.toFixed(2)} cao hon BMI cua Mark ${bmijohn.toFixed(2)}`);

}

