// variables and EventListener

const startbtn=document.querySelector(".start").addEventListener("click",begin)
const stopbtn=document.querySelector(".stop").addEventListener("click",finish)
const reset= document.querySelector(".reset").addEventListener("click",atreset)
const record=document.querySelector(".submit").addEventListener("click",submit)
const container=document.querySelector(".container")
let recorder= document.querySelector(".record")
const storedTime=localStorage.getItem("Submit")
// //////////////////////////////////
//  This window eventListener will show our submited time immediately when we open our browser
window.addEventListener("DOMContentLoaded",(event=>{
    if(storedTime){
        recorder.innerText=storedTime
    }
}))
// ///////////////////////////////////
let second=0
let minute=0
let hour=0
const s=document.querySelector(".s")
const m=document.querySelector(".m")
const h=document.querySelector(".h")
var clear;
var saveSubmit;

// begin Functions that carry our interval
function begin(){
  clear= setInterval(starting,1000)
}
// /////////////////////

// atreset func that carry our reset btn
function atreset(){
    clearInterval(clear)
    second=0
    minute=0
    hour=0
    s.innerText=0
    m.innerText=`${0}:`
    h.innerText=`${0}:`
}
// ///////////////////
// func finish that carry our stop btn
function finish(){
clearInterval(clear)
}

///////////////


// starting func that carry our start btn

function starting (){

    second++
    s.innerText=second
    if(second<10){
        s.innerText=`0${second}`
    }
    if(second/60===1){
        second=0
        minute++
        m.innerText=`${minute}:`
        if(minute<10){
            m.innerText=`0${minute}:`

        }

    }
    if(minute/60===1){
        minute=0
        hour++
        h.innerText=`0${hour}:`
    }
    }
    // ///////////////////////

    
// Function That will save our time in Localstorage
function submit(){
    recorder.innerText=`${hour}:${minute}:${second}`
    let Submiter=recorder.innerText
       saveSubmit= localStorage.setItem("Submit", Submiter)
      
    }

