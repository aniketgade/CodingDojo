function minToFront(arr){

    var min = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] < min) min = arr[i]
    }

    for (var i = arr.length - 1; i >=0; i--) {
        arr[i +1] = arr[i];
     }

     array[0] = min;
}