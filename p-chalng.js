let help=document.querySelector(".help")
let start2=document.querySelector(".get")
let sv2=document.querySelector(".sv2")
let grup=document.querySelector(".grup")
let sv=document.querySelector("#sv")

let palel1=document.querySelector("#pn1")
let palel2=document.querySelector("#pn2")

let nex1=document.querySelector("#nex1")
let nex2=document.querySelector("#nex2")
let bak1=document.querySelector("#bak1")
let bak2=document.querySelector("#bak2")

let val1=document.querySelector(".val1")
let val3=document.querySelector(".val3")
let pn=document.querySelector(".pn")

let b4=document.querySelector("#b4")
let b5=document.querySelector("#b5")
let b6=document.querySelector("#b6")
let b7=document.querySelector("#b7")

let c1=document.querySelector("#c1")
let c2=document.querySelector("#c2")
let c3=document.querySelector("#c3")
let c4=document.querySelector("#c4")
let c5=document.querySelector("#c5")
let c6=document.querySelector("#c6")
let c7=document.querySelector("#c7")

let x1=document.querySelector("#x1")
let x2=document.querySelector("#x2")
let x3=document.querySelector("#x3")
let x4=document.querySelector("#x4")
let x5=document.querySelector("#x5")
let x6=document.querySelector("#x6")
let x7=document.querySelector("#x7")

let a1a=document.querySelector(".a1a")
let a1b=document.querySelector(".a1b")
let a1c=document.querySelector(".a1c")

let pp1=document.querySelector(".pp1")
let pp3=document.querySelector(".pp3")
let ppt=document.querySelector(".ppt")

let ran=document.querySelector("#inpp")



/* events------------------------------*/

start2.addEventListener("click",()=>{
    localStorage.setItem("he",1)

})
start2.addEventListener("mousedown",()=>{
    palel1.style="display:flex"
   start2.style="  background-image: linear-gradient(to right, #8C1212,#480D0D);"
})
start2.addEventListener("mouseup",()=>{
    start2.style="  background-image: linear-gradient(to left, #8C1212,#480D0D);"
 })
 sv.addEventListener("click",()=>{
    sv.classList.toggle("sv2t")
    grup.classList.toggle("grupt")


 })
nex1.addEventListener("click",()=>{
    palel2.style="display:flex"
    palel1.style="display:none"
})
bak2.addEventListener("click",()=>{
    palel1.style="display:flex"
    palel2.style="display:none"
})
bak1.addEventListener("click",()=>{
    palel1.style="display:none"
    palel2.style="display:none"
})

val1.addEventListener("click",()=>{

if (pn.textContent!=3) {
    pn.innerHTML=parseInt(pn.textContent)-1
}

if (pn.textContent==6) {
    b7.style="display:none"
}
if (pn.textContent==5) {
    b6.style="display:none"
    b7.style="display:none"
}
if (pn.textContent==4) {
    b5.style="display:none"
    b6.style="display:none"
    b7.style="display:none"
}
if (pn.textContent==3) {
    b4.style="display:none"
    b5.style="display:none"
    b6.style="display:none"
    b7.style="display:none"
}
})
val3.addEventListener("click",()=>{

    if (pn.textContent!=7&&pn.textContent<=7) {
      pn.innerHTML=parseInt(pn.textContent)+1
    }
    
    if (pn.textContent==4) {
        b4.style="display:flex"
    }
  if (pn.textContent==5) {
        b4.style="display:flex"
        b5.style="display:flex"
    }
    if (pn.textContent==6) {
        b4.style="display:flex"
        b5.style="display:flex"
        b6.style="display:flex"
    }
    if (pn.textContent==7) {
        b4.style="display:flex"
        b5.style="display:flex"
        b6.style="display:flex"
        b7.style="display:flex"
    }
})

c1.addEventListener("input",()=>{
    if (c1.value!="") {
        x1.style="fill:#2bccff"
    }else{
        x1.style=""
    }
})
c2.addEventListener("input",()=>{
    if (c2.value!="") {
        x2.style="fill:#2bccff"
    }else{
        x2.style=""
    }
})
c3.addEventListener("input",()=>{
    if (c3.value!="") {
        x3.style="fill:#2bccff"
    }else{
        x3.style=""
    }
})
c4.addEventListener("input",()=>{
    if (c4.value!="") {
        x4.style="fill:#2bccff"
    }else{
        x4.style=""
    }
})
c5.addEventListener("input",()=>{
    if (c5.value!="") {
        x5.style="fill:#2bccff"
    }else{
        x5.style=""
    }
})
c6.addEventListener("input",()=>{
    if (c6.value!="") {
        x6.style="fill:#2bccff"
    }else{
        x6.style=""
    }
})
c7.addEventListener("input",()=>{
    if (c7.value!="") {
        x7.style="fill:#2bccff"
    }else{
        x7.style=""
    }
})

ran.addEventListener("input",()=>{
    if (ran.value==25) {
       ran.className="ran25"
    }
    if (ran.value==23) {
        ran.className="ran23"
     }
     if (ran.value==21) {
        ran.className="ran21"
     }
     if (ran.value==19) {
         ran.className="ran19"
      }
      if (ran.value==17) {
        ran.className="ran17"
     }
     if (ran.value==15) {
        ran.className="ran15"
     }
     if (ran.value==13) {
        ran.className="ran13"
     }
     if (ran.value==11) {
        ran.className="ran11"
     }
     if (ran.value==9) {
        ran.className="ran9"
     }
     if (ran.value==7) {
        ran.className="ran7"
     }
     if (ran.value==5) {
        ran.className="ran5"
     }

     if (ran.value>=5&&ran.value<=11) {
        a1a.style="border:solid #fdfdfd99 1px"
     }else{
        a1a.style=""
     }
     if (ran.value>=13&&ran.value<=19) {
        a1b.style="border:solid #fdfdfd99 1px"
     }else{
        a1b.style=""
     }
     if (ran.value>=21&&ran.value<=25) {
        a1c.style="border:solid #fdfdfd99 1px"
     }else{
        a1c.style=""
     }

})
if (ran.value>=13&&ran.value<=19) {
    a1b.style="border:solid #fdfdfd99 1px"
 }else{
    a1b.style=""
 }

pp1.addEventListener("click",()=>{
    if (ppt.textContent!=20) {
        ppt.innerHTML=parseInt(ppt.textContent)+1
    }
    if (ppt.textContent==20) {
        pp1.style=" cursor: not-allowed;"
      }
})
pp3.addEventListener("click",()=>{
    if (ppt.textContent!=5) {
        ppt.innerHTML=parseInt(ppt.textContent)-1
    }
    if (ppt.textContent<=5) {
      pp3.style=" cursor: not-allowed;"
    }
})

pp3.addEventListener("mouseover",()=>{
    if (ppt.textContent==5) {
      pp3.style=" cursor: not-allowed;"
    }else{
        pp3.style=""
    }
   
})
pp1.addEventListener("mouseover",()=>{
    if (ppt.textContent==20) {
      pp1.style=" cursor: not-allowed;"
    }else{
        pp1.style=""
    }
})

a1a.addEventListener("click",()=>{
    ran.value=5
    if (ran.value==5) {
        ran.className="ran5"
     }
     if (ran.value>=5&&ran.value<=11) {
        a1a.style="border:solid #fdfdfd99 1px"
     }else{
        a1a.style=""
     }
     if (ran.value>=13&&ran.value<=19) {
        a1b.style="border:solid #fdfdfd99 1px"
     }else{
        a1b.style=""
     }
     if (ran.value>=21&&ran.value<=25) {
        a1c.style="border:solid #fdfdfd99 1px"
     }else{
        a1c.style=""
     }
})
a1b.addEventListener("click",()=>{
    ran.value=15
    if (ran.value==15) {
        ran.className="ran15"
     }
     if (ran.value>=5&&ran.value<=11) {
        a1a.style="border:solid #fdfdfd99 1px"
     }else{
        a1a.style=""
     }
     if (ran.value>=13&&ran.value<=19) {
        a1b.style="border:solid #fdfdfd99 1px"
     }else{
        a1b.style=""
     }
     if (ran.value>=21&&ran.value<=25) {
        a1c.style="border:solid #fdfdfd99 1px"
     }else{
        a1c.style=""
     }
})
a1c.addEventListener("click",()=>{
    ran.value=25
    if (ran.value==25) {
        ran.className="ran25"
     }
     if (ran.value>=5&&ran.value<=11) {
        a1a.style="border:solid #fdfdfd99 1px"
     }else{
        a1a.style=""
     }
     if (ran.value>=13&&ran.value<=19) {
        a1b.style="border:solid #fdfdfd99 1px"
     }else{
        a1b.style=""
     }
     if (ran.value>=21&&ran.value<=25) {
        a1c.style="border:solid #fdfdfd99 1px"
     }else{
        a1c.style=""
     }
})

/* events------------------------------*/


if (localStorage.getItem("he")==1) {
    help.style="animation-name: hhelp2;"
}else{
    help.style="animation-name: hhelp;"
}