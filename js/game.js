var animals =["zebra","tiger", "buffalo", "giraffe", "elephant"];
var animal ="zebra";
var word = document.getElementById("word");
var result = document.getElementById("Result");
var tries = document.getElementById("tries");
var trycount = 7;
var GuessSpan=[];
var guess=[];
var guessed=[];
var total=0;
var a=0;
var score= document.getElementById("score");
var scorenum=0;
var imghold = document.getElementById("imagehold");
score.innerHTML="0";
var totalold=animals[a].length;
var reset = function() {
     a=Math.floor((Math.random() * animals.length));
     imghold.src="";
     GuessSpan=[];
     guess=[];
     guessed=[];
     trycount=7;
     total=0;
     word.innerHTML="";
     result.innerHTML="";
     tries.innerHTML=trycount;
     totalold=animals[a].length;
for (i=0; i<animals[a].length; i++) {
    var newspan =document.createElement("span");
    newspan.innerHTML="_ ";
    var g=animals[a].charAt(i);
    word.appendChild(newspan);
    guess.push(g);
    GuessSpan.push(newspan);
    guessed.push(parseInt("1"));
    console.log(guess);
    //guess.push(word.charAt(i));
   
}
console.log(GuessSpan);
}
reset();

document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    total=0;
    var correct=0;
    for (i=0; i<animals[a].length; i++) {
        if (userInput===guess[i]){
            GuessSpan[i].innerHTML=guess[i];
            guessed[i]=0;
            correct=1;
            
        }
        total+=guessed[i];
        
        
        console.log("total:"+total);
    }
    if (correct===0){
        trycount--;
        tries.innerHTML=trycount;
        setTimeout(reset, 3000);
    }
    if (total===0) {
        scorenum++;
        imghold.src="Images/"+animals[a]+".jpg"
        result.innerHTML="You Win!";
        setTimeout(reset, 3000);
        score.innerHTML=scorenum;
        }
        else if (trycount===0) {
            result.innerHTML="You Lose!";
        }
    console.log("total:"+total);
}

