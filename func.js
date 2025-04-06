let userName = getFirstName("Gabriel-Guimarães-Sinis", "-")
console.log("Seja bem-vinda "  + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}