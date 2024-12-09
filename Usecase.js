const prompt = require('prompt-sync')();

function aborpre() {
    let randnumber = Math.random();
    const threshold = 0.5;
    return randnumber < threshold ? 0 : 1;
}

const partTime_work = 4;
const fullTime_work = 8;

function calculateWages() {
    const wagesPerHour = 20;
    const workType = Math.floor(Math.random() * 3);
    const absentOrPresent = aborpre();
    let wages = 0;
    let hours = 0;

    switch (absentOrPresent) {
        case 1: 
            switch (workType) {
                case 1: 
                    wages += partTime_work * wagesPerHour;
                    hours += partTime_work;
                    break;
                case 2: 
                    wages += fullTime_work * wagesPerHour;
                    hours += fullTime_work;
                    break;
                default:
                    
                    break;
            }
            break;
        case 0: 
            break;
    }

    return { wages, hours };
}

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

function wagesForMonth() {
    let totalWorkingHours = 0;
    let totalWages = 0;

    for (let i = 0; i < 20 && totalWorkingHours < 160; i++) {
        const result = calculateWages();
        totalWorkingHours += result.hours;
        totalWages += result.wages;
    }

    return {
        totalHours: totalWorkingHours,
        totalWages: totalWages
    };
}

function calculateYearlyWages(employeeNames) {
    const employeeData = [];

    for (const employee of employeeNames) {
        const yearlyData = [];
        let monthIndex = 0;

        for (let i = 0; i < 12; i++) {
            const monthlyData = wagesForMonth();
            yearlyData.push({
                month: months[monthIndex++],
                totalHours: monthlyData.totalHours,
                totalWages: monthlyData.totalWages
            });
        }

        employeeData.push({
            name: employee,
            yearlyDetails: yearlyData
        });
    }

    return employeeData;
}


const numberOfEmployees = parseInt(prompt("Enter the number of employees: "));
const employeeNames = [];

for (let i = 0; i < numberOfEmployees; i++) {
    const name = prompt(`Enter the name of employee ${i + 1}: `);
    employeeNames.push(name);
}


const yearlyWages = calculateYearlyWages(employeeNames);

for (const employee of yearlyWages) {
    console.log(`\nYearly wage details for ${employee.name}:`);
    for (const monthDetail of employee.yearlyDetails) {
        console.log(
            `${monthDetail.month}: Hours = ${monthDetail.totalHours}, Wages = $${monthDetail.totalWages}`
        );
    }
}