alert("Hello! Write in whatever attributes like intelligence,physical attractiveness etc... in the attributedesc boxes. In the first row put how the person you're testing with views you in that attribute out of ten. Then in the second row how they view themselves in the above attribute. In the third put what they believe the importance of that attribute is to them when finding someone to date. Once you are done click get results! This is not random and does actually have an intuative formula. Uh all results are final and totally correct.")
x=0
var descriptors=["desc","uvalue","themvalue","importance"]
var startinnerhtml=["attributedesc",1,1,1]
var postdivs=["attribute-neg-button","udesc","themdesc","importancedesc"]

function addDiv() {
x+=1
for (descriptor in descriptors) {
var desc = document.createElement("div");
desc.id="attribute"+descriptors[descriptor]+x
desc.contentEditable=true
desc.classList.add("attribute")
desc.innerHTML = startinnerhtml[descriptor]
document.getElementById("attribute-"+descriptors[descriptor]+"-list").insertBefore(desc,document.getElementById(postdivs[descriptor]));
}
}
for (var i = 0; i < 3; i++) {
    addDiv()
}
function removeDiv() {
for (descriptor in descriptors) {
document.getElementById("attribute"+descriptors[descriptor]+x).remove()
}
x=x-1

}
function getScore(person, weighted=false){
    totaltop=0
    totalbottom=0
    weightedscore=0
    score=0
    if(person=="u") {
        uvaluearray=[]
        importancearray=[]
        
        for (var i = 1; i <= x; i++) {
            uvaluearray=uvaluearray.concat(parseInt(document.getElementById("attributeuvalue"+i).innerHTML))
            importancearray=importancearray.concat(parseInt(document.getElementById("attributeimportance"+i).innerHTML))
        }
        
        for (value in uvaluearray) {
            totaltop=totaltop+uvaluearray[value]*importancearray[value]
        }
        for (value in uvaluearray) {
            score=score+uvaluearray[value]
        }
        for (value in importancearray) {
            totalbottom=totalbottom+importancearray[value]
        }
        weightedscore=totaltop/totalbottom
        score=score/3
        if (weighted==true) return format(weightedscore)
        else return format(score)
    }
    if(person=="them") {
        themvaluearray=[]
        importancearray=[]
        for (var i = 1; i <= x; i++) {
            themvaluearray=themvaluearray.concat(parseInt(document.getElementById("attributethemvalue"+i).innerHTML))
            importancearray=importancearray.concat(parseInt(document.getElementById("attributeimportance"+i).innerHTML))
        }
        for (value in themvaluearray) {
            totaltop=totaltop+themvaluearray[value]*importancearray[value]
        }
        for (value in themvaluearray) {
            score=score+themvaluearray[value]
        }
        for (value in importancearray) {
            totalbottom=totalbottom+importancearray[value]
        }
        weightedscore=totaltop/totalbottom
        score=score/3
        if (weighted==true) return format(weightedscore)
        else return format(score)
    }
}
function writepopupboxtext(){
    console.log('They view you as a '+getScore("u",true)+' out of 10! Good job, maybe?<br>')
    document.getElementById("popup").innerHTML='<h1>RESULTS</h1>They view you as a '+getScore("u",true)+' out of 10! Good job, maybe?<br>You are actually a '+getScore("u",false)+' out of 10! Ew, perhaps?<br>They view themselves as a '+getScore("them",true)+' out of 10! OOOH smokin.<br>They are actually a '+getScore("them",false)+' out of 10! What a selfish catfish; am I right?<br>And now, the moment we have all been waiting for. The success change wooooooo.<br>You have a '+getsuccesschance()+'. Wooooooooooooooooooooo, hopefully.'
    document.getElementById("hover_bkgr_fricc").style.display="block"

}
function askfriendshiplevel(){
friendshiplevel=prompt("Hey! One more thing. We need to know the friendship level between you and this person so please just enter it below. Based on this scale:\n1-Enemies\n2-Acquaintances\n3-New Friends\n4-Lost Contact Friends\n5-Friends\n6-Medium Friends\n7-Close Friends\n8-Best Friends\n9-They've Confessed Already\n10-Already Dating")
writepopupboxtext()
}
function format(num){
    num=num.toFixed(2)
    return num
}
function getsuccesschance(){
    return friendshiplevel*10*getScore("u")/getScore("them")+"%"
}
var numdescriptors=["uvalue","themvalue","importance"]

function tick() {
    for (y in numdescriptors) {
    for (var i = 1; i <= x; i++) {
        z=document.getElementById("attribute"+numdescriptors[y]+i).innerHTML 
      if  (10<Number(z)) {
        document.getElementById("attribute"+numdescriptors[y]+i).innerHTML=10
      }
      if  (1>Number(z) && z!="") {
        document.getElementById("attribute"+numdescriptors[y]+i).innerHTML=1
      }
      if ((!Number.isInteger(Number(z))) && (z!="")) {
        document.getElementById("attribute"+numdescriptors[y]+i).innerHTML=1
      }
    }
}
}
function hide() {
    document.getElementById("hover_bkgr_fricc").style.display="none"
}