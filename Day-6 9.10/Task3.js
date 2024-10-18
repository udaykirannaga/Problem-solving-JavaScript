


function fun(num) {
  length = 0;
  while (num != 0) {
    num % 10;
    num = Math.floor(num / 10);
    length++;
  }
  console.log("Number length is : ", length);
}
fun(1347439387);
fun(7659837935);
fun(3030);
