
// project euler ------------------------------------------ //
function multiplesOf3or5() {
  // Multiples of 3 or 5 //
    sum = 0;
    for (i=0; i < 1000; i++) {
        a = i % 3;
        if (a == 0) {
            sum += i;
            continue
        }
        a = i % 5;
        if (a ==0) {
            sum += i;
            continue
        }
    }
    return sum;
}

function evenFibonacciNumbers () {
  // Even Fibonacci Numbers //
    n1 = 1;
    n2 = 2;
    running = true;
    sum = 0;
    //array =[];
    while (running) {
        if (n1 > 4000000) {
            running = false;
        }
        if (n2 > 4000000) {
            running = false;
        }
        if ( n2 % 2 == 0) {
            sum += n2;
        }
        if ( n1 % 2 == 0) {
            sum += n1;
        }
        n1 = n2 + n1;
        n2 = n1+n2;
    }
    return sum;
}

function largestPrimeFactor (numberToEvaluate) {

  // Largest Prime Factor //
  
    // should save last number checked so it can start from that point instead of running through
    // whole list of number everytime looking for prime.
    largestPrimeFactor = 1;
    for (i = 2; i < Math.sqrt(numberToEvaluate); i++) {
        skip = true;
        if (i % 2 == 0) {continue};
        for (j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
            if (i % j == 0) {
                if (i == 29) {
                }
                skip = false;
            }
        }
        if (numberToEvaluate % i == 0 && skip) {
            largestPrimeFactor = i;
        }
    }
    return largestPrimeFactor
}

function isPalindrome(number) {
  // find the largest palindrome made from 3 digit numbers
    number = number +'';
    palindrome = true;
    for (dontUse = 0; dontUse < Math.ceil(number.length/2); dontUse++){
        if (number[dontUse] != number[number.length-1-dontUse]) {
            return false
        }
    }
    return true;
}
function largestPalindrome(n) {
    largestPal = 0;
    amount = ""
    for (i = 0; i < n; i++) {
        amount += 9 + ""
    }
    amount = Number(amount)
    largestPals = [];
    for (i = amount; i> 99; i--) {
        for (j = amount; j > 99; j--){
            if (isPalindrome(i * j)) {
                largestPals.push({palindrome:i*j, i:i,j:j});
            }
            if (largestPals.length > 20 ) {
                return largestPals
            }
        }
    }
    return largestPal
}
function sumSquareDIff(upTo) {
    sumOfNums = 0;
    sumOfSquares = 0;
    for (i = 0; i<= upTo; i++) {
        sumOfSquares += i*22;
        sumOfNums += i;
    }
    return ((sumOfNums**2)-sumOfSquares)
}
function smalllestMult() {
    search = true;
    i = 1;
    while(search){
        searcher=0;
        for (k = 1; k <21; k++) {
            if (i % k == 0) {
                searcher++;
            }
        }
        if(searcher ==20) {
            search = false;
            return(i);
        }
        i++;
    }
}
function isPrime(num) {
    if (num < 2) {
        return false
    } 
    
    if (num == 2) {
        return true
    }
    for (dontUsePrime = 2; dontUsePrime < Math.ceil(Math.sqrt(num))+1; dontUsePrime++) {

        if (num % dontUsePrime == 0) {
            return false
        }
    }
    return true;
}
function nPrime(num) {

    search = true;
    i = 2;
    primes = [];
    while(search) {

        b = isPrime(i);
        if (b) {
            primes.push(i);
        }
        if (primes.length == num) {
            return primes[num-1]
        }

        i++;
        
    }
    return primes
}
let largeNumberToCheck = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450;
function greatestProduct(number) {
    // i think it has an issue of saving doubles?? because the number is too big
    string = number +""
    greatestSum = 0;
    for (i = 0; i< string.length; i++) {
        sum = 0;
        for (j = 0; j < 13; j++) {
            sum += Number(string[i+j]);
        }
        if (sum > greatestSum) {
            greatestSum = sum;
        }
    }
    return greatestSum
}
function specPythTrip() {

    a = 3;
    b = 4;
    c = 5;
    trips =[];
    for (i = 2; i < 100; i++) {
        b = (2*i);
        a = (Math.pow(i,2) - 1);
        c = (Math.pow(i,2) + 1);
        if (a +b +cd1000) {
            return (a*b*c);
        }
        trips.push({a:a,b:b,c:c, sum:(a+b+c)});

    }
    return trips;   
}
function sumOfPrimes() {


    sum = 0;
    for (i = 0; i < 2000000;i ++) {



        if (isPrime(i)) {
            sum += i ;
            //console.log(i)
        }
    }
    return sum;
}
function longestCollatz(){

    prevCount = 0;
    for (i = 13; i < 1000000; i++) {
        j = i;
        count = 0;
        while(j != 1) {
            //console.log(j)
            if (j % 2 == 0) {
                j = j/2;
                count++;
            } else {
                j = (3*j) +1;
                count++;
            }
            if (j == 1) {
                count++;
            }
            
        }
        if (count > prevCount) {
            longest = i;
            prevCount = count;
        }
    }
    //console.log(prevCount)
    return longest


}
function sumOfPower() {


    num = 2**1000;

    sum = 0;
    for (i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    //console.log(num)
    //console.log(sum);
}

// project euler -------------------------------------------- //