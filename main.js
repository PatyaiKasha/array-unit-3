// #1. Напишите функцию для вывода элементов
// массива в элемент <p id=”new”></p>.

var newMas1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
    var in21 = document.getElementById('inOne').value; // mass index
    var in22 = document.getElementById('inTwo').value; // mass value
    newMas1[in21] = in22;

    var out = '';
    if (in21 != '' && in22 != '') {
        for (var i = 0; i < newMas1.length; i++) {
            out += i + ') ' + newMas1[i] + '<br>';
            document.getElementById('out2').innerHTML = out + '<hr>';
        }
        console.log(newMas1);
    }
}

// 3. Добавьте кнопку pop реализующую метод pop()
// для введенного выше массива.
// Метод pop() - удаляет с конца массива


var btn3 = document.getElementById('btn3').onclick = masOut3;

function masOut3() {
    if (newMas1.length > 1) {
        newMas1.pop();
        console.log(newMas1);
        var out = '';
        for (var i = 0; i < newMas1.length; i++) {
            out += i + ') ' + newMas1[i] + '<br>';
            document.getElementById('out2').innerHTML = out + '<hr>';
        }
    } else {
        document.getElementById('out2').remove();
        console.log(document.getElementById('out2'));
        if (document.getElementById('out2') == null) {
            location.reload();
            // alert('Больше нечего удалять !');
        }
    }
}



// 4. Добавьте кнопку shift реализующую метод shift()
// для введенного выше массива.
// Метод shift() - удаляет с начала массива

var btn4 = document.getElementById('btn4').onclick = masOut4;

function masOut4() {
    if (newMas1.length > 1) {
        newMas1.shift();
        console.log(newMas1);
        var out = '';
        for (var i = 0; i < newMas1.length; i++) {
            out += i + ') ' + newMas1[i] + '<br>';
            document.getElementById('out2').innerHTML = out + '<hr>';
        }
    } else {
        document.getElementById('out2').remove();
        console.log(document.getElementById('out2'));
        if (document.getElementById('out2') == null) {
            location.reload();
            // alert('Больше нечего удалять !');
        }
    }
}

// function masOut4() {
//     if (newMas1.length > 1) {
//         newMas1.shift();
//         console.log(newMas1);
//         var out = '';
//         for (var i = 0; i < newMas1.length; i++) {
//             out += i + ') ' + newMas1[i] + '<br>';
//             document.getElementById('out2').innerHTML = out + '<hr>';
//         }
//     } else if (newMas1.length == 1) {
//         document.getElementById('out2').remove();
//         console.log(document.getElementById('out2'));
//     }
// }




// 5. Добавьте кнопку push реализующую метод push()
// для введенного выше массива. Данные для записи
// необходимо считывать из input.
// Метод push() - добавляет элемент в конец массива

var btn5 = document.getElementById('btn5').onclick = masOut5;

function masOut5() {
    var in21 = document.getElementById('inOne').value; // mass index
    var in22 = document.getElementById('inTwo').value; // mass value

    newMas1.push(in22);

    var out = '';
    for (var i = 0; i < newMas1.length; i++) {
        out += i + ') ' + newMas1[i] + '<br>';
        document.getElementById('out2').innerHTML = out + '<hr>';
    }
    console.log(newMas1);
}
// 6. Добавьте кнопку unshift реализующую метод unshift()
//  для введенного выше массива. Данные для записи необходимо считывать из input.
// Метод unshift() - добавляет элемент в начало массива

var btn6 = document.getElementById('btn6').onclick = masOut6;

function masOut6() {
    var in21 = document.getElementById('inOne').value; // mass index
    var in22 = document.getElementById('inTwo').value; // mass value

    newMas1.unshift(in22);

    var out = '';
    for (var i = 0; i < newMas1.length; i++) {
        out += i + ') ' + newMas1[i] + '<br>';
        document.getElementById('out2').innerHTML = out + '<hr>';
    }
    console.log(newMas1);
}