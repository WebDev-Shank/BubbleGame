//create bubbles in bottom div
function bubbleSpawn(){
    let bubbles="";
    for(let i=1;i<=167;i++){
        let randomVal=Math.floor(Math.random()*10);
        bubbles+=`<div id="bubble">${randomVal}</div>`;
    }
    document.querySelector("#bottom").innerHTML=bubbles;
}

var timmerVal=60;
function runTimer(){
    let scoreEle=document.getElementById('timmer');
    var timmerInterval = setInterval(() => {
        if(timmerVal>0){
            timmerVal--;
            scoreEle.textContent=timmerVal;
        }
        else{
            clearInterval(timmerInterval);
            document.querySelector('#bottom').innerHTML="<h1 id='overPanel'>Game Over!</h1>";
        }
    }, 1000);
}

var hitRn = 0;
function hitNumber(){
    hitRn=Math.floor(Math.random()*10);
    document.getElementById('hit').textContent=hitRn;
}

let score=10;
function scoreHit(){
    let scoreEle=document.getElementById('score');
    scoreEle.textContent=score;
    score+=10;
}

let clickBubble =  document.getElementById('bottom');
clickBubble.addEventListener("click",function(clickedVal){
    // console.log(clickedVal.target.textContent);   // get bubble value in text format [string]
    // console.log(Number(clickedVal.target.textContent));    //convert bubble value in number format [number]
    
    let click=Number(clickedVal.target.textContent);
    if(click===hitRn){
        scoreHit();   //increase score
        bubbleSpawn();  //spawn bubble
        hitNumber();  //hitnumber change
    }
})

bubbleSpawn();
runTimer();
hitNumber();