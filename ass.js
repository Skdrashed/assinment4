function cubeNumber(number) {
    if (typeof number === 'number') {
    const cube = Math.pow(number, 3)
    return cube;
    } else
    if (typeof number !== 'number') {
    return "Please provide a valid number";
    }
    }
    function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide a string "
    }
    else if (string1.includes(string2)) {
    return true;
    }
    else {
    return false;
    }
    }
    function sortMaker(arr) {
    let element = [];
    for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number < 0) {
    return 'provide valid input'
    }
    }
    if (arr[0] == arr[1]) {
    return 'equal';
    } else
    if (element >= 0) {
    if (arr[0] > arr[1]) {
    return [arr[0], arr[1]];
    } else {
    return [arr[1], arr[0]];
    }
    }
    }
    function findAddress(obj) {
    if (typeof obj !== "object") {
    return "please provide a object";
    }
    else{
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
    return street + ','+ house+','+society
    }
    }
    function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
    return "Array can't empty"
    }
    let element=[];
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
    const element = changeArray[i];
    sum = sum+element ;
    } if (sum >= totalDue) {
    return true;
    }else{
    return false;
    }
    }