import recordsList from "./records.js";

function renderRecords() {

    const recordsListing = document.getElementById('records-list');
    
    const arrayOfRecords = recordsList.records;

    const sortedArray = arrayOfRecords.sort((a, b) => +a.record < +b.record ? 1 : -1);

    let place = 0;

    sortedArray.forEach(item => {
        const newListItem = document.createElement('li');

        newListItem.innerHTML = `
        <span class="index-col">${place+1}</span>
        <span class="record-col">${item.record}</span>
        <span class="player-col">${item.player}</span>
        `

        recordsListing.appendChild(newListItem);

        place++
    })


}

export default renderRecords;