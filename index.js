// Code your solutions in this file
const cards = ["Guadalupe","Ollie","Aki"];

function writeCards(names, descriptor){
    const myArr= []
    for(let i =0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${descriptor} gift!`);
        console.log(names[i]);
        myArr.push(`Thank you, ${names[i]}, for the wonderful ${descriptor} gift!`)
    }
    return myArr
}
 
writeCards(cards)

function countDown(startingNum){
    while ( startingNum >= 0){
        console.log(startingNum)
        startingNum--;
    }
    return startingNum
}