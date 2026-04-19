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

    if(powodzenie === true){
        alert("Wiadomość wysłana!!!")
        formularz.reset();
    }
})


