const serviceBtns = document.getElementsByClassName('serviceBtn');
const formBox = document.getElementById('formBox')
const headerImg = document.getElementById('headerImg')
const headerChangeSet = setInterval(headerChange, 2500) 


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
        serviceDetail.classList.toggle("displayNone");
    })
}

submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const fmail = document.getElementById('fmail').value;
    const fmobile = document.getElementById('fmobile').value;
    const fmessage = document.getElementById('fmessage').value;
    confirmContainerBuild(fname, fmail, fmobile, fmessage);
})

function confirmContainerBuild(fname, fmail, fmobile, fmessage){
    const formAndSend = document.getElementById('formAndSend');
    const confirmContainer = document.createElement('div')
    confirmContainer.classList.add('confirmContainer');
    const confirmCotent = document.createElement('div')
    confirmCotent.classList.add('confirmCotent');
    confirmCotent.setAttribute('id', 'sendContent');
    const confirmCotentVal = `
        <h1> ${fname}</h1>
        <span> Email: ${fmail}</span>
        <span> Mobile: ${fmobile}</span>
        <p> Message: ${fmessage}</p>
    `
    confirmCotent.innerHTML = confirmCotentVal;
    const sendContentBtn = document.createElement('button');
    sendContentBtn.classList.add('sendContentBtn')
    sendContentBtn.innerHTML = "send";
    confirmContainer.appendChild(confirmCotent).appendChild(sendContentBtn)
    formAndSend.appendChild(confirmContainer)
    formBox.classList.add('displayNone')

}