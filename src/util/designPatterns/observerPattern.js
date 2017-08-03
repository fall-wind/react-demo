/**
 * not test
 */
class EventTarget {
    constructor() {
        this.handlers = Object.defineProperty(this, 'handles', {
            value: {},
            enumerable: false,
            configurable: true,
            writable: true
        })
    }

    /**
     * 
     * @param {*} type 
     * @param {*} handler 
     * 一个type对应的handlers为一个数组
     */
    addHandler(type, handler) {
        if(typeof this.handlers[type] === 'undefined') {
            this.handlers[type] = []
        }
        this.handlers[type].push(handler)
    }

    removeHandler(type, handler) {
        let typeHandlers = this.handlers[type]
        if(Array.isArray(typeHandlers)) {
            this.handlers[type] = typeHandlers.filter(item => item !== handler)
        }
    }

    execute(event) {
        if (!event.target) {
            event.target = this
        }
        let typeHandlers = this.handlers[type]
        if(Array.isArray(typeHandlers)) {
            typeHandlers.forEach(handler => handler(event))
        }
    }
}
