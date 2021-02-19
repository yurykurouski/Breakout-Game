import game from "../game.js";

function renderFact() {
    const factContainer = document.querySelector('.fact-container');
   
    const span = factContainer.querySelector('span');

    if (span) {
         span.parentNode.removeChild(span)
    }
    
    const newSpan = document.createElement('span');

    async function getData() {
        const response = await fetch(`http://numbersapi.com/${game.score}`);

        return await response.text();
    }

    getData().then(data => {
        
        newSpan.innerText = `${data}`;

        factContainer.appendChild(newSpan);
    });

    factContainer.classList.add('show');


}

export default renderFact;
