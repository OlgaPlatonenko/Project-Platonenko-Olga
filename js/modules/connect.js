export function authorization(){
const xhr=new XMLHttpRequest();
xhr.open('POST','https://fe08-films.herokuapp.com/auth');
xhr.send();

xhr.onload=function(){
    if(xhr.status!=200){
        alert(`Ошибка ${xhr.status}`);
    } else {
    alert (`Токен ${xhr.response}`); //см токен
    }
}

xhr.onreadystatechange=() =>{
    //xhr.readyState;    
  let  resp=JSON.parse(xhr.response);
}

alert(JSON.parse(xhr.response));
return JSON.parse(xhr.response);
}
/********************************* */
