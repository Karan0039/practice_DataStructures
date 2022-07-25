class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
    hash(key) {
        let total = 0
        let temp_prime = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0)
            total = (total * temp_prime + value) % this.keyMap.length
        }
        return total
    }
    set(key, value) {
        let index = this.hash(key)
        if (!this.keyMap[index]) this.keyMap[index] = []
        this.keyMap[index].push([key, value])
    }
    get(key) {
        let index = this.hash(key)
        if (!this.keyMap[index]) return undefined
        return this.keyMap[index].find(i => i[0] == key)[1]
    }
    values() {
        let data = []
        for (let i of this.keyMap) {
            for (let j = 0; i && j < i.length; j++) {
                //if (!data.includes(i[j][1])) 
                data.push(i[j][1])
            }
        }
        return data
    }
    keys() {
        let data = []
        for (let i of this.keyMap) {
            for (let j = 0; i && j < i.length; j++) {
                // if (!data.includes(i[j][0])) 
                data.push(i[j][0])
            }
        }
        return data
    }
}

let ht = new HashTable(11)
ht.set("name", "Karan")
ht.set("age", 29)
ht.set("blood", "+O")
ht.set("score", 29)
console.log(ht)
console.log(ht.get("name"))
console.log(ht.values())
console.log(ht.keys())