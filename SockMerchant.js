
function sockMerchant(n, ar) {
    let socksObject = {};
    let pairCount = 0;
    for (let i = 0; i < n; i++) {
        if (!socksObject[ar[i]]) {
            socksObject[ar[i]] = 1;
        } else {
            socksObject[ar[i]]++;
        } if (socksObject[ar[i]] % 2 === 0) {
            pairCount++
        }
    }
    return pairCount;
}
sockMerchant(6, [4, 3, 4, 32, 13, 32])
