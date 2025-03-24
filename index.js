const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"]

const passwordElOne = document.getElementById("password-el-1")
const passwordElTwo = document.getElementById("password-el-2")
const passwordLength = 15

function getRandomCharacter () {
    const randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]   
}

function getRandomPassword () {
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += getRandomCharacter () 
    }
    passwordElOne.textContent = randomPasswordOne
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += getRandomCharacter ()     
    }
    passwordElTwo.textContent = randomPasswordTwo 
}
 
