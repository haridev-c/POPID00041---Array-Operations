let arr = [1,2,3,4,5];

function square(num)
{
    return num*num;
}

function main()
{
    let sqrArr = arr.map((item) =>square(item) );
    console.log(sqrArr);
}

main();


