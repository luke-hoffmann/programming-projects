//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

//What is the 10 001st prime number?


function IsPrime(n){
  if (n == 2 || n ==3 || n ==5) {
    return true;
  }
  test = n+"";
  if (test[test.length-1] == "0" || test[test.length-1] == "5" ) {
    return false;
  }
  if (n % 2 == 0 ) {
    return false;
  }
  for (let i =3 ; i<= Math.sqrt(n); i++) {
    if (n % i==0) {
      return false;
    }
  }
  return true;
}



function TenThousandAndFirstPrime(){
  primes = 1;
  let number = 3;
  while (primes<=10001){
    
    if ( !IsPrime(number) ) {
      number++;
      continue
    }
    console.log(number)
    primes++;
    if (primes == 10001) return number;
    
    number +=2;
  }


}


console.log(TenThousandAndFirstPrime())