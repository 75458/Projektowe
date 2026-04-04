const BTNmotyw = document.getElementById("btn-motyw");
const BTNkontakt = document.getElementById("btn-kontakt");
const BTNall = document.getElementById("btn-all");
const BTNdosw = document.getElementById("btn-dosw");
const motyw = document.getElementById("css");

BTNmotyw.addEventListener('click',function(){
if(motyw.getAttribute('href') === "red.css"){
    motyw.setAttribute("href", "green.css");
}else{
    motyw.setAttribute("href", "red.css");
}
});

const kontakt = document.getElementById("kontakt")
function Widocznosc(){
if(kontakt.style.visibility === "hidden"){
    kontakt.style.visibility = "visible";
}else{
    kontakt.style.visibility = "hidden";
}
}
BTNkontakt.addEventListener('click', Widocznosc)

const doswiadczenie = document.getElementById("dos");
function WidoDosw(){
if(doswiadczenie.style.visibility === "hidden"){
    doswiadczenie.style.visibility = "visible";
}else{
    doswiadczenie.style.visibility ="hidden"
}}
BTNdosw.addEventListener('click', WidoDosw)

const sekcje = document.querySelectorAll("section");
function showall(){
    sekcje.forEach(function(element){
        element.style.visibility = "visible"
    })
}
BTNall.addEventListener('click',showall)