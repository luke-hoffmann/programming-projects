
class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }
  genBlank(r,w) {
    this.temp = [];
    for (this.i = 0; this.i < r;this.i++) {
      this.row = [];
      for (this.j = 0; this.j < w;this.j++) {
        this.row.push(undefined);
      }
      this.temp.push(this.row);
    }
    return this.temp;
  }
  add (matrix){
    if ((!(this.matrix.length == matrix.matrix.length)) || (!(this.matrix[0].length == matrix.matrix[0].length))) {
      return false;
    }
    this.out = this.genBlank(matrix.matrix.length,matrix.matrix[0].length);

    for (this.i = 0 ; this.i < matrix.matrix.length;this.i++) {
      for (this.j = 0 ; this.j < matrix.matrix[0].length;this.j++) {
        this.out[this.i][this.j] = this.matrix[this.i][this.j] + matrix.matrix[this.i][this.j];
      }
    }
    return this.out;
      
  }
  mult (matrix) {
    if (!(this.matrix[0].length == matrix.matrix.length)) {
      return false
    }
    this.out = this.genBlank(this.matrix.length,matrix.matrix[0].length);
    for (this.i = 0; this.i < this.matrix.length;this.i++) {
      for (this.j = 0 ; this.j < matrix.matrix[0].length;this.j++) {
        this.sum = 0;
        for(this.k =0; this.k < this.matrix[0].length;this.k++) {
          this.sum += (this.matrix[this.i][this.k] * matrix.matrix[this.k][this.j]);
        }
        this.out[this.i][this.j] = this.sum;
      }
    }
    return this.out;
  }
  
}
class CustomNumber {
  constructor(num) {
    
    if (typeof num == "string") {
      num = num.split("")
      this.num = [];
      for (this.i =0 ; this.i < num.length;this.i++) {
        this.num.push(Number(num[this.i]))
      }

      return
    }
    if (typeof num == "object") {
      this.num = num;
      return;
    }
    num =(""+num).split("");
    for (this.i =0 ; this.i < num.length;this.i++) {
      num[this.i] = Number(num[this.i]);
    }
    this.num = num;
  }
  distributeValues(array) {

    for (this.i =array.length-1 ;this.i >= 0 ;this.i--) {
    
    if (!(array[this.i] > 9)) {
      continue
    }
    this.rem = Math.floor(array[this.i] /10);

    this.val = array[this.i]- (this.rem*10);
    
    if (this.i == 0) {
      array[this.i] = this.val;
      array.splice(0,0,this.rem);
      this.i =array.length-1;
      continue
    }
    
    this.val = array[this.i] - (this.rem*10);
    array[this.i-1] = array[this.i-1]+ (this.rem);
    array[this.i] = array[this.i] -(this.rem*10);
    this.i = array.length-1;
    continue
    
  }
    return array
    
  }
  add (num) {
    this.num;
    this.temp = num.num.slice();
  if (this.num.length > this.temp.length) {
    this.total = this.num.length-this.temp.length;
    for (this.i =0 ; this.i < this.num.length-this.temp.length;this.i++) {
      this.temp.splice(0,0,0)
    }
    
  } else {

    this.total = this.temp.length-this.num.length;
    for (this.i =0 ; this.i < this.total;this.i++) {
      this.num.splice(0,0,0)

    }
    
  }
  
  for (this.i = 0; this.i < this.num.length; this.i++) {
    this.turn = this.temp[this.i] + this.num[this.i];
    this.num[this.i] = this.turn;
    


  }  

  this.num = this.distributeValues(this.num);
  delete(this.temp);
  return this.num;
  }
  convertMatrixToArray(matrix) {
    this.out = []
      for (this.i =0; this.i < matrix.length + matrix[0].length-1; this.i++) {
        this.out.push(0);
      }
      for (this.i = 0; this.i < matrix.length;this.i++){
        this.rowMult= (matrix.length-this.i-1);

        for (this.j = 0; this.j < matrix[0].length; this.j++) {
          this.colMult = (matrix[this.j].length-this.j-1);
          this.out[this.out.length-1-(this.rowMult+this.colMult)]+=( matrix[this.i][this.j] )
        }
      }
    return this.distributeValues(this.out);
    }
  mult(num) {
    this.temp = [];
    for (this. i =0 ; this.i < this.num.length;this.i++) {
      this.temp.push([this.num[this.i]]);
    }
    
    this.thisNum = new Matrix(this.temp);
    this.multNum = new Matrix([num.num]);

    this.num = this.convertMatrixToArray(this.thisNum.mult(this.multNum));
    return this.num;
  }
  division(num){
    this.rem = 0;
    this.incrementer = new CustomNumber("1");
    for (let i=0; i < 1000;i++ ) {
      this.stored = new CustomNumber("1");
      for (let j =0; j < 10000; j++) {
        //if (this.stored.num)
      }
    }
  }
  get(){
    this.out = '';
    for (this.i = 0; this.i < this.num.length; this.i++) {
      this.out += this.num[this.i];
    }
    return Number(this.out);
  }
}