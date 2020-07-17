//feetToMile function start from here......
function feetToMile(feet){

    if(feet == 0) {
        return 0;
    }
    if (feet < 0){
        return "Feet cannot be the negative number. Please submit the positive number"
    }
    if (feet = -1) {
        return "Please submit the number in actual procedure"
    }
    if(feet > 0){
        var mile = feet/5280;  /** 1 mile = 5280 feet */
        return mile;
    
    }
 
}



// feetToMile function end here;




//woodCalculator function  start from here......


function woodCalculator(chair,table,bed){
    var chair = chair*1;
    var table = table*3;
    var bed   = bed*5;
    var itemsList =[chair,table,bed];
    
    var sum = 0;

    if (itemsList.length == 3) {
        for(var i = 0; i < itemsList.length; i++ ){
            var checkElement = itemsList[i];
            sum = sum + checkElement;
        }
        if (sum > 0) {
            return sum;
        }
        if (sum < 0) {
            return "please submit positive value";
        }
        if(sum = -1){
            return "Please submit the three values which you want to count"
        }
        
    }

}

// woodCalculator function end here;



// brickCalculator function start from here......

function brickCalculator(floorNum){
    var sum = 0;
    var tenFloor = 15*1000*10; 
     /**for first ten floor; 1 floor = 15 feet; */
    var twentyFloor = 15*1000*10 + 12*1000*10; 
    /** 1st one for (1-10) floor and 2nd one for (11-20);*/


    if ( floorNum <= 10 ) {
        var firstTen = floorNum*15*1000;
        sum = sum + firstTen;
        return sum;
    }
    if ( floorNum <= 20 && floorNum >10 ){
        var floorNum = floorNum-10;
        var secondTen =  tenFloor + floorNum*12*1000;
        sum = sum + secondTen;
        return sum;
    }
    if ( floorNum > 20 ){
        var floorNum = floorNum - 20;
        var anotherAll = twentyFloor + floorNum*1000*10;
        sum = sum + anotherAll;
        return sum; 
    }
}
var result = brickCalculator(4);
console.log(result);


// brickCalculator function end here;



//tinyFriend function start form here......

function tinyFriend(friends){
    var smallestName = friends[0];

    if(friends == 0){
        return"please submit the names";
    }
   
    for(var i=0; i<friends.length; i++){
        var currentName = friends[i];
        if (currentName.length < smallestName.length) {
            smallestName = currentName;
        }
        
       
    }
    return smallestName;
}

// tinyFriend function end here;

