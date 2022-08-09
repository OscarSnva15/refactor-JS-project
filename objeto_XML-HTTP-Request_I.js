const button = document.getElementById('button')
button.addEventListener('click', ()=>{
    let xhr
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    }else
        xhr = new ActivateObject ("Microsoft.XMLHTTP")
    })
/** El objeto XHR tiene un metodo 'Open' que cibe dos parametros
 * los cuales el primer atributio es el Metodo (Ya sea GET o POST), El segundo metodo es 
 * */ 
    xhr.open('GET', 'https://JSONplaceholder.typicode.com/users')
    xhr.addEventListener('load',(data))
    xhr.send()