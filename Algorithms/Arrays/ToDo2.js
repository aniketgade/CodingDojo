function reverseArray(arr) {

    for (var i = 0; i < Math.floor(arr.length / 2); i++) {

        var tmp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tmp;

    }

}


function rotateArr(arr, shiftBy) {
    
    for (var i = 0; i < shiftBy; i++) {
        arr.unshift(arr.pop());
    }

}


function arrConcat(arr1, arr2){

    return newArr(...arr1, ...arr2);
}