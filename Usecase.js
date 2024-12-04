function aborpre() {
    let randnumber = (Math.random())
    const  treshold = 0.5  
    if (randnumber < treshold){
      
        
        return 0 ;
    }
    else {

        
        return 1 ;

    }
}

const partTime_work  = 4 
const FullTime_work  = 8 
let totalworkinghours = 0;
let Totalwages =0 ;


function tottalhours(){
    
    console.log(`total working hours ${totalworkinghours}`);
}



function CalculateWages() {
    let worktype = Math.floor(Math.random()*3);
   
    const WagesPerHour = 20 
    
    const absentorpresent = aborpre();
    switch(absentorpresent){
        case 1 :
            switch (worktype){
                case 0 :
                   
                    Totalwages += 0 ;
                    
                    
                    totalworkinghours +=0;

                    break ;
            
                case 1 :
                    Totalwages += partTime_work * WagesPerHour;
                   
                    totalworkinghours += 4;
                  
                    break ;
                    
                case 2 :
                    Totalwages += FullTime_work * WagesPerHour;
                    
                    totalworkinghours += 8;
                    break ;
            }
            
        break 
        case 0 :
           Totalwages += 0;

    }

}




for (var  i =0 ; i< 20 && totalworkinghours < 160  ; i++){
    CalculateWages()
}
tottalhours()
console.log(`Total wages ${Totalwages}`);


