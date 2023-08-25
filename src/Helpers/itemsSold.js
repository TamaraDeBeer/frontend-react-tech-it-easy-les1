function itemsSold(Array) {
    let soldItems = 0
    for(let i = 0; i < Array.length; i++) {
        soldItems = soldItems + Array[i].sold
    }
    return soldItems;
}

export default itemsSold;