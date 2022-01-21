const cardButtons = document.querySelectorAll(".cardbutton");

// closet is the closet element to the card
function handleCardButtonClick(event){
   const button = event.currentTarget;
   const card = button.closet(".card");
// grab the image src so search for the image and grab the src form that 
const imgSrc = card.querySelector("img").src;
console.log(imgSrc);
}

// loop over each of the buttons and listen for a click on them
cardButtons.forEach(button => 
    button.addEventListener ("click",
     handleCardButtonClick)
     );