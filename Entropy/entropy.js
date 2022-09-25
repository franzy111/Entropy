const { Console } = require('console');
let fs = require('fs');
let arg = process.argv;
let alph = new Array();
let entropy = 0, alphLen = 0;
inputString = fs.readFileSync(arg[2]);
inputString = inputString.toString();
for (let i = 0; i < inputString.length; i++){
    if (inputString.charAt(i) in alph){
        alph[inputString.charAt(i)]++;
    }else{
        alph[inputString.charAt(i)]=1;
    }
}
for (i in alph){
    alph[i] /= inputString.length;
    alphLen++;
}
if (alphLen <= 1){
    entropy = 0;
}else{
    for (i in alph){
        entropy -= alph[i] * Math.log(alph[i]);
    }
    entropy /= Math.log(alphLen);
}
console.log(entropy)