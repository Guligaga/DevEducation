task1 = function(str) {
    let re = /a.b/g;
    return str.match(re);
}

task2 = function(str) {

    let re = /a..a/g;
    return str.match(re);

}

task3 = function(str) {
    let re = /ab.a/g;
    return str.match(re);
}

/////////////////////////////////////////////

task4 = function(str) {

    let re = /ab+a/g;
    return str.match(re);
}

task5 = function(str) {

    let re = /ab*a/g;
    return str.match(re);
}

task6 = function(str) {

    let re = /ab?a/g;
    return str.match(re);
}

task7 = function(str) {

    let re = /ab*a/g;
    return str.match(re);
}

task8 = function(str) {

    let re = /(ab)+/g;
    return str.match(re);
}

////////////////////////////////////////////////////
task9 = function(str) {

    let re = /a\.a/g;
    return str.match(re);
}

task10 = function(str) {

    let re = /2\+3/g;
    return str.match(re);
}

task11 = function(str) {

    let re = /2\++3/g;
    return str.match(re);
}

task12 = function(str) {

    let re = /2\+*3/g;
    return str.match(re);
}

task13 = function(str) {

    let re = /\*q+\+/g;
    return str.match(re);
}

//////////////////////////////////////////////////////

task14 = function(str) {

    let re = /a[^a]+a/g;
    return str.replace(re, '!');
}

//////////////////////////////////////////////////////

task15 = function(str) {

    let re = /ab{2,4}a/g;
    return str.match(re);
}

task16 = function(str) {

    let re = /ab{0,3}a/g;
    return str.match(re);
}

task17 = function(str) {

    let re = /ab{4,}a/g;
    return str.match(re);
}

//////////////////////////////////////////////////////

task18 = function(str) {

    let re = /a\da/g;
    return str.match(re);
}

task19 = function(str) {

    let re = /a\d+a/g;
    return str.match(re);
}

task20 = function(str) {

    let re = /a\d*a/g;
    return str.match(re);
}

task21 = function(str) {

    let re = /a\Db/g;
    return str.match(re);
}

task22 = function(str) {

    let re = /a[\W]b/g;
    return str.match(re);
}

task23 = function(str) {

    let re = /\s/g;
    return str.replace(re, '!');
}

//////////////////////////////////////////////////////

task24 = function(str) {

    let re = /a[bex]a/g;
    return str.match(re);
}

task25 = function(str) {

    let re = /a[b\.\+\*]a/g;
    return str.match(re);
}

task26 = function(str) {

    let re = /a[3-7]a/g;
    return str.match(re);
}

task27 = function(str) {

    let re = /a[a-g]a/g;
    return str.match(re);
}

task28 = function(str) {

    let re = /a[a-fj-z]a/g;
    return str.match(re);
}

task29 = function(str) {

    let re = /a[a-fA-Z]a/g;
    return str.match(re);
}

task30 = function(str) {

    let re = /a[^\sex]a/g;
    return str.match(re);
}

task31 = function(str) {

    let re = /w[^\sa-z]w/gi;
    return str.match(re);
}

//////////////////////////////////////////////////////

task32 = function(str) {

    let re = /a[a-z]+a/g;
    return str.match(re);
}

task33 = function(str) {

    let re = /a[a-z]+a/gi;
    return str.match(re);
}

task34 = function(str) {

    let re = /a[\da-z]+a/g;
    return str.match(re);
}

task35 = function(str) {

    let re = /[а-яеё]+/gi;
    return str.match(re);
}

/////////////////////////////////////////////////////

task36 = function(str) {

    let re = /^aaa/g;
    return str.replace(re, '!');
}

task37 = function(str) {

    let re = /aaa$/g;
    return str.replace(re, '!');
}

/////////////////////////////////////////////////////

task38 = function(str) {

    let re = /a(e*|x*)a/g;
    return str.match(re);
}

task39 = function(str) {

    let re = /a(ee|x*)a/g;
    return str.match(re);
}

/////////////////////////////////////////////////////

task40 = function(str) {

    let re = /a\\a/g;
    return str.replace(re, '!');
}

task41 = function(str) {

    let re = /a\\{3}a/g;
    return str.replace(re, '!');
}

/////////////////////////////////////////////////////

task42 = function(str) {

    let re = /\/\w+\\/g;
    return str.replace(re, '!');
}

/////////////////////////////////////////////////////

task43 = function(str) {

    let re = /(\w+)@(\w+)/g;
    return str.replace(re, '$2@$1');
}

task44 = function(str) {

    let re = /\d/g;
    return str.replace(re, '$&$&');
}

/////////////////////////////////////////////////////

task45 = function(str) {

    let re = /[a-z][\w\.-]+@[a-z]+\.[a-z]+/;
    return re.test(str);
}

task46 = function(str) {

    let re = /[a-z][\w\.-]+@[a-z]+\.[a-z]+/g;
    return str.match(re);
}

task47 = function(str) {

    let re = /[a-z0-9-]+\.[a-z]+/;
    return re.test(str);
}

task48 = function(str) {

    let re = /http:\/\/[a-z0-9-]+\.[a-z]+/;
    return re.test(str);
}

task49 = function(str) {

    let re = /https?:\/\/[a-z0-9-]+\.[a-z]+/;
    return re.test(str);
}

task50 = function(str) {

    let re = /^https?/;
    return re.test(str);
}

task51 = function(str) {

    let re = /(txt|html|php)$/;
    return re.test(str);
}

task52 = function(str) {

    let re = /jpe?g$/;
    return re.test(str);
}

task53 = function(str) {

    let re = /^\d{1,12}$/;
    return re.test(str);
}

task54 = function(str) {

    let re = /\d+/g;
    let result = str.match(re)
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += +result[i];
    }
    return sum;
}

/////////////////////////////////////////////////////

task55 = function(str) {

    let re = /(http:\/\/)([a-z]+\.[a-z]+)/g;
    return str.replace(re, '<a href="$1$2">$2</a>');
}

task56 = function(str) {

    let re = /(\s)(\s)/g;
    return str.replace(re, '$1');
}

task57 = function(str) {

    let re = /\/\*.*?\*\//g;
    return str.replace(re, '');
}

task58 = function(str) {

    let re = /<!--.*?-->/g;
    return str.replace(re, '');
}

/////////////////////////////////////////////////////

task59 = function(str) {

    let re = /aaa(?=b)/g;
    return str.replace(re, '!');
}

task60 = function(str) {

    let re = /aaa(?!b)/g;
    return str.replace(re, '!');
}

/////////////////////////////////////////////////////

task61 = function(str) {

    let re = /\d+/g;
    return str.replace(re, (match) => +match * +match) 
}

task62 = function(str) {

    let re = /(?<=')\d+(?=')/g;
    return str.replace(re, (match) => +match * 2) 
}

task63 = function(str) {

    let re = /(?<={{)\w+(?=}})/g;
    return str.replace(re, (match) => match.split("").reverse().join("")) 
}

task64 = function(str) {

    let re = /(\d+) \+ (\d+) =/g;
    return str.replace(re, (match, p1, p2) => match + ' ' + (+p1 + +p2)) 
}

/////////////////////////////////////////////////////

task65 = function(str) {

    let re = /[12][90][0-9][0-9]|2100/;
    return re.test(str);
}

task66 = function(str) {

    let re = /([0-1][0-9]|2[0-3]):[0-5][0-9]|24:00/;
    return re.test(str);
}

task67 = function(str) {

    let re = /(^|\s)([1-9]|1[0-2])\.[0-5][0-9] [ap]m/;
    return re.test(str);
}

task68 = function(str) {

    let re = /\w*(\w)\1\w*/g;
    return str.replace(re, '') 
}

task69 = function(str) {

    let re = /( \w+)\1/g;
    return str.replace(re, '$1') 
}

task70 = function(str) {

    let re = /( \w+)\1+/g;
    return str.replace(re, '$1') 
}

module.exports = {}
