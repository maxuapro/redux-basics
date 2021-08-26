const person = {
    name: "mary",
    address: {
        country: "USA",
        city: "San Francisco"
    }
}

// const updated = {...person, name: 'Bob'} // SHALLOW COPY
const updated = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: 'Bob'
} // DEEP COPY


console.log(person)
console.log(updated)