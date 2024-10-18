


let arm = (num)=>{
  check = num;
  final = num;
  sum = 0;
  pow = 0;
  while (num != 0) {
    num % 10;
    num = Math.floor(num/10);
    pow++;
  }
  while (check != 0) {
    store = check%10;
    sum = sum + store ** pow;
    check = Math.floor(check / 10);
  }
  if (sum === final) {
    console.log("armstrong number " + final + " : " + sum);
  } else {
    console.log("not armstrong number " + final + " : " + sum);
  }
};
arm(1234);
arm(1634);
arm(153);
