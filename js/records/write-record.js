import game from "../game.js";
import storageService from "../storage-service.js";
import recordsList from "./records.js";

function writeRecord() {

    const newRecord = {
        player: game.currentPlayer,
        record: game.score
    }

    if (!newRecord.record) {
        return
    }

    recordsList.setRecord(newRecord);

    storageService.set('records', JSON.stringify(recordsList.records))
}

export default writeRecord;