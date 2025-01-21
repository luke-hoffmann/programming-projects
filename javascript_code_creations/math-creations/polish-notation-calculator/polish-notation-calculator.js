
//let math = "5 4 -";
function IsOperator(operator) {
  switch (operator) {
    case "+":
    case "-":
    case "/":
    case "^":
    case "*":
      return true;
    default:
      return false;
  }
}
function ReplaceOrNot(topOp, op) {
  // return true if pop off top of stack
  // return false 
  //console.log(topOp);
  //console.log(op);
  top = ReturnPrecendenceForOperator(topOp);
  otherOp = ReturnPrecendenceForOperator(op);


  if (otherOp.precendence < top.precendence) {
    return true
  } else if (otherOp.precendence == top.precendence && otherOp.assoc == "left") {
    return true
  }
  return false;
}



function ReversePolishCalculator(math) {
  mathArray = math.split(" ");
  newArray = [];
  stack = [];
  for (let i = 0; i < mathArray.length; i++) {
    if (!isNaN(mathArray[i])) {
      newArray.push(Number(mathArray[i]));
    } else newArray.push(mathArray[i]);
  }
  //console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    
    if (!isNaN(newArray[i])) {
      stack.unshift(newArray[i]);
      //console.log(stack)
    } else if (newArray[i] == "-" || newArray[i] == "/" || newArray[i] == "+" || newArray[i] == "*" || newArray[i] == "^") {
      switch (newArray[i]) {
        case "-":
          //console.log("wow")


          wow = stack[1] - stack[0];
          stack.shift();
          stack[0] = wow;
          break
        case "+":

          wow = stack[1] + stack[0];
          stack.shift();
          stack[0] = wow;
          break
        case "/":
          wow = stack[1] / stack[0];
          stack.shift();
          stack[0] = wow;
          break
        case "*":
          wow = stack[1] * stack[0];
          stack.shift();
          stack[0] = wow;
          break
        case "^":
          wow = Math.pow(stack[1] , stack[0]);
          stack.shift();
          stack[0] = wow;
          break
      }
      //console.log(newArray[i]);
    }
  }
  //console.log(stack);

  return stack[0];
}




function ShuntingYardPolish(infixExpression) {
  precedenceAndAssociative = {
  precedence:{
    "^":4,
    "/":3,
    "*":3,
    "+":2,
    "-":2
  },
  associative:{
    "^":"right",
    "/":"left",
    "*":"left",
    "+":"left",
    "-":"left"
  }
  
}
  goodArray = [];
  for (let i =0;i < infixExpression.length;i++) {
    
    if (infixExpression[i] == "(" || infixExpression[i] == ")") {
      goodArray.push(infixExpression[i]);
      //console.log(infixExpression[i]);
      continue
    }
    if (i < infixExpression.length-3 && !isNaN(infixExpression[i]) && !isNaN(infixExpression[i+1]) && !isNaN(infixExpression[i+2]) && !isNaN(infixExpression[i+3])) {  
      goodArray.push(Number(infixExpression[i]+infixExpression[i+1]+infixExpression[i+2]+infixExpression[i+3]));
      i+= 3;
      continue;
    } 

    if (i < infixExpression.length-2 && !isNaN(infixExpression[i]) && !isNaN(infixExpression[i+1]) && !isNaN(infixExpression[i+2]) ) {
      goodArray.push(Number(infixExpression[i]+infixExpression[i+1]+infixExpression[i+2]));
      i+= 2;
      continue;
    } 

    if (i < infixExpression.length-1 && !isNaN(infixExpression[i]) && !isNaN(infixExpression[i+1]) ) {
      goodArray.push(Number(infixExpression[i]+infixExpression[i+1]));
      i++;
      continue;
    } 

    if (i < infixExpression.length && !isNaN(infixExpression[i]) ) {
      goodArray.push(Number(infixExpression[i]));
      continue;
    } 
    goodArray.push(infixExpression[i]);

    //console.log(infixExpression[i]);
  }

  
  tokens = goodArray;
  console.log(tokens)
  stack = [];
  output = [];
  for (let i =0; i< tokens.length; i++) {
    token = tokens[i];
    console.log(stack);
    
    if (!isNaN(token)) {
      output.push(token);
      continue
    }

    
    if (token =="function") {
      stack.push(token);
      continue
    }

    
    if (IsOperator(token)) {
      if (stack.length > 0) {
        
        
        console.log(token + "ice");
        console.log(precedenceAndAssociative.precedence[token]);
        console.log( precedenceAndAssociative.precedence[stack.at(-1)] );
      while (stack.at(-1) != "(" && ( precedenceAndAssociative.precedence[stack.at(-1)] >= precedenceAndAssociative.precedence[token] /*&& ( precedenceAndAssociative.precedence[stack.at(-1)] == precedenceAndAssociative.precedence[token] && precedenceAndAssociative.associative[token] == "left")*/ ) ) {
        output.push(stack.pop(-1));
        console.log("popped")
      }
      }
      stack.push(token);
      //console.log(token);
      continue
      
    }

    
    if (token == "(") {
      stack.push(token);
      //console.log(stack)
      continue
    }


    if (token == ")") {
      //console.log("token");
      //console.log(stack);
      //console.log(stack.at(-1));
      //console.log("uh oh")
      stillGoing = true;
      while(stack.at(-1) != "(" && stillGoing) {
        
        if (stack.length >0) {
          
          if (stack.at(-1) == "(") {stack.pop();stillGoing = false;break;}
          
          if (stack.length ==1) {
            if (stack[0] == "(") {stack.pop();stillGoing = false;break;}
          }
          output.push(stack.pop());
          //console.log(output);
        } else {
        return "mismatched parathenses"
        }
        
        
      }
      if (stack.at(-1) == "(") {
        stack.pop();
        if (stack.at(-1) == "function") {
          output.push("function")
        }
      }

    }






    
  }


if (stack.at(-1) == "(" || stack.at(-1) == ")") {
  return "mismatched parentheses"
}
  while (stack.length >0) {
    if (stack.at(-1) != "(") {
      output.push(stack.pop());
    }
  }

  string = '';
  for (let i =0; i< output.length;i++) {
    string += output[i];
    if (i < output.length-1) {
      string += " ";
    }
  }
  return string
}


function ConvertInfixToPostfix( ) {
  data = document.getElementById("infix").value;
  
  document.getElementById("postfix").value = ShuntingYardPolish(data);
  
}



function SolvePostfix( ) {
  data = document.getElementById("postfixIn").value;
  
  document.getElementById("solvedPost").value = ReversePolishCalculator(data);
  
}


function SolveInfix( ) {
  data = document.getElementById("infixIn").value;
  
  document.getElementById("solved").value = ReversePolishCalculator(ShuntingYardPolish(data));
  
}