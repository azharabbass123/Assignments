function check_polindrem(str){
    let revStr = str.split('').reverse().join('');
    return str === revStr;
}
console.log(check_polindrem("abacaba"));