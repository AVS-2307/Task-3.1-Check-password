function getPasswordChecker(password) {
    return function compare(enterpassword) {        
        return password === enterpassword
    }
}

let checkPass = getPasswordChecker('Qwerty') // задаем пароль

//Проверка пароля, вводимого пользователем:
console.log(checkPass('jhgfd')) //false
console.log(checkPass('Йцукен')) //false
console.log(checkPass('Qwerty')) //True
