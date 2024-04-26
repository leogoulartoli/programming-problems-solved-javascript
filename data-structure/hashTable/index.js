class HashTable {
    constructor(size = 100) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let hashedKey = 0;
        for (let i = 0; i < key.length; i++) {
            hashedKey = (hashedKey + key.charCodeAt(i) * i) % this.keyMap.length;
        }
        return hashedKey;
    }

    set(key, value) {
        const hashedKey = this._hash(key)
        if (!this.keyMap[hashedKey]) this.keyMap[hashedKey] = []
        const index = this.keyMap[hashedKey].findIndex(([keyMap, val]) => keyMap === key)
        if (index >= 0) {
            this.keyMap[hashedKey][index] = [key, value]
            return
        }
        this.keyMap[hashedKey].push([key, value])
    }

    get(key) {
        const hashedKey = this._hash(key)
        if (this.keyMap[hashedKey]) {
            return this.keyMap[hashedKey].find(([keyMap, val]) => keyMap === key)[1]
        }
    }
    keys() { }
    values() { }
}


const map = new HashTable()
map.set("oi", 123)
map.set("oi", 2354)
map.set("test", "hahah")
console.log(map.get("oi"))