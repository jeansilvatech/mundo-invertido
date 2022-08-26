
import { subscribeToHellfireClub } from "./firebase/hellfire-clube.js";
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');
const formTexto = document.getElementById('formTexto');
const inscrito = document.getElementById('inscrito');
btnSubscribe.addEventListener('click', async function(){
    const subscription={
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value,
    }
    if(txtName.value === '' ){
        inscrito.innerHTML = `Você precisa digitar seu nome!`;
        formTexto.style.display = 'none';
        inscrito.style.display = 'flex';
    } else{
    const subscriptionId = await subscribeToHellfireClub(subscription);
    inscrito.innerHTML = `Agora você faz parte do Clube de D&D! Seja bem-vindo ${txtName.value}!`;
    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
    formTexto.style.display = 'none';
    inscrito.style.display = 'flex';
    }
    
   
})




