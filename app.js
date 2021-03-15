const serviceBtns = document.getElementsByClassName('serviceBtn');
const formBox = document.getElementById('formBox')
const headerImg = document.getElementById('headerImg')
const headerChangeSet = setInterval(headerChange, 2000) 
const serviceImgSlideSet = setInterval(serviceImgSlide, 2000)
const formAlert = ()=> {alert('すべてのフィールドにちゃんと入力してください!!');}
let imgNr = 1;




function serviceImgSlide(){
    const serviceItem = document.getElementById('serviceItem');
    let img = `<img src="/assets/service/service${imgNr}.png" alt="company image">`
    serviceItem.innerHTML = img;
    imgNr ++;
    if(imgNr > 5){
        imgNr = 1;
    }
    // console.log(serviceItem)
}




function headerChange(){
    const jp = document.getElementById("headerJp")
    const en = document.getElementById("headerEn")
    jp.classList.toggle('displayNone')
    en.classList.toggle('displayNone')
}
        



for( let i = 0 ; i < serviceBtns.length ; i++ ){
    const serviceBtn = serviceBtns[i];
    serviceBtn.addEventListener('click', () => {
        const serviceDetail = serviceBtn.nextElementSibling;
        const right = serviceBtn.firstElementChild;
        const down = serviceBtn.firstElementChild.nextElementSibling;
        right.classList.toggle('displayNone')
        down.classList.toggle('displayNone')    
        serviceDetail.classList.toggle("displayNone");
    })
}









submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const fmail = document.getElementById('fmail').value;
    const fmobile = document.getElementById('fmobile').value;
    const fmessage = document.getElementById('fmessage').value;

    if(fname !== '' && fmail !== '' && fmobile !== '' && fmessage !== ''){
        confirmContainerBuild(fname, fmail, fmobile, fmessage);
    }else{
        formAlert();
    }
})

function confirmContainerBuild(fname, fmail, fmobile, fmessage){
    const formAndSend = document.getElementById('formAndSend');
    const confirmContainer = document.createElement('div')
    confirmContainer.classList.add('confirmContainer');
    const confirmCotent = document.createElement('div')
    confirmCotent.classList.add('confirmCotent');
    confirmCotent.setAttribute('id', 'sendContent');
    const confirmCotentVal = `
        <span>Your message</span>
        <span> ${fname}</span>
        <span> Email: ${fmail}</span>
        <span> Mobile: ${fmobile}</span>
        <p> Message: ${fmessage}</p>
    `
    confirmCotent.innerHTML = confirmCotentVal;
    const sendContentBtn = document.createElement('button');
    sendContentBtn.classList.add('sendContentBtn')
    sendContentBtn.innerHTML = "send";
    confirmContainer.appendChild(confirmCotent)
    confirmContainer.appendChild(sendContentBtn)
    formAndSend.appendChild(confirmContainer)
    formBox.classList.add('displayNone')

}