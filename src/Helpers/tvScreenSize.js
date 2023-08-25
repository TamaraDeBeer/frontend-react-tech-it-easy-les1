function tvScreenSize (Array) {
    let screenSize = '';

    for (let i = 0; i < Array.length; i++) {
        const sizeInch = Array[i];
        const sizeCm = Math.round(Array[i] * 2.54);

        screenSize = screenSize + sizeInch + " inch (" + sizeCm + " cm)";

        if (i < Array.length - 1) {
            screenSize = screenSize + " | "
        }
    }

    return screenSize;
}

export default tvScreenSize;