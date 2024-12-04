function aborpre() {
    let randnumber = (Math.random())
    const  treshold = 0.5  
    if (randnumber < treshold){
        console.log("absent")
    }
    else {
        console.log("present");
    }
}
aborpre()