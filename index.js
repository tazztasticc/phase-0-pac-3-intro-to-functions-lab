function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase);
}

function logWhisper(string){
    console.log(string.toLowerCase);
}

function sayHiToGrandma(string){
    if(string===string.toUpperCase){
        return "YES INDEED";
    }
    if (string===string.toLowerCase){
        return "I can't hear you!";
    }
    if (string==="I love you, Grandma"){
        return "I love you, too";
    }
}

console.log(shout(hello));
console.log(whisper(hello));
console.log(logShout(hello));
console.log(logWhisper(hello));
console.log(sayHiToGrandma(hello));
console.log(sayHiToGrandma(HELLO));
console.log(sayHiToGrandma(I love you, Grandma));