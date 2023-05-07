const para = document.getElementById('p1');
para.innerText = "Hi my name is Bikalpa Paudel";
para.style.cssText="background-color: black; color: white;"

const para2 = document.getElementsByClassName('p2')[0];
para2.style.cssText="background-color: grey; color: white;"
para2.innerHTML="Hi I am -----"
document.getElementsByClassName('p2')[3].style.cssText="background-color:red; color: white;"
document.getElementsByClassName('p2')[4].style.cssText="background-color:green; color: white;"
document.getElementsByTagName('h1')[0].innerText="Hello Guys !!";
document.querySelector('h2').innerHTML='HI Q1 is changed';
document.querySelector('#q2').innerHTML='HI Q2 is changed';
document.querySelector('.q3').innerHTML='HI Q3 is changed';

const h3 = document.querySelectorAll('h3');
for(let i = 0; i<h3.length; i++){
    h3[i].innerHTML = "Change by querySelector All"
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
        const myWindows = window.open();
        myWindows.document.open();
        myWindows.document.write("<h1>Welcome to another DOM</h1>");
        myWindows.document.close();
})