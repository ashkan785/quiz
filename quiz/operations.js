export default function operations(ops){
    let result = null
    let checked = []
    newList = ops.split(" ")
    newList.forEach(element => {
    
        if (isNaN(element)){
            if (element === "D"){
                item = checked[checked.length - 1]
                double = Number(item) * 2
                checked.push(double)
            }else if (element === "R"){
                checked.pop()
            }else if (element === "+"){
                checked.push(Number(checked[checked.length -1] ) + Number(checked[checked.length - 2] ))
            }
        } else {
            checked.push(Number(element))
        }

        

    });
    result = checked.reduce((a,b) => a+b)
    
    return result

}
