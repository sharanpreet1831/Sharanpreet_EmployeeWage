 
function aborpre() {
    let randnumber = Math.random();
    const treshold = 0.5;
    return randnumber < treshold ? 0 : 1;
}

const partTime_work = 4;
const FullTime_work = 8;

function CalculateWages() {
    const WagesPerHour = 20;
    let worktype = Math.floor(Math.random() * 3);
    const absentorpresent = aborpre();
    let wages = 0;
    let hours = 0;

    switch (absentorpresent) {
        case 1:
            switch (worktype) {
                case 0:
                    // Absent but present status is active
                    break;
                case 1:
                    wages += partTime_work * WagesPerHour;
                    hours += partTime_work;
                    break;
                case 2:
                    wages += FullTime_work * WagesPerHour;
                    hours += FullTime_work;
                    break;
            }
            break;
        case 0:
            // Fully absent
            break;
    }

    return { wages, hours };
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthnumber = 0;

function WagesForMonth() {
    let totalworkinghours = 0;
    let Totalwages = 0;

    for (let i = 0; i < 20 && totalworkinghours < 160; i++) {
        const result = CalculateWages();
        totalworkinghours += result.hours;
        Totalwages += result.wages;
    }

    console.log(`Month: ${months[monthnumber]} | Total Wages: ${Totalwages} | Total Hours: ${totalworkinghours}`);
    const fulldetail = { TH: totalworkinghours, TW: Totalwages, month: months[monthnumber++] };
    return fulldetail;
}

function getAll() {
    const OneYearWages = [];
    for (let i = 0; i < 12; i++) {
        let monthlyData = WagesForMonth();
        OneYearWages.push(monthlyData);
    }
    console.log(OneYearWages);
}

getAll();

