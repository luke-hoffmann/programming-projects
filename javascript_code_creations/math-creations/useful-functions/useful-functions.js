let testList = [20, 10, 10, 35, -9];
let testOddList = [30, 40, 50]

function average(list) {
  // returns the average of the list
  aver =0;
  for (i = 0; i < list.length; i++) {
    aver += list[i];
  }
  aver = aver / list.length;
  return(aver)
}

function high(list) {
  // returns the highest value of array
  highValue = 0;
  for (i =0; i < list.length; i++) {
    if(highValue < list[i]) {
      highValue = list[i];
    }
  }
  return(highValue);
}
function xor(bit1,bit2) {
  return (bit1-bit2)**2
}
function and(bit1,bit2) {
  return (bit1*bit2)
}
function low(list) {
  // returns the lowest value of array
  lowValue = list[0];
  for (i =0; i < list.length; i++) {
    if(lowValue > list[i]) {
      lowValue = list[i];
    }
  }
  return(lowValue);
}

function linear(search, array) {
  // returns the index of search term, returns false if search term not found
  b = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] == search) {
      b = i
      break;
    }

  }
  return (b);
}

function excludeLinear(search, array, excluded) {
  // returns the index of search term, excludes an included index, returns false if not found
  
  b = false;
  for (i = 0; i < array.length; i++) {
    if (i == excluded) {continue}
    if (array[i] == search && i != excluded) {
      b = i
      break;
    }

  }
  return (b);
}

function sort(array) {

  //returns a sorted array from least to greatest
  b = array[1];
  c = array;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (c[i] < c[i - 1]) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }
  return (c);
}


function randomHexColor(){
  function individualNumToHex(num){
  
 
  
  if (num < 10) {
    return num
  }
  switch (num) { 

    case 10:
      return "a";
    case 11:
      return "b";
    case 12:
      return "c";
    case 13:
      return "d";
    case 14:
      return "e";
    case 15:
      return "f";
    default:
      return num;
  }
}
  this.max = 15;
  this.min = 0;
  a = individualNumToHex(Math.round(Math.random() * (this.max - this.min) + this.min));
  b = individualNumToHex(Math.round(Math.random() * (this.max - this.min) + this.min));
  c = individualNumToHex(Math.round(Math.random() * (this.max - this.min) + this.min));
  d = individualNumToHex(Math.round(Math.random() * (this.max - this.min) + this.min));
  e = individualNumToHex(Math.round(Math.random() * (this.max - this.min) + this.min));
  f = individualNumToHex(Math.round(Math.random() * (this.max - this.min) + this.min));
  return "#" + a + b + c + d + e + f;

      

}
function randInt(min, max) {
  // returns a random integer x <= max && x >= min
  return (Math.random() * (max - min) + min);
}
function binarySearch (list,search) {
  // returns index of search term in array, if not found returns false
  low = 0;
  high = list.length-1
  list = sort(list);
  while (low <= high) {
    middle = Math.floor((low+high)/2)
    console.log(middle)
    if (list[middle] < search) {
      low = middle+1;
    } else if(list[middle] > search) {
      high =middle-1;
    } else {
      return(middle);
    }
  }
  return(false)
}

function distance(x1,y1, x2,y2){
  // returns distance from x1,y1 to x2,y2
  return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
}


function median(array){
  // sorts array then returns median of array
  b = array[1];
  c = array;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (c[i] < c[i - 1]) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }

  array = c;
  b = array.length % 2;
console.log(array)
  console.log(b)
  if (b == 0) {
    return (array[array.length/2] + array[(array.length/2)+1])/2
    
  }else {
    return array[Math.floor((array.length)/2)]
  }
  
}




function mode (array){
  function sort(array) {

  //returns a sorted array from least to greatest
  b = array[1];
  c = array;
  sorT = true;
  while (sorT) {
    sorT = false;
    for (i = 0; i < c.length; i++) {
      if (c[i] < c[i - 1]) {
        temp = c[i - 1];
        c[i - 1] = c[i];
        c[i] = temp;
        sorT = true;
      }
    }
  }
  return (c);
}
  // returns the mode of an array, returns false if array is empty
  if (array.length == 0) {
    return false
  }
  occurances = [];
  map = [];
  for (let i =0;i< array.length; i++) {
    count = 0;
    for (let j =0; i < map.length; j++) {
      if ( typeof map[j].array[i] == "number") {
        count++;
      }
    }
    if (count > 0) {
      occurances[map[j].array[i]].push(1)
    } else {
      occurances.push([1])
      map.push({ [(array[i])] :occurances.length-1})
    }
    
    
  }

  

}

function toDecimal(binary) {
    binary = "" + binary;
    mult = 1;
    sum = 0;
    if (binary == " " || binary =="") return
    for (let dontUseThisVariable = 0; dontUseThisVariable < binary.length; dontUseThisVariable++) {
        
        sum += Number(binary[binary.length-1-dontUseThisVariable]) * mult;
        mult *= 2;
    }

    return sum;
}



function numToByte(num){
  function changeIndex(string,index,chr) {
    // this function doesnt work in all cases and shouldnt be used out of this use case...
      returner = string.substr(0,index)   +chr + string.substr(index+chr.length,string.length);
    return returner;
  }

  function convertToBinary (num) {


    array =[];
    while (num != 0) {
        
        rem = num % 2;
        num = Math.floor(num / 2);

        x = {remainder:rem, number:num};
        array.push(x);



    }
    
    secondDigit = "";
    for (dontUseThisVariable = array.length-1; dontUseThisVariable >= 0; dontUseThisVariable--) {
        secondDigit += array[dontUseThisVariable].remainder;
    }


    return secondDigit;

}

function convertToByte (binaryString) {
    empty = "00000000"
    emptyLength = empty.length;
    
    for (dontUseThisVariable = 0; dontUseThisVariable < emptyLength;dontUseThisVariable++) {
        if ( binaryString[dontUseThisVariable] == undefined) {
            return(empty)
        }
        empty = changeIndex(empty,empty.length-1-dontUseThisVariable,binaryString[binaryString.length-1-dontUseThisVariable]);
    }
    return(empty)
}


  return convertToByte(convertToBinary(num));
}


function shortestRouteToTarget (targetAngle, currentAngle) {
  // if -1 is returned shortest direction is counterclockwise if 1 is return shortest direction is clockwise

  return Math.sign((( targetAngle-currentAngle + 540) % 360) - 180)
  a = targetAngle - currentAngle;
  b = targetAngle - currentAngle + 360;
  z = targetAngle - currentAngle - 360;

  if (Math.abs(a) < Math.abs(b) < Math.abs(z)) {
    return Math.sign(a)
  }
  if (Math.abs(z) < Math.abs(b) < Math.abs(a)) {
    return Math.sign(z)
  }
  if (Math.abs(b) < Math.abs(a) < Math.abs(z)) {
    return Math.sign(b)
  }
}
function angleTo(x1,y1,x2,y2) {

  return (Math.atan((y2-y1)/(x2-x1))) * 180/ Math.PI;
}

function badAngleToGoodAngle(x1,y1,x2,y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  
this.angle = Math.atan((this.y1-this.y2)/(this.x1-this.x2)) * 180 / Math.PI;
  
  if (this.x1 < this.x2) {
      if (this.y1 < this.y2) {
        this.angle = this.angle + 180
        
      } else {
        this.angle = 90 + 90-Math.abs(this.angle)
      }
    } else {
      if (this.y1 < this.y2) {
        this.angle = 360 - Math.abs(this.angle);
      } else {
        
        
      }
    }
  return this.angle
}

function inteceptCircleLineSeg(circle, line){
    var a, b, c, d, u1, u2, ret, retP1, retP2, v1, v2;
    v1 = {};
    v2 = {};
    v1.x = line.p2.x - line.p1.x;
    v1.y = line.p2.y - line.p1.y;
    v2.x = line.p1.x - circle.center.x;
    v2.y = line.p1.y - circle.center.y;
    b = (v1.x * v2.x + v1.y * v2.y);
    c = 2 * (v1.x * v1.x + v1.y * v1.y);
    b *= -2;
    d = Math.sqrt(b * b - 2 * c * (v2.x * v2.x + v2.y * v2.y - circle.radius * circle.radius));
    if(isNaN(d)){ // no intercept
        return [];
    }
    u1 = (b - d) / c;  // these represent the unit distance of point one and two on the line
    u2 = (b + d) / c;    
    retP1 = {};   // return points
    retP2 = {}  
    ret = []; // return array
    if(u1 <= 1 && u1 >= 0){  // add point if on the line segment
        retP1.x = line.p1.x + v1.x * u1;
        retP1.y = line.p1.y + v1.y * u1;
        ret[0] = retP1;
    }
    if(u2 <= 1 && u2 >= 0){  // second add point if on the line segment
        retP2.x = line.p1.x + v1.x * u2;
        retP2.y = line.p1.y + v1.y * u2;
        ret[ret.length] = retP2;
    }       
    return ret;
}

function drawNums(centerX,centerY, start, amp, array) {
  div = 360/array.length
  for (i= 0; i < array.length; i++) {
    ang = i*-div + 180+ -div;
  x = centerX +amp *Math.sin(ang* PI/180);
  y = centerY +amp *Math.cos(ang * PI/180);
    textSize(15);
    textAlign(CENTER, CENTER)
    
    text(array[i],x,y);
  }

  
}

function drawIncs(centerX,centerY, start, amp) {
  div = 360/60
  for (i= 0; i < 60; i++) {
    ang = i*-div + 180+ -div;
    length = 10
    x = centerX + (amp) *Math.sin(ang* PI/180);
    y = centerY + (amp) *Math.cos(ang * PI/180);
    x2 = centerX + (amp-length) *Math.sin(ang* PI/180);
    y2 = centerY + (amp-length) *Math.cos(ang * PI/180);
    line(x,y,x2,y2);
    
    
  }

  
}

function drawCircle( x, y, startAngle, length, radius, direction, res) {
  if (res == undefined) {
    res = 1;
  }
  
  //direction =-1;
  this.x = x;
  this.y = y;
  
  going = true;
  i = startAngle;
  this.count = 0;
  if (direction == 1) {
  
    for (let i =startAngle ; i < startAngle+ length; i++) {
    
    
      angle =  Math.PI/180 * (i);
        
      this.x1 = this.x + (Math.cos(angle)*radius);
      this.y1 = this.y + (Math.sin(angle)*radius);
        
      point(this.x1,this.y1);
      
      
    }
  } else {
    for (let i =startAngle ; i > startAngle- length; i--) {
  
  
    angle =  Math.PI/180 * (i);
      
    this.x1 = this.x + (Math.cos(angle)*radius);
    this.y1 = this.y + (Math.sin(angle)*radius);
      
    point(this.x1,this.y1);
    
    
  }
  }
  
}

function lerper (x1,y1,x2,y2,t) {


  x = (1 - t) * x1 + t * x2;
  y = (1 - t) * y1 + t * y2;
  return {x:x,y:y};
}
function shortestRouteToTarget (targetAngle, currentAngle) {
  // if -1 is returned shortest direction is counterclockwise if 1 is return shortest direction is clockwise

  return Math.sign((( targetAngle-currentAngle + 540) % 360) - 180);
  
  a = targetAngle - currentAngle;
  b = targetAngle - currentAngle + 360;
  z = targetAngle - currentAngle - 360;

  if (Math.abs(a) < Math.abs(b) < Math.abs(z)) {
    return Math.sign(a)
  }
  if (Math.abs(z) < Math.abs(b) < Math.abs(a)) {
    return Math.sign(z)
  }
  if (Math.abs(b) < Math.abs(a) < Math.abs(z)) {
    return Math.sign(b)
  }
}


  
function line_intersect(x1, y1, x2, y2, x3, y3, x4, y4){

  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3;
  this.y3 = y3;
  this.x4 = x4;
  this.y4 = y4;
    var ua, ub, denom = (this.y4 - this.y3)*(this.x2 - this.x1) - (this.x4 - this.x3)*(this.y2 - this.y1);
    if (denom == 0) {
        return null;
    }
    ua = ((this.x4 - this.x3)*(this.y1 - this.y3) - (this.y4 - this.y3)*(this.x1 - this.x3))/denom;
    ub = ((this.x2 - this.x1)*(this.y1 - this.y3) - (this.y2 - this.y1)*(this.x1 - this.x3))/denom;
    return {
        x: this.x1 + ua * (this.x2 - this.x1),
        y: y1 + ua * (this.y2 - this.y1),
        seg1: ua >= 0 && ua <= 1,
        seg2: ub >= 0 && ub <= 1
    };
}
function quadLerp(x1,y1,x2,y2,x3,y3,x4,y4,t) {
  b = Lerper(x1,y1,x2,y2,t);
  c = Lerper(x2,y2,x3,y3,t);
  a = Lerper(b.x,b.y,c.x,c.y,t);
    
  b = Lerper(x2,y2,x3,y3,t);
  c = Lerper(x3,y3,x4,y4,t);
  d = Lerper(b.x,b.y,c.x,c.y,t);
  e = Lerper(a.x,a.y,d.x,d.y,t);
  return e
}

function matrixMult(mat1,mat2) {
  let outMat = [];
  for (let i =0 ; i < mat1.length; i++) {
    b  =[];
    for (let j =0; j < mat2[0].length; j++) {
      b.push(0);
    }
    outMat.push(b);
  }

  // k is running through the numbers in rows and cols
  // i is running through the rows of first mat
  // j is running through the cols of mat 2
  for (let i =0 ; i< mat1.length; i++) {
    
    for (let j = 0; j < mat2[0].length; j++) {
      smallSum = 0;
      for (let k =0; k < mat1[0].length; k++) {
        smallSum += mat1[i][k] * mat2[k][j];
      }
      outMat[i][j] = smallSum
    }
  }
  return outMat
}

function drawThickArc( position, startAngle, length, radius, width, direction, res) {
  x = position.x;
  y = position.y;
  if (res == undefined) {
    res = 1;
  }
  
  
  //direction =-1;
  this.x = x;
  this.y = y;

  going = true;
  i = startAngle;
  this.count = 0;
  
  beginShape();
  if (direction == 1) {
  
    for (let i =startAngle ; i <= startAngle+ length; i+=res) {
    
    
      angle = Math.PI/180 * (i);
        
      this.x1 = this.x + (Math.cos(angle)*radius);
      this.y1 = this.y + (Math.sin(angle)*radius);
      
      vertex(this.x1,this.y1);
      
      
    }
  } else {
    for (let i =startAngle ; i >= startAngle- length; i-=res) {
  
  
    angle =  Math.PI/180 * (i);
      
    this.x1 = this.x + (Math.cos(angle)*radius);
    this.y1 = this.y + (Math.sin(angle)*radius);
      
    vertex(this.x1,this.y1);
    
    
  }
  }




  if (direction == 1) {
  
    for (let i =startAngle+length ; i >= startAngle; i-=res) {
    
    
      angle =  Math.PI/180 * (i);
        
      this.x1 = this.x + (Math.cos(angle)*(radius+width));
      this.y1 = this.y + (Math.sin(angle)*(radius+width));
      //stroke("Red")
      //point(this.x1,this.y1)
      vertex(this.x1,this.y1);
      
      
    }
  } else {
    for (let i =startAngle-length ; i <= startAngle; i+=res) {
  
  
    angle =  Math.PI/180 * (i);
      
    this.x1 = this.x + (Math.cos(angle)*(radius+width));
    this.y1 = this.y + (Math.sin(angle)*(radius+width));
      
    vertex(this.x1,this.y1);
    
    
  }
  }
  
  endShape();
}




















































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







function frequencyAnalysis(array) {
  occurances = [];
  indexMap = [];

  for (let i =0; i < array.length; i++) {
    if (occurances.length > 0) {
    for (let j =0; j < occurances.length; j++) {
      
    }
    } else { 
    } 
  } 
}



