
export function setDescription(description){
	return { type: "CHANGE_DESCRIPTION", payload: description}
}

export function setValue(value){
	return { type: "CHANGE_VALUE", payload: value}
}