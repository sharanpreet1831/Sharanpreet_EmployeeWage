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


function CalculateWages() {
    let worktype = Math.floor(Math.random()*3);
    const partTime_work  = 4 
    const FullTime_work  = 8 
    const WagesPerHour = 20 
    let Totalwages ;
    const absentorpresent = aborpre();
    switch(absentorpresent){
        case 1 :
            switch (worktype){
                case 0 :
                    console.log("no work today ")
                    break ;
            
                case 1 :
                    console.log("partial time ")
                    break ;
                    
                case 2 :
                    console.log("full time ")
                    break ;
            }
            
        break 
        case 0 :
            console.log("absent .. ");

    }

}

CalculateWages()
