const {} = require('../regExp');


describe('task1', function () {
    it("Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb", function () {
        assert.deepEqual(task1('ahb acb aeb aeeb adcb axeb'), ['ahb', 'acb', 'aeb'])
    })
});

describe('task2', function () {
    it("Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba adca abea", function () {
        assert.deepEqual(task2('aba aca aea abba adca abea'), ['abba', 'adca', 'abea'])
    })
});

describe('task3', function () {
    it("Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba и abea, не захватив adca.", function () {
        assert.deepEqual(task3('aba aca aea abba adca abea'), ['abba', 'abea'])
    })
});

////////////////////////////////////////////////////////

describe('task4', function () {
    it("Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba.", function () {
        assert.deepEqual(task4('aa aba abba abbba abca abea'), ['aba', 'abba', 'abbba'])
    })
});

describe('task5', function () {
    it("Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba.", function () {
        assert.deepEqual(task5('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba'])
    })
});

describe('task6', function () {
    it("Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba.", function () {
        assert.deepEqual(task6('aa aba abba abbba abca abea'), ['aa', 'aba'])
    })
});

describe('task7', function () {
    it("Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea.", function () {
        assert.deepEqual(task7('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba'])
    })
});

describe('task8', function () {
    it("Дана строка 'ab abab abab abababab abea'. Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.", function () {
        assert.deepEqual(task8('ab abab abab abababab abea'), ['ab', 'abab', 'abab', 'abababab', 'ab'])
    })
});

//////////////////////////////////////////////////////////////

describe('task9', function () {
    it("Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, не захватив остальные.", function () {
        assert.deepEqual(task9('a.a aba aea'), ['a.a'])
    })
});

describe('task10', function () {
    it("Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные.", function () {
        assert.deepEqual(task10('2+3 223 2223'), ['2+3'])
    })
});

describe('task11', function () {
    it("Дана строка '23 2+3 2++3 2+++3 345 567'. Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные.", function () {
        assert.deepEqual(task11('23 2+3 2++3 2+++3 345 567'), ['2+3', '2++3', '2+++3'])
    })
});

describe('task12', function () {
    it("Дана строка '23 2+3 2++3 2+++3 445 677'. Напишите регулярку, которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные.", function () {
        assert.deepEqual(task12('23 2+3 2++3 2+++3 345 567'), ['23', '2+3', '2++3', '2+++3'])
    })
});

describe('task13', function () {
    it("Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.", function () {
        assert.deepEqual(task13('*+ *q+ *qq+ *qqq+ *qqq qqq+'), ['*q+', '*qq+', '*qqq+'])
    })
});

//////////////////////////////////////////////////////////////

describe('task14', function () {
    it("Дана строка 'aba accca azzza wwwwa'. Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'.", function () {
        assert.deepEqual(task14('aba accca azzza wwwwa'), '! ! ! wwwwa')
    })
});

//////////////////////////////////////////////////////////////

describe('task15', function () {
    it("Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки abba, abbba, abbbba и только их.", function () {
        assert.deepEqual(task15('aa aba abba abbba abbbba abbbbba'), ['abba', 'abbba', 'abbbba'])
    })
});

describe('task16', function () {
    it("Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается менее 3-х раз (включительно).", function () {
        assert.deepEqual(task16('aa aba abba abbba abbbba abbbbba'), ['aa', 'aba', 'abba', 'abbba'])
    })
});

describe('task17', function () {
    it("Дана строка 'aa aba abba abbba abbbba abbbbba'. Напишите регулярку, которая найдет строки вида aba, в которых 'b' встречается более 4-х раз (включительно).", function () {
        assert.deepEqual(task17('aa aba abba abbba abbbba abbbbba'), ['abbbba', 'abbbbba'])
    })
});

//////////////////////////////////////////////////////////////

describe('task18', function () {
    it("Дана строка 'a1a a2a a3a a4a a5a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.", function () {
        assert.deepEqual(task18('a1a a2a a3a a4a a5a aba aca'), ['a1a', 'a2a', 'a3a', 'a4a', 'a5a']) 
    })
});

describe('task19', function () {
    it("Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.", function () {
        assert.deepEqual(task19('a1a a22a a333a a4444a a55555a aba aca'), ['a1a', 'a22a', 'a333a', 'a4444a', 'a55555a']) 
    })
});

describe('task20', function () {
    it("Дана строка 'aa a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').", function () {
        assert.deepEqual(task20('aa a1a a22a a333a a4444a a55555a aba aca'), ['aa', 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a']) 
    })
});

describe('task21', function () {
    it("Дана строка 'avb a1b a2b a3b a4b a5b abb acb'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.", function () {
        assert.deepEqual(task21('avb a1b a2b a3b a4b a5b abb acb'), ['avb', 'abb', 'acb']) 
    })
});

describe('task22', function () {
    it("Дана строка 'ave a#b a2b a$b a4b a5b a-b acb'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.", function () {
        assert.deepEqual(task22('ave a#b a2b a$b a4b a5b a-b acb'), ['a#b', 'a$b', 'a-b']) 
    })
});

describe('task23', function () {
    it("Дана строка 'ave a#a a2a a$a a4a a5a a-a aca'. Напишите регулярку, которая заменит все пробелы на '!'.", function () {
        assert.deepEqual(task23('ave a#a a2a a$a a4a a5a a-a aca'), 'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca') 
    })
});

//////////////////////////////////////////////////////////////

describe('task24', function () {
    it("Дана строка 'aba aea aca aza axa'. Напишите регулярку, которая найдет строки aba, aea, axa, не затронув остальных.", function () {
        assert.deepEqual(task24('aba aea aca aza axa'), ['aba', 'aea', 'axa']) 
    })
});

describe('task25', function () {
    it("Дана строка 'aba aea aca aza axa a.a a+a a*a'. Напишите регулярку, которая найдет строки aba, a.a, a+a, a*a, не затронув остальных.", function () {
        assert.deepEqual(task25('aba aea aca aza axa a.a a+a a*a'), ['aba', 'a.a', 'a+a', 'a*a']) 
    })
});

describe('task26', function () {
    it("Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - цифра от 3-х до 7-ми.", function () {
        assert.deepEqual(task26('aba a1a a3a a5a a7a a9a aa a*a'), ['a3a', 'a5a', 'a7a']) 
    })
});

describe('task27', function () {
    it("Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до g.", function () {
        assert.deepEqual(task27('aba ada a3a a5a aga aha aka a*a'), ['aba', 'ada', 'aga']) 
    })
});

describe('task28', function () {
    it("Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.", function () {
        assert.deepEqual(task28('aba ada aya a5a aga aha aka a*a'), ['aba', 'ada', 'aya', 'aka']) 
    })
});

describe('task29', function () {
    it("Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - буква от a до f и от A до Z.", function () {
        assert.deepEqual(task29('aba ada aya a5a aGa aha aKa a*a'), ['aba', 'ada', 'aGa', 'aKa']) 
    })
});

describe('task30', function () {
    it("Дана строка 'aba aea aca aza axa a-a a#a'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - не 'e' и не 'x'.", function () {
        assert.deepEqual(task30('aba aea aca aza axa a-a a#a'), ['aba', 'aca', 'aza', 'a-a', 'a#a']) 
    })
});

describe('task31', function () {
    it("Дана строка 'wйw wяw wёw wqw'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'w', а между ними - буква кириллицы.", function () {
        assert.deepEqual(task31('wйw wяw wёw wqw'), ['wйw', 'wяw', 'wёw']) 
    })
});

//////////////////////////////////////////////////////////////

describe('task32', function () {
    it("Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных.", function () {
        assert.deepEqual(task32('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza']) 
    })
});

describe('task33', function () {
    it("Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.", function () {
        assert.deepEqual(task33('aAXa aeffa aGha aza ax23a a3sSa'), ['aAXa', 'aeffa', 'aGha', 'aza']) 
    })
});

describe('task34', function () {
    it("Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.", function () {
        assert.deepEqual(task34('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza', 'ax23a'])
    })
});

describe('task35', function () {
    it("Дана строка 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'. Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.", function () {
        assert.deepEqual(task35('ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'), ['ааа', 'ббб', 'ёёё', 'ззз', 'ййй', 'ААА', 'БББ', 'ЁЁЁ', 'ЗЗЗ', 'ЙЙЙ'])
    })
});

//////////////////////////////////////////////////////////////

describe('task36', function () {
    it("Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит первое 'aaa' на '!'.", function () {
        assert.deepEqual(task36('aaa aaa aaa'), '! aaa aaa')
    })
});

describe('task37', function () {
    it("Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит последнее 'aaa' на '!'.", function () {
        assert.deepEqual(task37('aaa aaa aaa'), 'aaa aaa !')
    })
});

//////////////////////////////////////////////////////////////

describe('task38', function () {
    it("Дана строка 'aeeea aeea aea axa axxa axxxa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз.", function () {
        assert.deepEqual(task38('aeeea aeea aea axa axxa axxxa'), ['aeeea', 'aeea', 'aea', 'axa', 'axxa', 'axxxa']) 
    })
});

describe('task39', function () {
    it("Дана строка 'aeeea aeea aea axa axxa axxxa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.", function () {
        assert.deepEqual(task39('aeeea aeea aea axa axxa axxxa'), ['aeea', 'axa', 'axxa', 'axxxa']) 
    })
});

//////////////////////////////////////////////////////////////

describe('task40', function () {
    it("Дана строка 'a\\a abc'. Напишите регулярку, которая заменит строку 'a\a' на '!'.", function () {
        assert.deepEqual(task40('a\\a abc'), '! abc') 
    })
});

describe('task41', function () {
    it("Дана строка 'a\\a a\\\\a a\\\\\\a'. Напишите регулярку, которая заменит строку 'a\\\\\\a' на '!'.", function () {
        assert.deepEqual(task41('a\\a a\\\\a a\\\\\\a'), 'a\\a a\\\\a !') 
    })
});

//////////////////////////////////////////////////////////////

describe('task42', function () {
    it("Дана строка 'bbb /aaa\\ bbb /ccc\\'. Напишите регулярку, которая найдет содержимое всех конструкций /...\\ и заменит их на '!'.", function () {
        assert.deepEqual(task42('bbb /aaa\\ bbb /ccc\\'), 'bbb ! bbb !') 
    })
});

//////////////////////////////////////////////////////////////

describe('task43', function () {
    it("Дана строка 'aaa@bbb eee7@kkk'. Напишите регулярку, которая найдет строки по шаблону: любое количество букв и цифр, символ @, любое количество букв и цифр и поменяет местами то, что стоит до @ на то, что стоит после нее. Например, aaa@bbb должно превратиться в bbb@aaa.", function () {
        assert.deepEqual(task43('aaa@bbb eee7@kkk'), 'bbb@aaa kkk@eee7') 
    })
});

describe('task44', function () {
    it("Дана строка вида 'a1b2c3'. Напишите регулярку, которая найдет все цифры и удвоит их количество таким образом: 'a11b22c33' (то есть рядом с каждой цифрой напишет такую же).", function () {
        assert.deepEqual(task44('a1b2c3'), 'a11b22c33') 
    })
});

//////////////////////////////////////////////////////////////

describe('task45', function () {
    it("С помощью метода test определите, что переданная строка 'mymail@mail.ru' является емэйлом.", function () {
        assert.equal(task45('mymail@mail.ru'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'my.mail@mail.ru' является емэйлом.", function () {
        assert.equal(task45('my.mail@mail.ru'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'my-mail@mail.ru' является емэйлом.", function () {
        assert.equal(task45('my-mail@mail.ru'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'my_mail@mail.ru' является емэйлом.", function () {
        assert.equal(task45('my_mail@mail.ru'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'mail@mail.com' является емэйлом.", function () {
        assert.equal(task45('mail@mail.com'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'mail@mail.by' является емэйлом.", function () {
        assert.equal(task45('mail@mail.by'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'mail@yandex.ru' является емэйлом.", function () {
        assert.equal(task45('mail@yandex.ru'), true) 
    })
});

describe('task46', function () {
    it("Дана строка с текстом, в котором могут быть емейлы. С помощью match найдите все емэйлы в виде массива.", function () {
        assert.deepEqual(task46('Emails can be such as: mail@mail.com, or mail@yandex.ru'), ['mail@mail.com', 'mail@yandex.ru']) 
    })
});

describe('task47', function () {
    it("С помощью метода test определите, что переданная строка 'site.ru' является доменом.", function () {
        assert.equal(task47('site.ru'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'site.com' является доменом.", function () {
        assert.equal(task47('site.com'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'my-site.com' является доменом.", function () {
        assert.equal(task47('my-site.com'), true) 
    })
});

describe('task48', function () {
    it("С помощью метода test определите, что переданная строка 'http://site.ru' является доменом.", function () {
        assert.equal(task48('http://site.ru'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'http://site.com' является доменом.", function () {
        assert.equal(task48('http://site.com'), true) 
    })
});

describe('task49', function () {
    it("С помощью метода test определите, что переданная строка 'http://site.ru' является доменом.", function () {
        assert.equal(task49('http://site.ru'), true) 
    })
    it("С помощью метода test определите, что переданная строка 'https://site.ru' является доменом.", function () {
        assert.equal(task49('https://site.ru'), true) 
    })
});

describe('task50', function () {
    it("С помощью test определите, что переданная строка начинается с http или с https", function () {
        assert.equal(task50('http://site.ru is my personal webpage.'), true) 
    })
    it("С помощью test определите, что переданная строка начинается с http или с https", function () {
        assert.equal(task50('https://site.ru is my personal webpage.'), true) 
    })
});

describe('task51', function () {
    it("С помощью test определите, что переданная строка заканчивается расширением txt, html или php.", function () {
        assert.equal(task51('You can find this in file C:/Users/Admin/Documents/myFile.txt'), true) 
    })
    it("С помощью test определите, что переданная строка заканчивается расширением txt, html или php.", function () {
        assert.equal(task51('You can find this in file C:/Users/Admin/Documents/myFile.html'), true) 
    })
    it("С помощью test определите, что переданная строка заканчивается расширением txt, html или php.", function () {
        assert.equal(task51('You can find this in file C:/Users/Admin/Documents/myFile.php'), true) 
    })
});

describe('task52', function () {
    it("С помощью test определите, что переданная строка заканчивается расширением jpg или jpeg.", function () {
        assert.equal(task52('You can find this in image C:/Users/Admin/Documents/myFile.jpg'), true) 
    })
    it("С помощью test определите, что переданная строка заканчивается расширением jpg или jpeg.", function () {
        assert.equal(task52('You can find this in image C:/Users/Admin/Documents/myFile.jpeg'), true) 
    })
});

describe('task53', function () {
    it("С помощью test узнайте является ли строка числом, длиной до 12 цифр", function () {
        assert.equal(task53('12345678'), true) 
    })
    it("С помощью test узнайте является ли строка числом, длиной до 12 цифр", function () {
        assert.equal(task53('1200100100101'), false) 
    })
    it("С помощью test узнайте является ли строка числом, длиной до 12 цифр", function () {
        assert.equal(task53('12e3'), false) 
    })

});

describe('task54', function () {
    it("Дана строка с буквами, пробелами и цифрами. Найдите сумму всех чисел из данной строки.", function () {
        assert.deepEqual(task54('a1a a22a a333a a4444a aba aca'), 4800) 
    })
});

//////////////////////////////////////////////////////////////

describe('task55', function () {
    it('С помощью replace замените в строке домены вида http://site.ru, http://site.com на <a href="http://site.ru">site.ru</a>.', function () {
        assert.deepEqual(task55('http://site.ru, http://site.com'), '<a href="http://site.ru">site.ru</a>, <a href="http://site.com">site.com</a>') 
    })
});

describe('task56', function () {
    it('С помощью replace замените все повторяющиеся пробелы на один.', function () {
        assert.deepEqual(task56('Замените все  повторяющиеся пробелы  на  один.'), 'Замените все повторяющиеся пробелы на один.') 
    })
});

describe('task57', function () {
    it('Найдите и удалите все комментарии CSS.', function () {
        assert.deepEqual(task57('.round{ -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; /* future proofing */-khtml-border-radius: 10px; /* for old Konqueror browsers */'), '.round{ -moz-border-radius: 10px; -webkit-border-radius: 10px; border-radius: 10px; -khtml-border-radius: 10px; ') 
    })
});

describe('task58', function () {
    it('Найдите и удалите все комментарии HTML.', function () {
        assert.deepEqual(task58('<!--This is a comment--><a href="http://site.ru">site.ru</a><!--This is another comment-->'), '<a href="http://site.ru">site.ru</a>') 
    })
});

//////////////////////////////////////////////////////////////

describe('task59', function () {
    it('найдите все строки по шаблону 3 буквы a, затем буква b и поменяйте 3 буквы a на знак "!"', function () {
        assert.deepEqual(task59('aaab aaat aaac aaab aaaw'), '!b aaat aaac !b aaaw') 
    })
});

describe('task60', function () {
    it('найдите все строки по шаблону 3 буквы a, затем любая буква, но не b и поменяйте 3 буквы a на знак "!"', function () {
        assert.deepEqual(task60('aaab aaat aaac aaab aaaw'), 'aaab !t !c aaab !w') 
    })
});

//////////////////////////////////////////////////////////////

describe('task61', function () {
    it('Дана строка с целыми числами. С помощью регулярки преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты.', function () {
        assert.deepEqual(task61('1 22 3 14'), '1 484 9 196') 
    })
});

describe('task62', function () {
    it("Дана строка с целыми числами. Найдите числа, стоящие в кавычках и увеличьте их в два раза. Пример: из строки 2aaa'3'bbb'4' сделаем строку 2aaa'6'bbb'8'.", function () {
        assert.deepEqual(task62("2aaa'3'bbb'4'"), "2aaa'6'bbb'8'") 
    })
});

describe('task63', function () {
    it("Дана строка в которой есть вставки {{текст}}. Найдите все такие вставки и поменяйте в них порядок букв на обратный", function () {
        assert.deepEqual(task63("sa{{word}}aa gg{{word}} {{word}}"), "sa{{drow}}aa gg{{drow}} {{drow}}") 
    })
});

describe('task64', function () {
    it("Дана строка '23 + 35 ='. Числа могут быть любыми. Выведите на экран результат операции в виде 23 + 35 = 58", function () {
        assert.deepEqual(task64("23 + 35 ="), "23 + 35 = 58") 
    })
});

//////////////////////////////////////////////////////////////

describe('task65', function () {
    it("Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.", function () {
        assert.equal(task65('2000'), true) 
    })
    it("Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.", function () {
        assert.equal(task65('1800'), false) 
    })
    it("Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.", function () {
        assert.equal(task65('2134'), false) 
    })
});

describe('task66', function () {
    it("С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.", function () {
        assert.equal(task66('12:59'), true) 
    })
    it("С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.", function () {
        assert.equal(task66('00:00'), true) 
    })
    it("С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.", function () {
        assert.equal(task66('25:00'), false) 
    })
    it("С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.", function () {
        assert.equal(task66('12:60'), false) 
    })
});

describe('task67', function () {
    it("С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.", function () {
        assert.equal(task67('9.59 am'), true) 
    })
    it("С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.", function () {
        assert.equal(task67('12.30 pm'), true) 
    })
    it("С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.", function () {
        assert.equal(task67('00.00 am'), false) 
    })
    it("С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.", function () {
        assert.equal(task67('13.00 pm'), false) 
    })
});

describe('task68', function () {
    it("Удалите одной регуляркой все слова из предложения, содержащие две одинаковые следующие друг за другом буквы.", function () {
        assert.deepEqual(task68("Henry is chilling and he can loose a wheel in the pool."), "Henry is  and he can  a  in the .") 
    })
});

describe('task69', function () {
    it("Удалите одной регуляркой все повторяющиеся слова из строки, например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.", function () {
        assert.deepEqual(task69("dsf xxx xxx sd"), "dsf xxx sd") 
    })
});

describe('task70', function () {
    it("Решите предыдущую задачу с учетом того, что слово может повторяться много раз. Например 'dsf xxx xxx xxx xxx xxx sd' должно вернуть 'dsf xxx sd'.", function () {
        assert.deepEqual(task70("dsf xxx xxx xxx xxx xxx sd"), "dsf xxx sd") 
    })
});
