function pushFront(val, arr) { 
    for (var i = arr.length - 1; i >=0; i--) {
       arr[i +1] = arr[i];
    }
    array[0] = val;
};


function removeFront(val, arr){

    const [, ...newArr] = arr;
    return newArr;
}


function insertAt(index,val, arr) {

	for(var i = arr.length; i > index; i--)
		arr[i] = arr[i-1]
	
	arr[index] = val;
}


function removeAt(index, arr) {

	var temp = arr[index];
    
    for(var i = index; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }

    arr.length = arr.length-1;

    return temp;
}


function swapPairs(arr) {

	for(var i = 0; i < arr.length; i = i + 2) {

		var tmp = arr[i];
		arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        
	}
}


function removeDup(arr) {

    var tmp = [];
    
	for(let i = 0; i < arr.length - 1; i++) {
		if(arr[i] !== arr[i+1]) 
			tmp.push(arr[i+1])
    }
    
	return tmp;
}