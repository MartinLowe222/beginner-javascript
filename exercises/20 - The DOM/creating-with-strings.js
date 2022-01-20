console.log ("it works");

const item = document.querySelector(".tem");

const width =500;
const src = `https://picsum.photos/200`;

const desc = `Cute Pup`;

const myHTML = `
<div className="wrapper">
<h2>Cute ${desc}</h2>
<img src="${src}" alt="${desc}" />
</div>
`;

item.innerHTML = myHTML;
console.log(item.innerHTML);