/*
//CC1
//BMI = mass / height ** 2;

const markMass = 95;
const johnMass = 85;

const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI>johnBMI;
console.log(markHigherBMI);


//CC2
//BMI = mass / height ** 2;

const markMass = 95;
const johnMass = 85;

const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

if(markBMI>johnBMI){
    console.log(`Mark's BMI (${markHeight}) is higher than John's (${johnBMI})!`);
}
else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


//CC3
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

const dolphinsAvg = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAvg = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(`Dolphins (${dolphinsAvg}) and Koalas (${koalasAvg})`);

if(dolphinsAvg > koalasAvg && dolphinsAvg > 100){
    console.log(`Dolphins wons (${dolphinsAvg})`);
} else if(koalasAvg>dolphinsAvg && koalasAvg > 100){
    console.log(`Koalas wons (${koalasAvg})`);
} else if(dolphinsAvg === koalasAvg && dolphinsAvg > 100){
    console.log(`Dolphins (${dolphinsAvg}) and Koalas (${koalasAvg}) have draw`);
} else{
    console.log(`Both fails`);
}
*/

//CC4
const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`);