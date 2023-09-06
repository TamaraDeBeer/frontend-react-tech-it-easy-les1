import {inventory} from "./inventory.js";

// 1a
const televisionType = inventory.map((tv) => {
    return tv.type;
})
console.log(televisionType);

// 1b
const soldOutTelevisions = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
})
console.log(soldOutTelevisions);

// 1c
const tvNh3216Smart = inventory.find((tv) => {
    return tv.type === "NH3216SMART";
})
console.log(tvNh3216Smart);

// 1d
const sportTelevisions = inventory.map((tv) => {
    if (tv.refreshRate >= 100) {
        return { name: `${tv.brand} ${tv.name}`, suitable: true }
    } else {
        return { name: `${tv.brand}, ${tv.name}`, suitable: false }
    }
})
console.log(sportTelevisions);

// 1e
// hoe roep je array in een array aan?
const superLargeScreen = inventory.filter((tv) => {
    return tv.availableSizes.find((size) => {
    return size >= 65;
    })
})
console.log(superLargeScreen);

// 1F
const optionAmbilightTelevisions = inventory.filter((tv) => {
    const ambilightTelevisions = tv.options.find((option) => {
        return option.name === "ambiLight";
    })
    if (ambilightTelevisions.applicable === true) {
        return true
    }
    })

    console.log(optionAmbilightTelevisions);

// 2A
    const televisionBrand = inventory.map((tv) => {
        return tv.brand;
    })
    console.log(televisionBrand);