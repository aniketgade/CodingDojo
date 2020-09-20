
function biggie_size(arr)
{
    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    for(var i=0; i<arr.length; i++){

        if(arr[i]>0){
            arr[i] = 'big';
        }

    }

    return arr;
}

function print_low_return_high(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var min;
    var max;

    for(var i=0; i<arr.length; i++){
        if(i == 0){
            min = arr[i];
            max = arr[i];
        }
        else{
            if(arr[i] < min){
                min = arr[i];
            }
            if(arr[i] > max){
                max = arr[i];
            }
        }
    }

    console.log("Lowest value is " + min);
    
    return max;
}


function print_one_return_another(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    if(arr.length < 2){
        console.log("Inputted array must have at least 2 values");
        return;
    }

    var second_to_last_value_index = arr.length - 2;

    console.log("Second to last value in the array is " + arr[second_to_last_value_index]);

    for(var i=0; i<arr.length; i++){
        
        if(arr[i]%2 !=0){
            return arr[i];
        }
    }

    console.log("There is no odd value in the array");

}

function double_vision(arr){
    
    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var newArr = [];

    for(var i=0; i<arr.length; i++){
        newArr[i] = 2 * arr[i];
    }

    return newArr;
}

function count_positives(arr){
    
    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var counter = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            counter++;
        }
    }

    arr[arr.length-1] = counter;

    return arr;
}

function evens_and_odds(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var odd_counter = 0;
    var even_counter = 0;

    if(arr[0]%2 != 0){
        odd_counter = 1;
    }

    if(arr[0]%2 == 0){
        even_counter = 1;
    }

    for(var i=0; i<arr.length; i++){

        if(i > 0){
            if(arr[i]%2 != 0){
                odd_counter++;
                even_counter = 0;
            }
        
            if(arr[i]%2 == 0){
                even_counter++;
                odd_counter = 0;
            }
        }

        if(odd_counter >= 3){
            console.log("That's odd!");
        }

        if(even_counter >= 3){
            console.log("Even more so!");
        }
    }
}

function increment_the_seconds(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    for(var i=0; i<arr.length; i++){
        if(i%2 != 0){
            arr[i]++;
        }

        console.log(arr[i]);
    }
}

function previous_lengths(arr){
    
    var newArr = [arr[0]];

    for(var i=0; i<arr.length; i++){
        if(i > 0){
            newArr.push(arr[i-1].length); 
        }
    }

    return newArr;
}

function add_seven(arr){
    var newArr = [];

    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i] + 7);   
    }

    return newArr;
}


function reverse_array(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var endIndex;

    if(arr.length % 2 != 0){
        endIndex = (arr.length - 1)/2 - 1;
    }
    else{
        endIndex = (arr.length)/2 - 1;
    }

    var j=arr.length - 1;
    var temp;

    for(var i=0; i<=endIndex; i++){
         temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
         j--;
    }

    return arr;
}

function outlook_negative(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var newArr = [];

    for(var i=0; i<arr.length; i++){
        
        if(arr[i] > 0){
            newArr.push(arr[i] * -1);
        }
        else{
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

function always_hungry(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var foodCounter = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            foodCounter++;
        }
    }

    if(foodCounter == 0){
        console.log("I'm hungry");
    }
}


function swap_toward_center(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var endIndex;

    if(arr.length % 2 != 0){
        endIndex = (arr.length - 1)/2 - 1;
    }
    else{
        endIndex = (arr.length)/2 - 1;
    }

    var j=arr.length - 1;
    var temp;

    for(var i=0; i<=endIndex; i=i+2){
         temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
         j=j-2;
    }

    return arr;
}

function scale_arr(arr, num){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * num;
    }

    return arr;
}

console.log(scale_arr([2,4,7,9,3,1,6],2))

