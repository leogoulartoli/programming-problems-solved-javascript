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

    keys() {
        let keys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys
    }

    values() {
        let values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values
    }
}

