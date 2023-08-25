import itemsStock from "./itemsStock.js";
import itemsSold from "./itemsSold.js";

function itemsToBeSold(Array) {
    const originalItems = itemsStock(Array);
    const soldItems = itemsSold(Array);
    return originalItems - soldItems;
}

export default itemsToBeSold;