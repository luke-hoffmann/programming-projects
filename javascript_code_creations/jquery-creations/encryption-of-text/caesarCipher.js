


function encryptCaesar (amount, string) {
    characters = "abcdefghijklmnopqrstuvwxyz"
    shifted = [];
    for (i = 0; i < string.length; i++) {
        locationOf = string.charCodeAt(i)-97

        howClose = locationOf+amount;
        if (howClose >=26) {
            howClose = Math.abs(26-howClose)
        }

        shift = characters[howClose];
        if (string[i] == " ") {
            shift = " "
        }
        shifted.push(shift)
    }
    output = "";
    for (i = 0; i<shifted.length;i++) {
        output+= shifted[i];
    }

    return output
}

function decryptCaesar (amount, string) {
    characters = "abcdefghijklmnopqrstuvwxyz"
    shifted = [];
    for (i = 0; i < string.length; i++) {
        locationOf = string.charCodeAt(i)-97

        howClose = locationOf-amount;
        if (howClose < 0) {
            howClose = 26+howClose
        }

        shift = characters[howClose];
        if (string[i] == " ") {
            shift = " "
        }
        shifted.push(shift)
    }
    output = "";
    for (i = 0; i<shifted.length;i++) {
        output+= shifted[i];
    }

    return output
}


let characters = "abcdefghijklmnopqrstuvwxyz";

// for (i = 0 ; i< characters.length;i++) {
//     console.log(characters.charCodeAt(i)-97);
// }


$("#submitCaesar").on("click", function () {

    $("#outputCaesarEncrypt").val(encryptCaesar(Number($("#encryptAmount").val()),$("#inputCoolCaesar").val()));
})

$("#submitDecryptCaesar").on("click",function(){
    
    $("#outputDecrypt").val(decryptCaesar($("#decryptAmount").val(),$("#decryptCaesar").val()));
})



