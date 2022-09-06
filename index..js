function oddish0rEvenish(number) {
    const strNumber =number.toString();
    let sum =;
    for (let i=0; i <strNumber.lenght; i++) {
        const digit = parseInt(strNumber[i]);
    sum += digit;
    }
    if(sum %2===0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

