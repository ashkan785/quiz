export default function isBalance(input){
    let result = null
    if (input.length % 2 === 1){
        result = "no"
        return result
    } else {
        result = "yes"
        return result
    }
}
