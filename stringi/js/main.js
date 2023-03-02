const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

 const newText = text1.toUpperCase()

 console.log(newText);

 const lower = text2.toLowerCase()
 console.log(lower)

 const divide = text3.slice(6)
 console.log(divide)

console.log(text4.includes('czy'));

console.log(text5.charAt(2));

console.log(text6.replaceAll("pies", "kot"));

console.log(text7.split(","));



const x = 50

if (x > 100) {
    console.log("x > 100".toUpperCase())
} else if(x < 100 && x > 30) {
    console.log("x jest średniakiem".toUpperCase())
} else if(x <=30) {
    console.log("x jest mały".toUpperCase())
}

const cities = ["Barcelona", "Valencia", "Alicante,", "Murcia", "Malaga", "Benidorm"]

for(i = 0; i < cities.length; i++) {
console.log(`To miasto nazywa się ${cities[i]}`)
}

const numbers =[5, 8, 10, 23, 48, 60]
for (const number of numbers) {
 console.log(number / 5)
}

for(const number of numbers) {
    if (number % 2 == 0) {
        console.log(`Liczba ${number} jest parzysta`)
    } else {
        console.log(`Liczba ${number} jest nieparzysta`)
    }
}
 