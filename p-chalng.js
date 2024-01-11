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

let ut1=document.querySelector("#ut1")
let ut2=document.querySelector("#ut2")
let ut3=document.querySelector("#ut3")
let ut4=document.querySelector("#ut4")
let ut5=document.querySelector("#ut5")
let ut6=document.querySelector("#ut6")
let ut7=document.querySelector("#ut7")

let ut1b=document.querySelector("#ut1b")
let ut2b=document.querySelector("#ut2b")
let ut3b=document.querySelector("#ut3b")
let ut4b=document.querySelector("#ut4b")
let ut5b=document.querySelector("#ut5b")
let ut6b=document.querySelector("#ut6b")
let ut7b=document.querySelector("#ut7b")

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

let okk=document.querySelector(".okk")
let close1=document.querySelector(".close1")

let playy=document.querySelector(".playy")
let ok4a=document.querySelector(".ok4a")

let ok3b22t=document.querySelector(".ok3b2-2t")
let ok3b12t=document.querySelector(".ok3b1-2t")

let user1=document.querySelector("#user1")
let user2=document.querySelector("#user2")
let user3=document.querySelector("#user3")
let user4=document.querySelector("#user4")
let user5=document.querySelector("#user5")
let user6=document.querySelector("#user6")
let user7=document.querySelector("#user7")

let user1b=document.querySelector("#user1b")
let user2b=document.querySelector("#user2b")
let user3b=document.querySelector("#user3b")
let user4b=document.querySelector("#user4b")
let user5b=document.querySelector("#user5b")
let user6b=document.querySelector("#user6b")
let user7b=document.querySelector("#user7b")

let dore=document.querySelector("#dore")
let dore1=document.querySelector("#dore1")

let nexuser=document.querySelector(".nexuser")

let playy2at=document.querySelector(".playy2at")

let playy2bt=document.querySelector(".playy2bt")
let playy2b1=document.querySelector(".playy2b1")
let playy2bt2=document.querySelector(".playy2bt2")

let playy2b=document.querySelector(".playy2b")
let playy2c=document.querySelector(".playy2c")


/* xlet------------------------------*/
let nn=1
let m="---";
let nun=0
/* xlet------------------------------*/
/* ifels------------------------------*/

if (localStorage.getItem("he")==1) {
    help.style="animation-name: hhelp2;"
}else{
    help.style="animation-name: hhelp;"
}
if (ran.value>=13&&ran.value<=19) {
    a1b.style="border:solid #fdfdfd99 1px"
 }else{
    a1b.style=""
 }
/* ifels------------------------------*/
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

    if (pn.textContent==3) {
        if (c1.value!=""&&c2.value!=""&&c3.value!="") {
                palel2.style="display:flex"
                palel1.style="display:none"
                 console.log("ok3");
        }else{
            console.log("not3");
if (c1.value=="") {
    x1.style="fill:red"
}
if (c2.value=="") {
    x2.style="fill:red"
}
if (c3.value=="") {
    x3.style="fill:red"
}
        }}

    if (pn.textContent==4) {
        if (c1.value!=""&&c2.value!=""&&c3.value!=""&&c4.value!="") {
                palel2.style="display:flex"
                palel1.style="display:none"
                console.log("ok4");
        }else{
            console.log("not4");
            if (c1.value=="") {
                x1.style="fill:red"
            }
            if (c2.value=="") {
                x2.style="fill:red"
            }
            if (c3.value=="") {
                x3.style="fill:red"
            }
            if (c4.value=="") {
                x4.style="fill:red"
            }
        }}

    if (pn.textContent==5) {
        if (c1.value!=""&&c2.value!=""&&c3.value!=""&&c4.value!=""&&c5.value!="") {
                palel2.style="display:flex"
                palel1.style="display:none"
                console.log("ok5");
        }else{
            console.log("not5");
            if (c1.value=="") {
                x1.style="fill:red"
            }
            if (c2.value=="") {
                x2.style="fill:red"
            }
            if (c3.value=="") {
                x3.style="fill:red"
            }
            if (c4.value=="") {
                x4.style="fill:red"
            }
            if (c5.value=="") {
                x5.style="fill:red"
            }
        }}

    if (pn.textContent==6) {
        if (c1.value!=""&&c2.value!=""&&c3.value!=""&&c4.value!=""&&c5.value!=""&&c6.value!="") {
                palel2.style="display:flex"
                palel1.style="display:none"
                console.log("ok6");
        }else{
            console.log("not6");
            if (c1.value=="") {
                x1.style="fill:red"
            }
            if (c2.value=="") {
                x2.style="fill:red"
            }
            if (c3.value=="") {
                x3.style="fill:red"
            }
            if (c4.value=="") {
                x4.style="fill:red"
            }
            if (c5.value=="") {
                x5.style="fill:red"
            }
            if (c6.value=="") {
                x6.style="fill:red"
            }
        }}

    if (pn.textContent==7) {
        if (c1.value!=""&&c2.value!=""&&c3.value!=""&&c4.value!=""&&c5.value!=""&&c6.value!=""&&c7.value!="") {
                palel2.style="display:flex"
                palel1.style="display:none"
                console.log("ok7");
        }else{
            console.log("not7");
            if (c1.value=="") {
                x1.style="fill:red"
            }
            if (c2.value=="") {
                x2.style="fill:red"
            }
            if (c3.value=="") {
                x3.style="fill:red"
            }
            if (c4.value=="") {
                x4.style="fill:red"
            }
            if (c5.value=="") {
                x5.style="fill:red"
            }
            if (c6.value=="") {
                x6.style="fill:red"
            }
            if (c7.value=="") {
                x7.style="fill:red"
            }
        }}

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
    if (c1.value.length>=5) {
        c1.value=c1.value.slice(0,5)
    }

})
c2.addEventListener("input",()=>{
    if (c2.value!="") {
        x2.style="fill:#2bccff"
    }else{
        x2.style=""
    }
    if (c2.value.length>=5) {
        c2.value=c2.value.slice(0,5)
    }
})
c3.addEventListener("input",()=>{
    if (c3.value!="") {
        x3.style="fill:#2bccff"
    }else{
        x3.style=""
    }
    if (c3.value.length>=5) {
        c3.value=c3.value.slice(0,5)
    }
})
c4.addEventListener("input",()=>{
    if (c4.value!="") {
        x4.style="fill:#2bccff"
    }else{
        x4.style=""
    }
    if (c4.value.length>=5) {
        c4.value=c4.value.slice(0,5)
    }
})
c5.addEventListener("input",()=>{
    if (c5.value!="") {
        x5.style="fill:#2bccff"
    }else{
        x5.style=""
    }
    if (c5.value.length>=5) {
        c5.value=c5.value.slice(0,5)
    }
})
c6.addEventListener("input",()=>{
    if (c6.value!="") {
        x6.style="fill:#2bccff"
    }else{
        x6.style=""
    }
    if (c6.value.length>=5) {
        c6.value=c6.value.slice(0,5)
    }
})
c7.addEventListener("input",()=>{
    if (c7.value!="") {
        x7.style="fill:#2bccff"
    }else{
        x7.style=""
    }
    if (c7.value.length>=5) {
        c7.value=c7.value.slice(0,5)
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
nex2.addEventListener("click",()=>{

    ut1.innerHTML=c1.value.slice(0,6).toUpperCase()
    ut2.innerHTML=c2.value.slice(0,6).toUpperCase()
    ut3.innerHTML=c3.value.slice(0,6).toUpperCase()
    ut4.innerHTML=c4.value.slice(0,6).toUpperCase()
    ut5.innerHTML=c5.value.slice(0,6).toUpperCase()
    ut6.innerHTML=c6.value.slice(0,6).toUpperCase()
    ut7.innerHTML=c7.value.slice(0,6).toUpperCase()

    if (ran.value>=5&&ran.value<=11) {
        a1a.style="border:solid #fdfdfd99 1px"
        m="Low"
     }else{
        a1a.style=""
     }
     if (ran.value>=13&&ran.value<=19) {
        a1b.style="border:solid #fdfdfd99 1px"
        m="Norm"
     }else{
        a1b.style=""
     }
     if (ran.value>=21&&ran.value<=25) {
        a1c.style="border:solid #fdfdfd99 1px"
        m="Hot"
     }else{
        a1c.style=""
     }

if(pn.textContent==3){
user4.style="display:none;"
user5.style="display:none;"
user6.style="display:none;"
user7.style="display:none;"
}
if(pn.textContent==4){
    user4.style="display:flex;"
    user5.style="display:none;"
    user6.style="display:none;"
    user7.style="display:none;"
}

if(pn.textContent==5){
    user4.style="display:flex;"
    user5.style="display:flex;"
    user6.style="display:none;"
    user7.style="display:none;"
    console.log("5++");
 }
 if(pn.textContent==6){
    user4.style="display:flex;"
    user5.style="display:flex;"
    user6.style="display:flex;"
    user7.style="display:none;"
    console.log("6++");
 }
 if(pn.textContent==7){
    user4.style="display:flex;"
    user5.style="display:flex;"
    user6.style="display:flex;"
    user7.style="display:flex;"
 }

    okk.style="display:flex;"
    ok3b22t.innerHTML=ppt.textContent
    ok3b12t.innerHTML=m
})
close1.addEventListener("click",()=>{
    okk.style="display:none;"
})
ok4a.addEventListener("click",()=>{
    playy.style="display:flex"
    ut1b.innerHTML=c1.value.slice(0,6).toUpperCase()
    ut2b.innerHTML=c2.value.slice(0,6).toUpperCase()
    ut3b.innerHTML=c3.value.slice(0,6).toUpperCase()
    ut4b.innerHTML=c4.value.slice(0,6).toUpperCase()
    ut5b.innerHTML=c5.value.slice(0,6).toUpperCase()
    ut6b.innerHTML=c6.value.slice(0,6).toUpperCase()
    ut7b.innerHTML=c7.value.slice(0,6).toUpperCase()

    if(pn.textContent==3){
        user4b.style="display:none;"
        user5b.style="display:none;"
        user6b.style="display:none;"
        user7b.style="display:none;"
        }
        if(pn.textContent==4){
            user4b.style="display:flex;"
            user5b.style="display:none;"
            user6b.style="display:none;"
            user7b.style="display:none;"
        }
        
        if(pn.textContent==5){
            user4b.style="display:flex;"
            user5b.style="display:flex;"
            user6b.style="display:none;"
            user7b.style="display:none;"
            console.log("5++");
         }
         if(pn.textContent==6){
            user4b.style="display:flex;"
            user5b.style="display:flex;"
            user6b.style="display:flex;"
            user7b.style="display:none;"
            console.log("6++");
         }
         if(pn.textContent==7){
            user4b.style="display:flex;"
            user5b.style="display:flex;"
            user6b.style="display:flex;"
            user7b.style="display:flex;"
         }
dore.innerHTML=ppt.textContent
if (ran.value>=13&&ran.value<=19) {
    a1b.style="border:solid #fdfdfd99 1px"
 }else{
    a1b.style=""
 }
    if (pn.textContent=="3") { 
    if (nn==1) {
        user1b.style="border:solid red 1px"
        playy2at.innerHTML=ut1b.textContent
    }else{
        user1b.style=""
    }
    
    if (nn==2) {
        user2b.style="border:solid red 1px"
        playy2at.innerHTML=ut2b.textContent
    }else{
        user2b.style=""
    }
    console.log("test");
    if (nn==3) {
        user3b.style="border:solid red 1px"
        playy2at.innerHTML=ut3b.textContent
    }else{
        user3b.style=""
    }  
    }
    if (pn.textContent=="4") {
        if (nn==1) {
            user1b.style="border:solid red 1px"
            playy2at.innerHTML=ut1b.textContent
        }else{
            user1b.style=""
        }
        
        if (nn==2) {
            user2b.style="border:solid red 1px"
            playy2at.innerHTML=ut2b.textContent
        }else{
            user2b.style=""
        }
        
        if (nn==3) {
            user3b.style="border:solid red 1px"
            playy2at.innerHTML=ut3b.textContent
        }else{
            user3b.style=""
        } 
         if (nn==4) {
        user4b.style="border:solid red 1px"
        playy2at.innerHTML=ut4b.textContent
        }else{
        user4b.style=""
    }
    }
    if (pn.textContent=="5") {
        if (nn==1) {
            user1b.style="border:solid red 1px"
            playy2at.innerHTML=ut1b.textContent
        }else{
            user1b.style=""
        }
        
        if (nn==2) {
            user2b.style="border:solid red 1px"
            playy2at.innerHTML=ut2b.textContent
        }else{
            user2b.style=""
        }
        
        if (nn==3) {
            user3b.style="border:solid red 1px"
            playy2at.innerHTML=ut3b.textContent
        }else{
            user3b.style=""
        } 
         if (nn==4) {
        user4b.style="border:solid red 1px"
        playy2at.innerHTML=ut4b.textContent
        }else{
        user4b.style=""
    }
    if (nn==5) {
        user5b.style="border:solid red 1px"
        playy2at.innerHTML=ut5b.textContent
    }else{
        user5b.style=""
    }
    }
    if (pn.textContent=="6") {
        if (nn==1) {
            user1b.style="border:solid red 1px"
            playy2at.innerHTML=ut1b.textContent
        }else{
            user1b.style=""
        }
        
        if (nn==2) {
            user2b.style="border:solid red 1px"
            playy2at.innerHTML=ut2b.textContent
        }else{
            user2b.style=""
        }
        
        if (nn==3) {
            user3b.style="border:solid red 1px"
            playy2at.innerHTML=ut3b.textContent
        }else{
            user3b.style=""
        } 
         if (nn==4) {
        user4b.style="border:solid red 1px"
        playy2at.innerHTML=ut4b.textContent
        }else{
        user4b.style=""
    }
    if (nn==5) {
        user5b.style="border:solid red 1px"
        playy2at.innerHTML=ut5b.textContent
    }else{
        user5b.style=""
    }
    if (nn==6) {
        user6b.style="border:solid red 1px"
        playy2at.innerHTML=ut6b.textContent
    }else{
        user6b.style=""
    }
    }
    if (pn.textContent=="7") {
        if (nn==1) {
            user1b.style="border:solid red 1px"
            playy2at.innerHTML=ut1b.textContent
        }else{
            user1b.style=""
        }
        
        if (nn==2) {
            user2b.style="border:solid red 1px"
            playy2at.innerHTML=ut2b.textContent
        }else{
            user2b.style=""
        }
        
        if (nn==3) {
            user3b.style="border:solid red 1px"
            playy2at.innerHTML=ut3b.textContent
        }else{
            user3b.style=""
        } 
         if (nn==4) {
        user4b.style="border:solid red 1px"
        playy2at.innerHTML=ut4b.textContent
        }else{
        user4b.style=""
    }
    if (nn==5) {
        user5b.style="border:solid red 1px"
        playy2at.innerHTML=ut5b.textContent
    }else{
        user5b.style=""
    }
    if (nn==6) {
        user6b.style="border:solid red 1px"
        playy2at.innerHTML=ut6b.textContent
    }else{
        user6b.style=""
    }
    if (nn==7) {
        playy2at.innerHTML=ut7b.textContent
        user7b.style="border:solid red 1px"
    }else{
        user7b.style=""
    }
    }
})
nexuser.addEventListener("click",()=>{
nn=nn+1
playy2b.style="height:0px; transition:0.1s; opacity:0; padding-bottom:0px; padding-top:0px;"
playy2c.style="display:flex;"
if (dore1.textContent==dore.textContent) {
    if (nn>pn.textContent) {
        playy.style="display:none;"
        nn=1
        dore1.innerHTML=parseInt(dore1.textContent)+1
    }
 
    }
if (nn>pn.textContent) {
    nn=1
    dore1.innerHTML=parseInt(dore1.textContent)+1
}
if (pn.textContent=="3") { 
if (nn==1) {
    user1b.style="border:solid red 1px"
    playy2at.innerHTML=ut1b.textContent
}else{
    user1b.style=""
}

if (nn==2) {
    user2b.style="border:solid red 1px"
    playy2at.innerHTML=ut2b.textContent
}else{
    user2b.style=""
}

if (nn==3) {
    user3b.style="border:solid red 1px"
    playy2at.innerHTML=ut3b.textContent
}else{
    user3b.style=""
}  
}
if (pn.textContent=="4") {
    if (nn==1) {
        user1b.style="border:solid red 1px"
        playy2at.innerHTML=ut1b.textContent
    }else{
        user1b.style=""
    }
    
    if (nn==2) {
        user2b.style="border:solid red 1px"
        playy2at.innerHTML=ut2b.textContent
    }else{
        user2b.style=""
    }
    
    if (nn==3) {
        user3b.style="border:solid red 1px"
        playy2at.innerHTML=ut3b.textContent
    }else{
        user3b.style=""
    } 
     if (nn==4) {
    user4b.style="border:solid red 1px"
    playy2at.innerHTML=ut4b.textContent
    }else{
    user4b.style=""
}
}
if (pn.textContent=="5") {
    if (nn==1) {
        user1b.style="border:solid red 1px"
        playy2at.innerHTML=ut1b.textContent
    }else{
        user1b.style=""
    }
    
    if (nn==2) {
        user2b.style="border:solid red 1px"
        playy2at.innerHTML=ut2b.textContent
    }else{
        user2b.style=""
    }
    
    if (nn==3) {
        user3b.style="border:solid red 1px"
        playy2at.innerHTML=ut3b.textContent
    }else{
        user3b.style=""
    } 
     if (nn==4) {
    user4b.style="border:solid red 1px"
    playy2at.innerHTML=ut4b.textContent
    }else{
    user4b.style=""
}
if (nn==5) {
    user5b.style="border:solid red 1px"
    playy2at.innerHTML=ut5b.textContent
}else{
    user5b.style=""
}
}
if (pn.textContent=="6") {
    if (nn==1) {
        user1b.style="border:solid red 1px"
        playy2at.innerHTML=ut1b.textContent
    }else{
        user1b.style=""
    }
    
    if (nn==2) {
        user2b.style="border:solid red 1px"
        playy2at.innerHTML=ut2b.textContent
    }else{
        user2b.style=""
    }
    
    if (nn==3) {
        user3b.style="border:solid red 1px"
        playy2at.innerHTML=ut3b.textContent
    }else{
        user3b.style=""
    } 
     if (nn==4) {
    user4b.style="border:solid red 1px"
    playy2at.innerHTML=ut4b.textContent
    }else{
    user4b.style=""
}
if (nn==5) {
    user5b.style="border:solid red 1px"
    playy2at.innerHTML=ut5b.textContent
}else{
    user5b.style=""
}
if (nn==6) {
    user6b.style="border:solid red 1px"
    playy2at.innerHTML=ut6b.textContent
}else{
    user6b.style=""
}
}
if (pn.textContent=="7") {
    if (nn==1) {
        user1b.style="border:solid red 1px"
        playy2at.innerHTML=ut1b.textContent
    }else{
        user1b.style=""
    }
    
    if (nn==2) {
        user2b.style="border:solid red 1px"
        playy2at.innerHTML=ut2b.textContent
    }else{
        user2b.style=""
    }
    
    if (nn==3) {
        user3b.style="border:solid red 1px"
        playy2at.innerHTML=ut3b.textContent
    }else{
        user3b.style=""
    } 
     if (nn==4) {
    user4b.style="border:solid red 1px"
    playy2at.innerHTML=ut4b.textContent
    }else{
    user4b.style=""
}
if (nn==5) {
    user5b.style="border:solid red 1px"
    playy2at.innerHTML=ut5b.textContent
}else{
    user5b.style=""
}
if (nn==6) {
    user6b.style="border:solid red 1px"
    playy2at.innerHTML=ut6b.textContent
}else{
    user6b.style=""
}
if (nn==7) {
    playy2at.innerHTML=ut7b.textContent
    user7b.style="border:solid red 1px"
}else{
    user7b.style=""
}
}







})
playy2c.addEventListener("click",()=>{
    let rand=Math.floor(Math.random()*4)
    let randu=Math.floor(Math.random()*parseInt(pn.textContent)+1)
    playy2c.style="display:none;"
    playy2b.style="opacity:1;height:210px;transition: 1s; padding-bottom:10px; padding-top:10px;"

  
    
        let m99=setInterval(() => {
            if (nun!=ran.value) {
                 nun=nun+1
            }else{
                nun=0
            }  
            playy2bt.innerHTML=nun
        }, 10);
        playy2bt2.style="opacity:0;"
        playy2b1.style="opacity:0;"
      

    setTimeout(() => {
        playy2b1.style="opacity:1;"
        playy2b1.style="animation-name: coloor;"
             clearInterval(m99)
             playy2bt.innerHTML=Math.floor(Math.random()*ran.value+1)
      }, 1500);


     setTimeout(() => {
        playy2bt2.innerHTML="??????"
        playy2bt2.style="opacity:1;animation-name: op;"
        playy2b1.style="animation-name: none;"
            if (rand==1) {
                 playy2b1.style="background-color:#CE7A16"
            }
            if (rand==2) {
                playy2b1.style="background-color:#CF1D1D"
           }
           if (rand==3) {
            playy2b1.style="background-color:#1E9F98"
            }
           if (rand==0) {
            playy2b1.style="background-color:#CE7A16"
       }
    console.log(rand);
       }, 4000);
       
     setTimeout(() => {
        playy2bt2.style="opacity:1;animation-name: none;"
        if (randu==1) {
            playy2bt2.innerHTML=c1.value
        }
        if (randu==2) {
            playy2bt2.innerHTML=c2.value
        }
        if (randu==3) {
            playy2bt2.innerHTML=c3.value
        }
        if (randu==0) {
            playy2bt2.innerHTML=c1.value
        }
        if (randu==4) {
            playy2bt2.innerHTML=c4.value
        }
        if (randu==5) {
            playy2bt2.innerHTML=c5.value
        }
        if (randu==6) {
            playy2bt2.innerHTML=c6.value
        }
        if (randu==7) {
            playy2bt2.innerHTML=c7.value
        }
    console.log(randu);
       }, 7000);
})


/* events------------------------------*/


