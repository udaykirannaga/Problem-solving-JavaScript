


function fun(i, j) {
  let min = i > j ? j : i;
  let max = i > j ? i : j;
  if (max % min == 0) {
    console.log(max, "is the lcm");
  } else {
    check = max;
    while (true) {
      check++;
      if (check % min == 0 && check % max == 0) {
        console.log(check, "is the LCM");
        break;
      }
    }
  }
}
fun(3, 15);
fun(50, 15);
fun(110, 50);
fun(24, 32);
