
let testList = [20, 10, 10, 35, -9];
let testOddList = [30, 40, 50]

function average(list) {
  // returns the average of the list
  aver =0;
  for (i = 0; i < list.length; i++) {
    aver += list[i];
  }
  aver = aver / list.length;
  return(aver)
}

function high(list) {
  // returns the highest value of array
  highValue = 0;
  for (i =0; i < list.length; i++) {
    if(highValue < list[i]) {
      highValue = list[i];
    }
  }
  return(highValue);
}
function xor(bit1,bit2) {
  return (bit1-bit2)**2
}
function and(bit1,bit2) {
  return (bit1*bit2)
}
function low(list) {
  // returns the lowest value of array
  lowValue = list[0];
  for (i =0; i < list.length; i++) {
    if(lowValue > list[i]) {
      lowValue = list[i];
    }
  }
  return(lowValue);
}

function linear(search, array) {
  // returns the index of search term, returns false if search term not found
  b = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] == search) {
      b = i
      break;
    }

  }
  return (b);
}

function excludeLinear(search, array, excluded) {
  // returns the index of search term, excludes an included index, returns false if not found
  
  b = false;
  for (i = 0; i < array.length; i++) {
    if (i == excluded) {continue}
    if (array[i] == search && i != excluded) {
      b = i
      break;
    }

  }
  return (b);
}

function sort(array) {

  //returns a sorted array from least to greatest
  b = array[1];
  c = array;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (c[i] < c[i - 1]) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }
  return (c);
}

function randInt(min, max) {
  // returns a random integer x <= max && x >= min
  return (Math.random() * (max - min) + min);
}
function binarySearch (list,search) {
  // returns index of search term in array, if not found returns false
  low = 0;
  high = list.length-1
  list = sort(list);
  while (low <= high) {
    middle = Math.floor((low+high)/2)
    console.log(middle)
    if (list[middle] < search) {
      low = middle+1;
    } else if(list[middle] > search) {
      high =middle-1;
    } else {
      return(middle);
    }
  }
  return(false)
}

function distance(x1,y1, x2,y2){
  // returns distance from x1,y1 to x2,y2
  return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
}


function median(array){
  // sorts array then returns median of array
  b = array[1];
  c = array;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (c[i] < c[i - 1]) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }

  array = c;
  b = array.length % 2;
console.log(array)
  console.log(b)
  if (b == 0) {
    return (array[array.length/2] + array[(array.length/2)+1])/2
    
  }else {
    return array[Math.floor((array.length)/2)]
  }
  
}




function mode (array){
  function sort(array) {

  //returns a sorted array from least to greatest
  b = array[1];
  c = array;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (c[i] < c[i - 1]) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }
  return (c);
}
  // returns the mode of an array, returns false if array is empty
  if (array.length == 0) {
    return false
  }
  occurances = [];
  map = [];
  for (let i =0;i< array.length; i++) {
    count = 0;
    for (let j =0; i < map.length; j++) {
      if ( typeof map[j].array[i] == "number") {
        count++;
      }
    }
    if (count > 0) {
      occurances[map[j].array[i]].push(1)
    } else {
      occurances.push([1])
      map.push({ [(array[i])] :occurances.length-1})
    }
    
    
  }

  

}

function toDecimal(binary) {
    binary = "" + binary;
    mult = 1;
    sum = 0;
    if (binary == " " || binary =="") return
    for (dontUseThisVariable = 0; dontUseThisVariable < binary.length; dontUseThisVariable++) {
        
        sum += Number(binary[binary.length-1-dontUseThisVariable]) * mult;
        mult *= 2;
    }

    return sum;
}



function numToByte(num){
  function changeIndex(string,index,chr) {
    // this function doesnt work in all cases and shouldnt be used out of this use case...
      returner = string.substr(0,index)   +chr + string.substr(index+chr.length,string.length);
    return returner;
  }

  function convertToBinary (num) {


    array =[];
    while (num != 0) {
        
        rem = num % 2;
        num = Math.floor(num / 2);

        x = {remainder:rem, number:num};
        array.push(x);



    }
    
    secondDigit = "";
    for (dontUseThisVariable = array.length-1; dontUseThisVariable >= 0; dontUseThisVariable--) {
        secondDigit += array[dontUseThisVariable].remainder;
    }


    return secondDigit;

}

function convertToByte (binaryString) {
    empty = "00000000"
    emptyLength = empty.length;
    
    for (dontUseThisVariable = 0; dontUseThisVariable < emptyLength;dontUseThisVariable++) {
        if ( binaryString[dontUseThisVariable] == undefined) {
            return(empty)
        }
        empty = changeIndex(empty,empty.length-1-dontUseThisVariable,binaryString[binaryString.length-1-dontUseThisVariable]);
    }
    return(empty)
}


  return convertToByte(convertToBinary(num));
}


function getLengthOf2DArray(array){
  count= 0;
  for(let i =0; i < array.length;i++) {
    for (let j=0; j <array[0].length;j++){
      count++;
    }
  }
  return count;
}

function getLengthOf3DArray(array){
  count= 0;
  for(let i =0; i < array.length;i++) {
    for (let j=0; j <array[0].length;j++){
      count+=array[i][j].length
    }
  }
  return count;
}