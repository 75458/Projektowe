//zadanie 4
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

//zadanie 5 MODYFIKACJA DLA ZADANIA 7
const formularz = document.querySelector('form[name="dane"]')
//pola bledow
const blad1 = document.getElementById("blad-name")
const blad2 = document.getElementById("blad-sname")
const blad3 = document.getElementById("blad-email")
const blad4 = document.getElementById("blad-message")


formularz.addEventListener('submit',function(e){
    e.preventDefault()

    const Imie = document.getElementById("fname").value;
    const Nazwisko = document.getElementById("Sname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let powodzenie = true

    if(Imie === ""){
    blad1.textContent = "Pole z imieniem jest wymagane!"
    blad1.style.color = "red"
    blad1.style.visibility = 'visible'
    powodzenie = false
    }else if(/\d/.test(Imie)){
        blad1.textContent = "Imię nie może zawierać cyfr!";
    blad1.style.color = "red";
    blad1.style.display = 'block';
    powodzenie = false
    }
    else{
    blad1.textContent = ""
    }

    if(Nazwisko === ""){
        blad2.textContent = "Pole z nazwiskiem jest wymagane!"
        blad2.style.color = "red"
        blad2.style.visibility = 'visible'
        powodzenie = false
    }else if(/\d/.test(Nazwisko)){
        blad2.textContent = "Nazwisko nie może zawierać cyfr!";
    blad2.style.color = "red";
    blad2.style.display = 'block';
    powodzenie = false;
    }
    else{
        blad2.textContent = ""
    }

    if(email === ""){
        blad3.textContent = "Pole z emailem jest wymagane!"
        blad3.style.color = "red"
        blad3.style.visibility = 'visible'
        powodzenie = false;
    }else{
        blad3.textContent = ""
    }
    
    if(message === ""){
        blad4.textContent = "Pole z wiadomoscia jest wymagane!"
        blad4.style.color = "red"
        blad4.style.visibility = 'visible'
        powodzenie = false;
    }else{
        blad4.textContent = ""
    }
// MODYFIKACJA DLA ZADANIA 7
    if(powodzenie === true){
        // To jest miejsce na Twoje dane z Supabase (skopiowane w Kroku 1)
        const PROJECT_URL = "https://mzsqgpdsdvugnsexyrid.supabase.co"; 
        const API_KEY = "sb_publishable_MleEmYMnl3ksdJNYpesw1w_FAHe-dBx"; 

        // Tworzymy obiekt z danymi do wysłania
        const dataToSend = {
            fname: Imie,
            Sname: Nazwisko,
            email: email,
            message: message
        };

        // Wymaganie 1: Wysłanie danych metodą POST za pomocą fetch()
        fetch(`${PROJECT_URL}/rest/v1/wiadomosci`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': API_KEY, // Supabase wymaga autoryzacji kluczem
                'Authorization': `Bearer ${API_KEY}`,
                'Prefer': 'return=minimal' // Informuje serwer, że nie potrzebujemy odpowiedzi z pełnymi danymi
            },
            body: JSON.stringify(dataToSend) // Zamieniamy obiekt na format JSON
        })
        .then(response => {
            if (!response.ok) {
                // Jeśli serwer odpowiedział błędem (np. 400, 500)
                throw new Error('Błąd połączenia z serwerem');
            }
            // Wymaganie 3: Potwierdzenie poprawnego wysłania danych
            alert("UDAŁO SIĘ! Wiadomość została zapisana w bazie Supabase.");
            formularz.reset(); // Czyszczenie formularza po sukcesie
        })
        .catch(error => {
            // Obsługa błędów, jeśli coś poszło nie tak
            console.error('Błąd:', error);
            alert("Wystąpił błąd podczas wysyłania wiadomości.");
        });
    }
})

//zadanie 6

fetch('dane.json')
.then(response => response.json())
.then(dane => {
const listaUmie = document.getElementById('lista-umie');
dane.umiejetnosci.forEach(umiejetnosc => {
            const li = document.createElement('li'); 
            li.textContent = umiejetnosc;            
            listaUmie.appendChild(li);               
        });
        const listaProj = document.getElementById('lista-proj'); 
        
        dane.projekty.forEach(projekt => {
            const li = document.createElement('li');
            li.textContent = projekt;
            listaProj.appendChild(li);
        });

    })


// zadanie 7

const inputNotatka = document.getElementById('nowa-not');
const btnDodajNotatke = document.getElementById('btn-dodaj-not');
const listaNotatek = document.getElementById('lista-not');

let notatki = JSON.parse(localStorage.getItem('mojeNotatkiCV')) || [];

function Notatki() {
    listaNotatek.innerHTML = ''; 
    
    notatki.forEach(function(notatka, index) {
        const li = document.createElement('li');
        li.textContent = notatka + " ";
        
        const btnUsun = document.createElement('button');
        btnUsun.textContent = 'Usuń';
        btnUsun.style.marginLeft = "10px";
        
        btnUsun.addEventListener('click', function() {
            notatki.splice(index, 1); 
            zapiszNotatki();          
            Notatki();        
        });

        
        li.appendChild(btnUsun);
        listaNotatek.appendChild(li);
    });
}
function zapiszNotatki() {
    
    localStorage.setItem('mojeNotatkiCV', JSON.stringify(notatki));
}
btnDodajNotatke.addEventListener('click', function() {
    const tekst = inputNotatka.value.trim();
    
    if (tekst !== "") {
        notatki.push(tekst); 
        zapiszNotatki();     
        Notatki();   
        inputNotatka.value = '';
    } else {
        alert("Wpisz tekst przed dodaniem!");
    }
});
Notatki();