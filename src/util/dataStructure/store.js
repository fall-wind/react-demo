class Store {
    constructor(initStore) {
        this.store = initStore
        this.listener = []
    }

    setKeyValue(keys, value) {
        if(keys === undefined || value === undefined){
            this.store[keys] = value
        }else {
            throw Error('keys value can not be undefined!')
        }
    }
}
