const plusMinus = (arr) =>{
    const positive = [];
    const nagative = [];
    const zero = [];
    for(let i = 0 ; i<= arr.length ; i++){
        if(arr[i] > 0){
            positive.push(arr[i]);
        }else if(arr[i] < 0){
            nagative.push(arr[i]);
        }else if(arr[i] == 0){
            zero.push(arr[i]);
        }
    }
    console.log ((positive.length/arr.length).toFixed(6));
    console.log ((nagative.length/arr.length).toFixed(6));
    console.log ((zero.length/arr.length).toFixed(6));
  }

//first test result will be 

plusMinus([1,2,0,-4,5,-2]);

//second test result will be 

plusMinus([14,-20,1,4,5,0]);


//3th test result will be 

plusMinus([0,2,10,7,-5,-2]);


//4th test result will be 

plusMinus([100,0,-3,-4,-5,-2]);