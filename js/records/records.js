import storageService from "../storage-service.js";

class RecordsList {
    constructor(records) {
        this.records = records;
    }

    setRecord(record) {
        this.records = [...this.records, record]
    }


}

const records = JSON.parse(storageService.get('records'))

const recordsList = new RecordsList(records || []);

export default recordsList;