
function arr_255()
{
    var arr = [];

    for(var i=1; i<=255; i++){
        arr.push(i);
    }

    return arr;
}

function arr_even_1000(){
    var sum = 0;
    for(var i=0; i<=1000; i=i+2){
        sum = sum + i;
        console.log("num: " + i + " sum: " + sum);
    }
}


function arr_odd_5000(){
    var sum = 0;
    for(var i=1; i<5000; i=i+2){
        sum = sum + i;
        console.log("num: " + i + " sum: " + sum);
    }
}

function sum_of_array(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var sum = 0;

    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
    
}

function max_in_array(arr){
    
    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    if(arr.length == 1){
        return arr[0];
    }

    var max;

    for(var i=0; i<arr.length; i++){
        if(i == 0){
            max = arr[i];
        }
        else{
            if(max < arr[i]){
                max = arr[i];
            }
        }
    }

    return max;

}

function avg_of_array(arr){
    
    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    if(arr.length == 1){
        return arr[0];
    }

    var sum = 0;

    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }

    return (sum/arr.length);
}

function arr_odd_50(){
    var arr = [];

    for(var i=1; i<50; i=i+2){
        arr.push(i);
    }

    return arr;
}

function greater_than_y(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var y = 4;
    var counter = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] > y){
            counter++;
        }
    }

    return counter;
}

function values_squared(arr){
    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }

    return arr;
}

function replace_negatives(arr){
    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
        
    }

    return arr;
}

function max_min_avg(arr){
    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    var new_arr = [];

    var max;
    var min;
    var avg;

    if(arr.length == 1){
        max = arr[0];
        min = arr[0];
        avg = arr[0];

        new_arr = [max, min, avg];

        return new_arr;
    }

    var sum = 0;

    for(var i=0; i<arr.length; i++){
        if(i == 0){
            max = arr[i];
            min = arr[i];
            sum = sum + arr[i];
        }
        else{
            if(max < arr[i]){
                max = arr[i];
            }
            if(min > arr[i]){
                min = arr[i];
            }
            sum = sum + arr[i];
        }
    }

    avg = sum / arr.length;

    new_arr = [max, min, avg];

    return new_arr;
}


function swap_values(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    if(arr.length < 2){
        console.log("The input array should have at least 2 elements");
        return;
    }

    var last_index = arr.length - 1;

    // 1 2 3 4 5
    var last_val = arr[last_index];
    arr[last_index] = arr[0];
    arr[0] = last_val;

    return arr;
}


function number_to_string(arr){

    if(!Array.isArray(arr)){
        console.log("Input parameter is not an array. Please input an array as parameter and try again");
        return;
    }

    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }

    return arr;
}

console.log(number_to_string([7,-4,-5,8]))

