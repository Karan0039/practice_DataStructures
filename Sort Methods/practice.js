let res = []
let j = 0
let bucket
for (let i = 0; i < 3; i++) {
    bucket = Array.from({ length: 10 }, () => [])
    res = [...(bucket.flat())]
    j++
}
console.log(bucket)