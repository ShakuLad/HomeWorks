for(var i = 20; i >= 0; --i) {
    console.log(i);
}

var arr = [10, 20, 30, 50, 235, 3000, 5000439857];
for (var i = 0; i < arr.length; i++){
    var num = String(arr[i]);
    var a = num[0];
    if (a == 1 || a == 2 || a == 5) {
    console.log(num);
  }
}

var arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'];
var result = {};
for (var i = 0; i < arr.length; i++) {
    var a = arr[i];
    if (result[a] != undefined)
        result[a]++;
    else
        result[a] = 1;
}
for (var key in result)
    console.log(key + ' = ' + result[key]);
