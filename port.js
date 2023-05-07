
const element = document.body;
const btn = document.querySelector('#btn');
function toggleColor(){
    element.classList.toggle('darkmode');
}

if(element.classList.contains('darkmode')){
    btn.textContent="Light Mode";
}
else{
   btn.textContent="Dark Mode";
}

const textChange = document.querySelector('#change');
const changeArr = ['a student', 'a fronted dev', 'a learner'];
count = 0;
setInterval(()=>{
    textChange.textContent=changeArr[count];
    count = (count + 1) % changeArr.length;
},2000)