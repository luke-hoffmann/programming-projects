
function changeIndex(string,index,chr) {
    // this function doesnt work in all cases and shouldnt be used out of this use case...
    returner = string.substr(0,index)   +chr + string.substr(index+chr.length,string.length);
    return returner;
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

let string = "256";
output = "";


for (k = 0; k < string.length; k++) {

    c = convertToByte(convertToBinary(string.charAt(k).charCodeAt(0)))

    output += c + " ";
}
//console.log(output)


$("#submit").on("click", function(){

    $("#output").focus();
    b = $("#inputCool").val();
    output = "";
    for (k = 0; k < b.length; k++) {

        c = convertToByte(convertToBinary(b.charAt(k).charCodeAt(0)))
    
        output += c + " ";
    }

    $("#output").val(output);

})


$("#submitDecrypt").on("click", function(){

    info = $("#inputBinary").val();
    array = info.split(" ");

    outArray = [];

    for (k = 0; k <array.length; k++) {
        if (array[k] == " " || array[k] == NaN) continue
        if (toDecimal(array[k]) == undefined) continue;
        outArray.push(toDecimal(array[k]));
        
    }
    outOut = ""
    for (i = 0; i < outArray.length;i++) {
        outOut += (String.fromCharCode(Number(outArray[i])));
    }

    $("#outputBinary").val(outOut)
    $("#outputBinary").focus();
});

