var ChangeFontSize= document.querySelector("div");
var IncFontBtn=document.querySelector(".IncreaseFontBtn");
var DecFontBtn=document.querySelector(".DecreaseFontBtn");

function IncreaseFontSize(){
ChangeFontSize.classList.add("IncreaseFont");

}

function DecreaseFontSize(){

    ChangeFontSize.classList.remove("IncreaseFont");
    }
    
    IncFontBtn.onclick=IncreaseFontSize;
    DecFontBtn.onclick=DecreaseFontSize;