const addresses = [
    {
        billingAddress: true,
        name: 'Karan',
        street: 'salzburger strasße'
    },
    {
        shippingAddress: false,
        name: 'Karan',
        street: 'Rommelstrasße'
    }];


const changedAddress = addresses.map((address, index) => {
    console.log('address', address.name)
    address.name = 'tanuja';
    return address;
})

console.log(changedAddress);


// reduce is used to loop over all the values of an array and then perform an operation to return the accumulator
// reducing the array to compare each element to the next and finding the largest
const numbers = [5,3,14,9,1,3];
console.log(numbers.reduce((acc,val) => {
    if (val > acc) {
        acc = val;
    }
    return acc;
}))

// another shortcut to calculate the biggest in the array

console.log(numbers.reduce( (acc, val) => val > acc ? val : acc));
