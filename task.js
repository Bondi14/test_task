function makestr(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let str = makestr(5);

function check_palindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i];
    let y = str[j - i];
    if (x != y) {
      return false;
    }
  }
  return true;
}

function is_palidrome(str) {
  let ans = check_palindrome(str);
  if (ans == true) {
    ans = "red";
  } else {
    ans = "black";
  }
}

function is_didgit_only(str, result) {
  let isnum = /^\d+$/.test(str);
  if ((isnum === true)) {
    result = "blue";
  } else {
    result = "black";
  }
  return result;
}

const zero = 0;

function repeat() {
   console.log(makestr(5));
   console.log(is_palidrome(str));
   console.logis_didgit_only(str)
   console.log(`${str.includes(zero) ? 'show' : 'dont_show'}`);
 }
 setInterval(repeat, 5000);
