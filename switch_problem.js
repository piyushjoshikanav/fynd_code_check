var initial=0;

function day(dayy){
    switch(dayy){
        case 0:
            console.log("sunday");
            break;
        case 1:
            console.log("monday");
            break;
        case 2:
                console.log("tuesday");
                break;
        case 3:
                console.log("wednesday");
                break;
        case 4:
                    console.log("thursday");
                    break;
        case 5:
                console.log("friday");
                break;
                    
        case 6:
                    console.log("saturday");
                    break;
        case 9:
                    
               var clicks= click();
               if(clicks()==1)
               {
                console.log("you didnt pass anything");
               }
               else{
                   console.log("there are not 9 days in week");
               }
                break;
        // default:
        //            console.log("u didnt pass anything");
        //                 break;
        

    }
}

function click(){
    
    return function noOfDay(){
        return initial=initial+1;
    }
}

day(9);
day(9);