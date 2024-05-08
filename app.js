let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e))=>{
        if(e.target.InnerHTML = = '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }}
        else{
            console.log(e.target)
            string = string + e.target.InnerHTML;
            document.querySelector('input').value = string;
        }
    })
