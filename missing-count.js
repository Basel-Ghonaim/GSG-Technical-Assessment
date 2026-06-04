const missingCount = (arr, n) => {
    const presentCount = 0;

    for (let i = 1; i<=n; i++) {
        if (arr[i] <= n) presentCount++;
        else break;
    }

    return n - presentCount;
};


console.log(missingCount([1, 2, 3, 5], 12)); // 8
console.log(missingCount([1, 2, 3, 4, 5], 5)); // 0
console.log(missingCount([1, 2, 3, 7, 9], 5)); // 2
console.log(missingCount([1, 2, 3, 7, 9], 10)); // 5