// triangle numbers are numbers that have the first n numbers summed to form it. so the 7th triangle number would be 1 + 2 + 3 + 4 +5 + 6 +7 = 28.

// determine the first triangle number to have more than 500 divisors.


function TriangleNumberOf(n){
    sum = 0;
    for (let i =1 ;i <= n;i++) {
        sum+=i;
    }
    return sum;
}


function IsDivisor(n,d){
    return n%d ==0;
}
function GetDivisorsOf(n){
    divisors = [1];
    if (n == 1) return divisors;
    divisors.push(n);
    for (let i =2;i <n;i++) {
        if (IsDivisor(n,i)) divisors.push(i);
    }
    return divisors;

}

function TriangleNumberWithDivisorsOf(n) {
    limitToLoop = 100000;
    let i = 1;
    while (i < limitToLoop) {
        triangleNumber = TriangleNumberOf(i);
        divisorsOfTriangleNumber = GetDivisorsOf(triangleNumber);
        if (divisorsOfTriangleNumber.length > n) return triangleNumber;


        i++;


    }
    
}

console.log(TriangleNumberWithDivisorsOf(500));
