let arr = [1, -60, 26, 56, -90, -96, 100];

function posNum(num)
{
    return num>=0;
}

let posArr = arr.filter(posNum);

let initialValue = 0;

let finalValue = posArr.reduce((accumilator, currentValue) => accumilator + currentValue, initialValue);

console.log(finalValue);
