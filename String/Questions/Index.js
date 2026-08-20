let Name="Aaditya";
console.log(Name.length)
console.log(Name.toUpperCase())
console.log(Name[1].toUpperCase())
Name=Name.slice(0,3)
Name1=Name.concat('Tiwari')
console.log(Name)


 let str = "Hello";
 let str1="World"
//  str = str.slice(1)
 console.log(str)
 console.log(str+" "+str1)

//  reverse a string
let reversedStr=str.split("").reverse().join("")
console.log(reversedStr)

 let strp = "Programming";
console.log(strp.substring(0,7));

let strl = "JavaScript is Awesome";
console.log(strl.split(" "))

let strm = "I love Java";
 console.log(strm.replace("Java","JavaScript"));

  let strn = "Programming";
console.log(strn.includes("gram"))
console.log(strn.startsWith("Pro"))


 let a = "Apple";
let b = "Banana";
console.log(a === b)

function frequencyCounter(a) {

let freq={}

for( let char of a)
{
    freq[char]=(freq[char] || 0)+1
}
console.log(freq)
}
frequencyCounter(a)