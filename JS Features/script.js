const feline = {
    legs: 4,
    family: 'felide'
}

const canine = {
    families: 'Canine',
    furdy: true
}



const copy = {...canine, ...feline };


const Multiplication = (...nums) => (

    nums.reduce((total, currval) => total * currval)

)