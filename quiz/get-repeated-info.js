export default function getRepeatedInfo(number){
    let result = {};
    str = number.toString()
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        result[element] = element.toString().repeat(element)
        
    }
    return result

}    



