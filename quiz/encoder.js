export default function encoder(inputString , repeatCount){
    let result = null
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let encoded = ""
    for (let index = 0; index < repeatCount ; index++) {
        inputString = inputString[inputString.length - 1] + inputString.slice(0,inputString.length - 1)
        encoded = ""
    
        for (let index = 0; index < inputString.length; index++) {
            const element = inputString[index];
            if (element === "z"){
                encoded += "a"
            } else {
                encoded += alphabet[alphabet.indexOf(element) + 1 ]
            }
            
    
            
        }
        inputString = encoded
    
    }
    result = encoded

    return result


}


