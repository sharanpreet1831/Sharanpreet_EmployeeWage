function aborpre() {
    let randnumber = (Math.random())
    const  treshold = 0.5  
    if (randnumber < treshold){
      
        console.log("absent")
        return 0 ;
    }
    else {

        console.log("present");
        return 1 ;

    }
}

const partTime_work  = 4 
const FullTime_work  = 8 
let totalworkinghours = 0;


function tottalhours(){
    
    console.log(`total working hours ${totalworkinghours}`);
}


function CalculateWages() {
    let worktype = Math.floor(Math.random()*3);
   
    const WagesPerHour = 20 
    let Totalwages ;
    const absentorpresent = aborpre();
    switch(absentorpresent){
        case 1 :
            switch (worktype){
                case 0 :
                    console.log("no work today ")
                    Totalwages = 0 ;
                    console.log(Totalwages);
                    console.log(`No hours `)
                    totalworkinghours +=0;

                    break ;
            
                case 1 :
                    Totalwages = partTime_work * WagesPerHour;
                    console.log(`Total wages ${Totalwages} `)
                    console.log(`Part time work ${partTime_work}`)
                    totalworkinghours += 4;
                  
                    break ;
                    
                case 2 :
                    Totalwages = FullTime_work * WagesPerHour;
                    console.log(`Total wages ${Totalwages} `)
                    console.log(`Fully time work ${FullTime_work}`)
                    totalworkinghours += 8;
                    break ;
            }
            
        break 
        case 0 :
            console.log("absent .. ");

    }

}

CalculateWages()
tottalhours()
