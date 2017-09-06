// #1. Напишите функцию для вывода элементов
// массива в элемент <p id=”new”></p>.

var newMas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function masOut1() {
    var out = '';
    for (var i = 0; i < newMas1.length; i++) {
        out += i + 1 + ') ' + newMas1[i] + '<br>';
        document.getElementById('new1').innerHTML = out + '<hr>';
    }
}

masOut1();

// 2. Добавьте в предыдущую программу два
// элемента input, в которые можно ввести
// индекс массива и значение. По нажатию
// “ОК” - массив выводится.


var btn2 = document.getElementById('btn2').onclick = masOut2;

function masOut2() {
    var newMas2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var in21 = document.getElementById('inOne').value; // mass index
    var in22 = document.getElementById('inTwo').value; // mass value
    newMas2[in21] = in22;
    var out = '';
    for (var i = 0; i < newMas2.length; i++) {
        out += i + ') ' + newMas2[i] + '<br>';
        document.getElementById('out2').innerHTML = out + '<hr>';
    }
    console.log(newMas2);

    // 3. Добавьте кнопку pop реализующую метод pop()
    // для введенного выше массива.

    var btn3 = document.getElementById('btn3').onclick = innerMasOut2;

    function innerMasOut2() {
        newMas2.pop();
        console.log(newMas2);
        var out = '';
        for (var i = 0; i < newMas2.length; i++) {
            out += i + ') ' + newMas2[i] + '<br>';
            document.getElementById('out2').innerHTML = out + '<hr>';
        }
    }
    if (in21 < 0) { // и еще много всяких проверок ...
        alert('Индекс массива не может быть отрицательным числом');
    }
}