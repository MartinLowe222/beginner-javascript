//to do anything on a web page it is an event 
// 1st step need to get them 
// GET THE BUTTON 
const butts = document.querySelector(".butts");

// WHAT YOU WANT TO DO WITH THE BUTTON 

function handleClick(){
    console.log("IT GOT CLICKED !!!");
}



butts.addEventListener('click', handleClick);
