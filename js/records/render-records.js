import storageService from "../storage-service.js";
import recordsList from "./records.js";

function renderRecords() {

    const recordsListing = document.getElementById('records-list');
    
    const arrayOfRecords = JSON.parse(storageService.get('records'))


    // const arrayOfRecords = recordsList.records;

    const sortedArray = arrayOfRecords.sort((a, b) => +a.record < +b.record ? 1 : -1);

    let place = 0;

    sortedArray.forEach(item => {

        if (!item.record) {
            return
        }
        
        const newListItem = document.createElement('li');

        newListItem.innerHTML = `
        <span class="index-col">${place+1}</span>
        <span class="record-col">${item.record}</span>
        <span class="player-col">${item.player} <span class="date-col">${item.date}</span></span>
        
        `

        recordsListing.appendChild(newListItem);

        place++
    })


}

export default renderRecords;