let sum = 0
let i = 1
while (i <= 100) {
    sum += i;
    i++;
}
document.writeln('  tong cac so tu 1 den 100' + '<br>' + sum + '<br>')
/**bai 11_2 */
var n = Number(prompt('nhap vao so nguyen'))
let tinh = 0
let h = 1

while (h < n) {
    if (i % 3 === 0) {
        tinh += i
    }
    i++
}
document.writeln('tong cac so chia het cho 3 be hon n' + '<br>' + tinh + '<br>')
/*bai 11_3*/
  function fibonacci(n) {
      var fib = [0, 1];
      for (var i = 2; i < n; i++) {
          fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib;
  }

  var ini = fibonacci(100);
  document.writeln(ini);
/**bai 11_4 */
function isPalindrome(n) {
    var r = 0;
    var temp = n;
    while (temp > 0) {
      var remainder = temp % 10;
      r = r * 10 + remainder;
      temp = Math.floor(temp / 10);
    }
    if (reverse === n) {
      return true;
    } else {
      return false;
    }
  }
  
  var number = 1256521;
  var inra = isPalindrome(number);
  document.writeln(inra);
  /**bai 11.5 */
  let number = 100;
while (number <= 999) {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  if (sum % 3 === 0 && sum > 10) {
    console.log(number);
  }
  number++;
}