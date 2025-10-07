/**
 * @param {number[][]} statements
 * @return {number}
 */
function maximumGood(statements) {
    const n = statements.length
    let res = Number.MIN_SAFE_INTEGER
    outer:
    for(let i = 0; i < 1 << n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                if(statements[j][k] === 2) continue
                if(i & (1 << j)){
                    if(i & (1 << k)){
                        if(statements[j][k] === 0) continue outer
                    }
                    else{
                        if(statements[j][k] === 1) continue outer
                    }
                }
            }
        }
        res = Math.max(res, bitCount(i))
    }
    return res
}

const bitCount = (n) => {
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}