
function xorDecryptEncrypt(byte1,byte2){
  if (byte1 && byte2) {
    
  
  if (byte1.length != 8 || byte2.length != 8) {return false;}
  byte = ""
  for (let i =0; i < byte1.length;i++) {
    byte += xor(byte1[i],byte2[i]);
  }
  return byte
  }
  return false
}

















function decryptXOR(text,key){
  text = text.replace(/ /g, "")
  //console.log(key)
  key = key.replace(/ /g, "")
  /*
  textList = text.split("")
  text = ""
  
  for (let i =0; i < textList.length; i++) {
    text+=textList[i].charCodeAt(0);
    if (i != textList.length -1) {
      text += ","
    }
    
    
  }
  */
  newTextArray = [];
  text = text.split(",")
  
  for (let i =0; i < text.length;i++){
    textArray = text[i].split(" ")
    //newString = ""
    for (let j =0; j < textArray.length; j++) {
      //newString+=textArray[j];
    }
    newTextArray.push(numToByte( Number(textArray[0]) ) );
  }
  
  textByteArray = newTextArray;

  
  /*
  keyList = key.split("")
  console.log(keyList)
  key = ""
  for (let i =0 ; i < keyList.length; i++) {
    key+=keyList[i].charCodeAt(0);
    if (i != keyList.length -1) {
      key += ","
    }
  }
  */
  key = key.split(",")
  //console.log(key)
  keyArray = [];
  
  for (let i =0; i < key.length; i++) {
    keyPlaceHolderArray = key[i].split(" ");
   
    
    for (let j =0; j < keyPlaceHolderArray.length; j++) {
      //newKey += keyPlaceHolderArray[j];
    }
    keyArray.push(numToByte(Number(keyPlaceHolderArray[0])))
  
  }
  
  keyByteArray = keyArray;
  //console.log(keyByteArray)
  outputArray = [];
  keyArray = []
  for (let i = 0; i < Math.ceil(textByteArray.length/keyByteArray.length); i++) {
    for ( let j =0; j < keyByteArray.length;j++) {
      
    
    keyArray.push(keyByteArray[j])
    }
  }
  //console.log(textByteArray)
  //console.log(keyArray)
  for (let i = 0;i < textByteArray.length; i++) {
    outputArray.push(xorDecryptEncrypt(textByteArray[i],keyArray[i]))
    //console.log(textByteArray[i])
    //console.log(keyArray[i])
  }
  out = [];
  for (let i =0; i < outputArray.length; i++) {
    out.push((toDecimal(outputArray[i])));
  }
  //console.log(out)
  return out
  
}



let word = "hello world";
let okayWord = ""

for (let i =0;i < word.length;i++) {
  okayWord+=word[i].charCodeAt(0);
  okayWord+= ","
}




//console.log(okayWord);

//104,101,108,108,111,32,119,111,114,108,100
//127,114,123,123,120,55,96,120,101,123,115
//"127, 114, 123, 123, 120, 55, 96, 120, 101, 123, 115", "23"
//decryptXOR("104,105", "104");
//console.log("wow")




let toBeDecrypted = "36,22,80,0,0,4,23,25,19,17,88,4,4,19,21,11,88,22,23,23,29,69,12,24,0,88,25,11,12,2,10,28,5,6,12,25,10,22,80,10,30,80,10,22,21,69,23,22,69,61,5,9,29,2,66,11,80,8,23,3,17,88,19,0,20,21,7,10,17,17,29,20,69,8,17,21,29,2,22,84,80,71,60,21,69,11,5,8,21,25,22,88,3,0,10,25,0,10,5,8,88,2,0,27,25,21,10,31,6,25,2,16,21,82,69,35,63,11,88,4,13,29,80,22,13,29,22,88,31,3,88,3,0,10,25,0,11,80,10,30,80,23,29,19,12,8,2,10,27,17,9,11,45,95,88,57,69,16,17,19,29,80,23,29,19,0,22,4,9,1,80,3,23,5,11,28,92,69,9,5,12,12,21,69,13,30,0,0,0,0,27,4,0,28,28,28,84,80,4,22,80,0,20,21,2,25,30,17,88,21,29,8,2,0,11,3,12,23,30,69,30,31,23,88,4,13,29,80,0,22,4,12,10,21,69,11,5,8,88,31,3,88,4,13,17,3,69,11,21,23,17,21,22,88,65,69,83,80,84,87,68,69,83,80,84,87,73,69,83,80,84,87,65,83,88,91,69,29,4,6,86,92,69,15,24,12,27,24,69,28,21,21,29,30,1,11,80,10,22,80,17,16,21,69,9,5,4,28,2,4,12,5,23,29,80,10,30,80,17,16,21,69,27,25,23,27,28,0,84,80,22,23,80,17,16,17,17,88,25,3,88,4,13,29,80,17,10,5,0,88,3,16,21,80,10,30,80,17,16,25,22,88,3,0,10,25,0,11,80,12,11,80,10,26,4,4,17,30,0,28,92,69,30,2,10,21,80,12,12,80,4,12,80,10,22,19,0,88,4,13,29,80,20,13,17,1,10,17,17,13,2,0,88,31,3,88,4,13,29,80,6,17,2,6,20,21,69,30,31,9,20,31,18,11,94,69,54,17,8,29,28,28,84,80,44,88,24,4,14,21,69,30,31,16,22,20,69,12,24,4,12,80,17,16,21,69,11,5,8,88,31,3,88,4,13,17,3,69,11,21,23,17,21,22,88,25,22,88,17,69,11,25,29,12,24,69,8,17,23,12,80,10,30,80,17,16,21,69,11,1,16,25,2,0,88,31,3,88,4,13,29,80,21,29,2,12,21,21,17,29,2,69,23,22,69,12,24,0,88,19,12,10,19,9,29,80,18,16,31,22,29,80,1,17,17,8,29,4,0,10,80,12,11,80,84,67,80,10,10,80,7,1,80,21,13,4,17,17,30,2,88,4,13,29,80,22,13,29,69,23,22,69,12,24,12,11,80,22,29,2,12,29,3,69,29,1,16,25,28,69,12,31,69,11,92,69,17,4,69,16,17,22,88,4,13,29,80,23,25,4,12,23,80,22,9,2,17,80,70,76,88,29,16,20,4,12,8,28,12,29,20,69,26,9,69,11,80,17,23,80,84,88,31,3,88,4,13,29,80,21,29,2,12,21,21,17,29,2,69,12,31,69,12,24,0,88,20,12,25,29,0,12,21,23,86,80,44,88,7,12,20,28,69,11,31,10,22,80,22,16,31,18,88,4,13,25,4,69,12,24,0,88,3,16,21,80,10,30,80,17,16,25,22,88,3,0,10,25,0,11,80,17,23,80,7,29,80,4,8,0,23,23,8,12,21,17,17,29,28,28,88,65,75,78,68,81,65,67,81,72,70,83,64,68,87,74,70,81,75,70,81,67,80,4,22,20,69,30,2,10,21,80,8,13,28,17,17,0,9,1,25,11,31,80,17,16,25,22,88,30,16,21,18,0,10,80,7,1,80,22,17,8,73,88,17,11,28,80,17,16,21,11,88,4,4,19,25,11,31,80,17,16,21,69,11,1,16,25,2,0,88,2,10,23,4,73,88,4,13,29,80,11,13,29,7,29,2,69,75,94,84,76,65,80,65,66,83,77,67,80,64,73,82,65,67,87,75,72,69,17,3,69,17,30,1,29,21,1,88,0,23,23,20,16,27,21,1,84,80,18,16,25,6,16,80,0,0,0,23,29,3,22,29,3,69,12,24,0,88,0,0,10,25,8,29,4,0,10,80,10,30,80,4,88,19,12,10,19,9,29,80,18,16,31,22,29,80,1,17,17,8,29,4,0,10,80,12,11,80,84,86,80,35,23,28,9,23,7,12,22,23,69,25,23,4,17,30,69,12,24,0,88,3,4,21,21,69,11,4,0,8,3,69,26,9,69,15,24,12,27,24,69,49,80,13,25,20,69,25,2,23,17,6,0,28,80,4,12,80,17,16,25,22,88,3,16,21,92,69,49,80,13,25,6,0,88,20,12,11,19,10,14,21,23,29,20,69,12,24,4,12,80,17,16,21,69,11,5,8,88,31,3,88,4,13,29,80,22,29,2,12,29,3,69,73,80,78,88,65,74,73,70,69,83,80,84,87,72,84,88,91,69,73,95,87,77,70,69,83,80,84,87,70,87,77,80,78,88,21,17,27,94,69,25,28,22,23,80,1,29,0,0,22,20,22,88,31,11,88,4,13,29,80,20,13,17,1,10,17,17,13,2,0,88,31,3,88,4,13,29,80,6,17,2,6,20,21,75,88,62,4,21,21,9,1,92,69,12,24,0,88,3,16,21,80,10,30,80,17,16,25,22,88,29,16,20,4,12,8,28,12,29,20,69,26,9,69,65,64,69,31,25,19,29,3,69,12,24,0,88,18,12,9,5,4,28,2,4,12,21,69,80,22,10,13,2,17,16,80,21,23,7,0,10,89,69,23,22,69,12,24,0,88,19,12,10,19,16,21,22,0,10,21,11,27,21,69,23,22,69,12,24,0,88,0,0,10,25,8,29,4,0,10,80,10,30,80,4,88,19,12,10,19,9,29,80,18,16,31,22,29,80,1,17,17,8,29,4,0,10,80,12,11,80,84,86,80,36,22,20,69,26,9,69,11,25,8,17,28,4,10,80,23,29,17,22,23,30,12,22,23,69,49,80,13,25,6,0,88,28,12,19,21,18,17,3,0,88,18,0,29,30,69,25,18,9,29,80,17,23,80,1,29,4,0,10,29,12,22,21,69,12,24,0,88,3,16,21,3,69,23,22,69,12,24,0,88,3,16,26,3,0,9,5,0,22,4,69,11,21,23,17,21,22,88,25,11,88,7,13,17,19,13,88,4,13,29,80,0,0,0,10,22,21,11,12,3,69,25,2,0,88,21,19,29,30,69,22,5,8,26,21,23,11,94"
function XORdecrypt(){
  
  for (let i = 97; i< 123; i ++) {
    for (let j =97 ;j < 123; j++) {
      for (let k = 97; k < 123; k++) {
        key = i + "," + j + "," + k;
        b = decryptXOR(toBeDecrypted,key);
        c = "";
        dont = true;
        for (let l = 0; l < b.length; l++) {
            if ((Number(b[l])) <97) {
                //console.log(String.fromCharCode(b[l]));
                dont = false;
            }
            c+= String.fromCharCode(b[l])
        }
        if (dont) {
            console.log(c + " _" + i + " " + j + " " + k)
        }
      }
    }
  }
  
}
function frequencyAnalysis(array) {
  occurances = [];
  map = [];
  for (let i =0; i < array.length; i++) {
    doNew = true;
    if (occurances.length > 0) {
      for (let j =0; j < map.length; j++) {
        if (map[j][0] == array[i]) {
          occurances[map[j][1]].push(1)
          doNew = false;
        } 
      }
    if (doNew) {
      map.push([array[i],occurances.length])
      occurances.push([1])
    }
    
  } else {
      map.push([array[i],0]);
      occurances.push([1]);
  }

}
  //console.log(occurances)
  //console.log(map)
  outputArray = [];
  for (let i =0; i < map.length; i++) {
    loc = map[i][1]
    length = occurances[loc].length
    number = map[i][0]

    outputArray.push({number:number,timesAppeared:length})
  }
  //console.log(outputArray)

  
  c = outputArray;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (i-1 < 0) {
        continue
      }
      if (c[i-1].timesAppeared < c[i].timesAppeared) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }
  mostCommonSingle = c;


occurances = [];
  map = [];

  for (let i =0; i < array.length-1; i++) {
    doNew = true;
    if (occurances.length > 0) {
      for (let j =0; j < map.length; j++) {
        if (map[j][0] == array[i] + "_" + array[i+1]) {
          occurances[map[j][1]].push(1)
          doNew = false;
        } 
      }
    if (doNew) {
      map.push([array[i] + "_" + array[i+1],occurances.length])
      occurances.push([1])
    }
    
  } else {
    map.push([array[i] + "_" + array[i+1],0]);
    occurances.push([1]);
  }

}
  //console.log(occurances)
  //console.log(map)
  outputArray = [];
  for (let i =0; i < map.length; i++) {
    loc = map[i][1]
    length = occurances[loc].length
    number = map[i][0]

    outputArray.push({number:number,timesAppeared:length})
  }
  //console.log(outputArray)

  
  c = outputArray;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (i-1 < 0) {
        continue
      }
      if (c[i-1].timesAppeared < c[i].timesAppeared) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }
  mostCommonDouble = c;




  occurances = [];
  map = [];

  for (let i =0; i < array.length-2; i++) {
    doNew = true;
    if (occurances.length > 0) {
      for (let j =0; j < map.length; j++) {
        if (map[j][0] == array[i] + "_" + array[i+1] + "_" + array[i+2]) {
          occurances[map[j][1]].push(1)
          doNew = false;
        } 
      }
    if (doNew) {
      map.push([array[i] + "_" + array[i+1] + "_" + array[i+2],occurances.length])
      occurances.push([1])
    }
    
  } else {
    map.push([array[i] + "_" + array[i+1] + "_" + array[i+2],0]);
    occurances.push([1]);
  }

}
  //console.log(occurances)
  //console.log(map)
  outputArray = [];
  for (let i =0; i < map.length; i++) {
    loc = map[i][1]
    length = occurances[loc].length
    number = map[i][0]

    outputArray.push({number:number,timesAppeared:length})
  }
  //console.log(outputArray)

  
  c = outputArray;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (i-1 < 0) {
        continue
      }
      if (c[i-1].timesAppeared < c[i].timesAppeared) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }
  mostCommonTriple = c;
  console.log(mostCommonSingle)
  console.log(mostCommonDouble)
  console.log(mostCommonTriple)
}
function replaceNumbers(array,assocArray) {
  console.log(assocArray)
  for (let i =0 ; i < array.length; i++) {
    b = `Key_${array[i]}`;
    
    if (assocArray[b] != undefined) {
        array[i] = assocArray[b]    
    }
  }
  out = ""
  for (let i =0 ;i < array.length; i++) {
    out+= array[i]

    if (i < array.length-1 ) {
      out+=','
    }
  } 
  return(out)
}

let testingForThe =[36,22,80,0,0,4,23,25,19,17,88,4,4,19,21,11,88,22,23,23,29,69,12,24,0,88,25,11,12,2,10,28,5,6,12,25,10,22,80,10,30,80,10,22,21,69,23,22,69,61,5,9,29,2,66,11,80,8,23,3,17,88,19,0,20,21,7,10,17,17,29,20,69,8,17,21,29,2,22,84,80,71,60,21,69,11,5,8,21,25,22,88,3,0,10,25,0,10,5,8,88,2,0,27,25,21,10,31,6,25,2,16,21,82,69,35,63,11,88,4,13,29,80];
//console.log(toBeDecrypted)
toBeDecrypted.replace(/ /g, "")
toBeArray = toBeDecrypted.split(",")
console.log(replaceNumbers(testingForThe, {Key_13: "t", Key_29: "h", Key_80: "e"}));
let testedArray = [1, 4, 1]
console.log(frequencyAnalysis(toBeArray));
//XORdecrypt();



function xorDecryptEncrypt(byte1,byte2){
  if (byte1 && byte2) {
    
  
  if (byte1.length != 8 || byte2.length != 8) {return false;}
  byte = ""
  for (let i =0; i < byte1.length;i++) {
    byte += xor(byte1[i],byte2[i]);
  }
  return byte
  }
  return false
}

















function decryptXOR(text,key){
  text = text.replace(/ /g, "")
  console.log(key)
  key = key.replace(/ /g, "")
  /*
  textList = text.split("")
  text = ""
  
  for (let i =0; i < textList.length; i++) {
    text+=textList[i].charCodeAt(0);
    if (i != textList.length -1) {
      text += ","
    }
    
    
  }
  */
  newTextArray = [];
  text = text.split(",")
  
  for (let i =0; i < text.length;i++){
    textArray = text[i].split(" ")
    //newString = ""
    for (let j =0; j < textArray.length; j++) {
      //newString+=textArray[j];
    }
    newTextArray.push(numToByte( Number(textArray[0]) ) );
  }
  
  textByteArray = newTextArray;

  
  /*
  keyList = key.split("")
  console.log(keyList)
  key = ""
  for (let i =0 ; i < keyList.length; i++) {
    key+=keyList[i].charCodeAt(0);
    if (i != keyList.length -1) {
      key += ","
    }
  }
  */
  key = key.split(",")
  console.log(key)
  keyArray = [];
  
  for (let i =0; i < key.length; i++) {
    keyPlaceHolderArray = key[i].split(" ");
   
    
    for (let j =0; j < keyPlaceHolderArray.length; j++) {
      //newKey += keyPlaceHolderArray[j];
    }
    keyArray.push(numToByte(Number(keyPlaceHolderArray[0])))
  
  }
  
  keyByteArray = keyArray;
  //console.log(keyByteArray)
  outputArray = [];
  keyArray = []
  for (let i = 0; i < Math.ceil(textByteArray.length/keyByteArray.length); i++) {
    for ( let j =0; j < keyByteArray.length;j++) {
      
    
    keyArray.push(keyByteArray[j])
    }
  }
  //console.log(textByteArray)
  //console.log(keyArray)
  for (let i = 0;i < textByteArray.length; i++) {
    outputArray.push(xorDecryptEncrypt(textByteArray[i],keyArray[i]))
    //console.log(textByteArray[i])
    //console.log(keyArray[i])
  }
  out = [];
  for (let i =0; i < outputArray.length; i++) {
    out.push((toDecimal(outputArray[i])));
  }
  console.log(out)
  
}