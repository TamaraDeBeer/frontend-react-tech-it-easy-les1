function itemsStock(Array) {
    let stock = 0;
    for(let i = 0; i < Array.length; i++) {
        stock = stock + Array[i].originalStock;
    }
    return stock;
}

export default itemsStock;