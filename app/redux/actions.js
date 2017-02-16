
export function setDescription(description){
	return { type: "CHANGE_DESCRIPTION", payload: description}
}

export function setNumber(number){
	return { type: "CHANGE_NUMBER", payload: number}
}

export function setAmount(amount){
    return { type: "CHANGE_AMOUNT", payload: amount}
}


// multipier (z ang) - mnożnik
export function setMultipier(multipier){
    return { type: "CHANGE_MULTIPIER", payload: multipier}
}

export function getMultipier(){
    return { type: "GET_MULTIPIER"}
}

export function setTotal(total){
    return { type: "CHANGE_TOTAL", payload: total}
}

export function getTotal(){
    return { type: "GET_TOTAL"}
}


export function getFullTotal(){
    return { type: "GET_FULL_TOTAL"}
}

export function setFullTotal(fulltotal){
    return { type: "SET_FULL_TOTAL", payload: fulltotal}
}
