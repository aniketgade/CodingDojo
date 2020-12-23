function removeBlanks(str){
    strArr = str.split(" ");
    return(strArr.join(""));
}

function getDigits(str){

    var result = str.replace(/\D/g, "");
    return result;
}


function acronym(str){
   return str.split(' ').map(i => i.charAt(0)).toUpperCase();
}


function countNonSpaces(str){
    var arr = str.split("");

    var ctr = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] != " ") ctr++;
    }

    return ctr;
}


removeShorterStrings (strArr, val){
    
}