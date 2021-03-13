const serviceBtns = document.getElementsByClassName('serviceBtn');
const formAndSend = document.getElementsById('formAndSend')





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
    const submitBtn = document.getElementById('submitBtn').value;
    form-box.classList.add('displayNone')
    confirmContainerBuild()
})

function confirmContainerBuild(fname, fmail, fmobile, fmessage){
    const confirmContainer = document.createElement('div').classList.add('confirmContainer')
    const confirmCotent = document.createElement('div').classList.add('confirmCotent')
    const confirmCotentVal = `
        <h1>${fname}</h1>
        <span>${fmail}</span>
        <span>${fmobile}</span>
        <p>${fmessage}</p>
    `
    confirmCotent.innerHTML = confirmCotentVal
    const sendContentBtn = document.createElement('button').classList.add(sendContentBtn)
    sendContentBtn.innerHTML = "send";
    confirmContainer.appendChild(confirmCotent).appendChild(sendContentBtn)
    formAndSend.appendChild(confirmContainer)

}