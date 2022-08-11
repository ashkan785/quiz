export default function removeRepetitive(string){
    let result = null 
    let word = ""

    split = string.split("")

    unit = new Set(split)
    newArray = Array.from(unit)
    for (let index = 0; index < newArray.length; index++) {
        const element = newArray[index];

        word += element
        
    }

    result =  word
    return result
    
}
123
