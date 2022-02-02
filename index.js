let interval=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]
let intervalFlat=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]
let intervalSharp=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
let intervalFlatKor=["도","레b","레","미b","미","파","솔b","솔","라b","라","시b","시"]
let intervalSharpKor=["도","도#","레","레#","미","파","파#","솔","솔#","라","라#","시"]
let modeCount=0;
let Question=0;
let Answer=0;
let AnswerCount=0; // 맞은 문제 개수
let solutionNum=0; // 문제를 푼 개수
let helloName;



function setName(){
helloName = document.getElementById("name").value
console.log(helloName);
document.getElementById("helloYou").innerHTML = helloName+"님 환영합니다."
document.getElementById("introduce").innerHTML =
"<p>시작을 누르면 5도권이 10문제 랜덤 생성됩니다.</p>"
document.getElementById("fade").innerHTML=
"<button onclick=\"modeCounter()\">모드 선택</button>"+
":"+ "<span id=\"modeNow\">b flat</span>"+
"<button id=\"here\" onclick=\"makeQuestion1()\">Start!</button>"
document.getElementById("fade2").innerHTML = ""
}

function modeCounter(){
    modeCount++;
    if(modeCount%4===1){
        document.getElementById("modeNow").innerHTML="# sharp"
        for(let i=0;i<12;i++){
            interval[i]=intervalSharp[i];
        }
        console.log(interval);
    }
    else if(modeCount%4===2){
        document.getElementById("modeNow").innerHTML="b 한글"
        for(let i=0;i<12;i++){
            interval[i]=intervalFlatKor[i];
        }
        console.log(interval);
    }
    else if(modeCount%4===3){
        document.getElementById("modeNow").innerHTML="# 한글"
        for(let i=0;i<12;i++){
            interval[i]=intervalSharpKor[i];
        }
        console.log(interval);
    }
    else if(modeCount%4===0){
        document.getElementById("modeNow").innerHTML="b flat"
        for(let i=0;i<12;i++){
            interval[i]=intervalFlat[i];
        }
        console.log(interval);
    }
}
function makeQuestion1Answer(i){
    if(i>=7){
        return i-7
    }
    else{
        return i+5
    }
}

function makeQuestion1(){
    document.getElementById("fade").innerHTML=" "
    document.getElementById("fade2").innerHTML=" "
    document.getElementById("helloYou").innerHTML=" "
    document.getElementById("introduce").innerHTML=" "
    document.getElementById("question1").innerHTML="<table align=\"center\">"+
    "<tr>"+
        "<td colspan=\"5\" id=\"solution1\"><span id=\"Q1\"></span>가(이) 향하는 음은?</td>"+
    "</tr>"+
    "<tr id=\"answer1\">"+
        "<td><button id=\"Q1answer0\" onclick=\"trueOrFalse1(this.value)\" onclick=\"makeQuestion2()\">?</button></td>"+
        "<td><button id=\"Q1answer1\" onclick=\"trueOrFalse1(this.value)\" onclick=\"makeQuestion2()\">?</button></td>"+
        "<td><button id=\"Q1answer2\" onclick=\"trueOrFalse1(this.value)\" onclick=\"makeQuestion2()\">?</button></td>"+
        "<td><button id=\"Q1answer3\" onclick=\"trueOrFalse1(this.value)\" onclick=\"makeQuestion2()\">?</button></td>"+
        "<td><button id=\"Q1answer4\" onclick=\"trueOrFalse1(this.value)\" onclick=\"makeQuestion2()\">?</button></td>"+
    "</tr>"+
"</table>";
    let Q1 = Math.floor(Math.random()*100%12);
    let Q1A = makeQuestion1Answer(Q1);
    let answerPlace=Math.floor(Math.random()*10%5);//정답의 위치 
    document.getElementById("Q1").innerHTML=interval[Q1];
    if(answerPlace===0){
        document.getElementById("Q1answer0").innerHTML=interval[Q1A];
        document.getElementById("Q1answer0").value=true;
        wrong1 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer1").innerHTML=wrong1;
        document.getElementById("Q1answer1").value=false;
        wrong2 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer2").innerHTML=wrong2;
        document.getElementById("Q1answer2").value=false;
        wrong3 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer3").innerHTML=wrong3;
        document.getElementById("Q1answer3").value=false;
        wrong4 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer4").innerHTML=wrong4;
        document.getElementById("Q1answer4").value=false;
    }
    else if(answerPlace===1){
        wrong1 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer0").innerHTML=wrong1;
        document.getElementById("Q1answer0").value=false;
        document.getElementById("Q1answer1").innerHTML=interval[Q1A];
        document.getElementById("Q1answer1").value=true;
        wrong2 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer2").innerHTML=wrong2;
        document.getElementById("Q1answer2").value=false;
        wrong3 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer3").innerHTML=wrong3;
        document.getElementById("Q1answer3").value=false;
        wrong4 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer4").innerHTML=wrong4;
        document.getElementById("Q1answer4").value=false;
        }
    else if(answerPlace===2){
        wrong1 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer0").innerHTML=wrong1;
        document.getElementById("Q1answer0").value=false;
        wrong2 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer1").innerHTML=wrong2;
        document.getElementById("Q1answer1").value=false;
        document.getElementById("Q1answer2").innerHTML=interval[Q1A];
        document.getElementById("Q1answer2").value=true;
        wrong3 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer3").innerHTML=wrong3;
        document.getElementById("Q1answer3").value=false;
        wrong4 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer4").innerHTML=wrong4;
        document.getElementById("Q1answer4").value=false;
        }
    else if(answerPlace===3){
        wrong1 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer0").innerHTML=wrong1;
        document.getElementById("Q1answer0").value=false;
        wrong2 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer1").innerHTML=wrong2;
        document.getElementById("Q1answer1").value=false;
        wrong3 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer2").innerHTML=wrong3;
        document.getElementById("Q1answer2").value=false;
        document.getElementById("Q1answer3").innerHTML=interval[Q1A];
        document.getElementById("Q1answer3").value=true;
        wrong4 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer4").innerHTML=wrong4;
        document.getElementById("Q1answer4").value=false;
       }
    else if(answerPlace===4){
        wrong1 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer0").innerHTML=wrong1;
        document.getElementById("Q1answer0").value=false;
        wrong2 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer1").innerHTML=wrong2;
        document.getElementById("Q1answer1").value=false;
        wrong3 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer2").innerHTML=wrong3;
        document.getElementById("Q1answer2").value=false;
        wrong4 = interval[wrongAnswerMaker(Q1A)];
        document.getElementById("Q1answer3").innerHTML=wrong4;
        document.getElementById("Q1answer3").value=false;
        document.getElementById("Q1answer4").innerHTML=interval[Q1A];
        document.getElementById("Q1answer4").value=true;
      }
}

function wrongAnswerMaker(i){
    let wrong1;
    while(true){
        wrong1 = Math.floor(Math.random()*100%12);
        if(wrong1!==i){
            return wrong1;
        }
    }
}
function trueOrFalse1(value){
    if(solutionNum<9){
    if(value=="true"){
    AnswerCount++;
    solutionNum++;
    makeQuestion1();
    console.log(AnswerCount);
    console.log(solutionNum);
    document.getElementById("result").innerHTML = AnswerCount+"개 맞으셨습니다."

    }
    else{
        solutionNum++;
        makeQuestion1();
        console.log(AnswerCount);
        console.log(solutionNum);
        document.getElementById("result").innerHTML = AnswerCount+"개 맞으셨습니다."

    }
}
 else{
     timer=false;
    if(value=="true"){
        AnswerCount++;
        solutionNum++;
        document.getElementById("Q1").innerHTML=" ";
        document.getElementById("solution1").innerHTML=" ";
        document.getElementById("answer1").innerHTML=" ";
        document.getElementById("result").innerHTML = AnswerCount+"개 맞으셨습니다."
        if(AnswerCount==10){
        document.getElementById("score").innerHTML ="<br>"+"만점이네요!!!"+helloName+"님"+"<br>"+"<h1 id=\"blue\">완벽합니다.</h1>"
        } 
        else if(AnswerCount>8){
            document.getElementById("score").innerHTML ="<br>"+AnswerCount+"점!! 고득점입니다!"+helloName+"님"+"<br>"+"<h1 id=\"blue\">잘하고있습니다~</h1>"
            }
        else if(AnswerCount>5){
                document.getElementById("score").innerHTML ="<br>"+AnswerCount+"점이네요"+helloName+"님"+"<br>"+"<h1 id=\"blue\">그래도 반타작은 했으니까ㅎㅎ</h1>"
            }
        else if(AnswerCount>=1){
                        document.getElementById("score").innerHTML ="<br>"+helloName+"님"+"<br>"+"<h2>조금만 같이 신경써볼까요....</h2>"
            }
            
        else if(AnswerCount==0){
            document.getElementById("score").innerHTML ="<br>"+helloName+"님..."+"<br>"+"<h1 id=\"red\">누가 문제풀이로 장난치라했죠?</h1>"
    }
    
        }
        else{
            solutionNum++;
            document.getElementById("Q1").innerHTML=" ";
            document.getElementById("solution1").innerHTML=" ";
            document.getElementById("answer1").innerHTML=" ";
            document.getElementById("result").innerHTML = AnswerCount+"개 맞으셨습니다."
            if(AnswerCount>8){
                document.getElementById("score").innerHTML ="<br>"+AnswerCount+"점!! 고득점입니다!"+helloName+"님"+"<br>"+"<h1 id=\"blue\">잘하고있습니다~</h1>"
                }
            else if(AnswerCount>5){
                    document.getElementById("score").innerHTML ="<br>"+AnswerCount+"점이네요"+helloName+"님"+"<br>"+"<h1 id=\"blue\">그래도 반타작은 했으니까ㅎㅎ</h1>"
                }
            else if(AnswerCount>=1){
                            document.getElementById("score").innerHTML ="<br>"+helloName+"님"+"<br>"+"조금만 같이 신경써볼까요...."
                }
                
            else if(AnswerCount==0){
                document.getElementById("score").innerHTML ="<br>"+helloName+"님..."+"<br>"+"<h1 id=\"red\">누가 문제풀이로 장난치라했죠?</h1>"
        }
        }
      }   
}