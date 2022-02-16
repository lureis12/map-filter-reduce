const nums = [1, 2, 3, 4, 5, 6, 7, 8];

function filtraPares (arr) {
    return arr.filter (function pares(item){
        return item % 2 === 0
    })
};

console.log(filtraPares(nums));