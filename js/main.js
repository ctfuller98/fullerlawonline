import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

console.log("main should exsits")

function readMore(attorney) {
    let dots = document.querySelector(`.card[data-attorney="${attorney}"] .dots`);
    let moreText = document.querySelector(`.card[data-attorney="${attorney}"] .more`); 
    let btnText = document.querySelector(`.card[data-attorney="${attorney}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    }
}

function r(){
    console.log('hello world');
}