'use strict';

//1

console.log("Winter" || "Summer" && "Spring" || "Autumn");

// Результат Winter. Порядок действий. В начале выполняется сравнение "Summer" && "Spring". Обе true. 
// Значет под true возращается "Spring". В итоге мы получаем "Winter" || "Spring" || "Autumn" А тут все true, 
// поэтому возращается первый true

console.log(("Winter" || "Summer") && ("Spring" || "Autumn"));

// Результат "Spring". В начале выполняеется &&. Обе скобки true. Значит возращается "Spring" || "Autumn".
// В итоге возращается первый true из данного сравнения.

console.log(!"" && !505 && !!0 && !"Hello!");

// Ответ false. Строка выглядит false && false && false && false. Выполняется слева направо. Возращается первый false, и дальше проверку не проводит

console.log(!!(!"" && !505 && !!0 && !"Hello!"));

// Ответ false. Как и пример выше, только значение !! как двойное нет, то есть в начале ! делает значени true, второй ! делает обратно false

console.log("Как дела?" && (!505 && !!0) || "Hello!");

// Ответ "Hello!". В начале выполняется "Как дела?" && (!505 && !!0) который в итоге true && (false && false). Возращается false. 
// Дальше сравнение false || "Hello!". Возращается первый true. 

console.log((false || "Новая строка" && "" || 2023) && !(0 && 10 && "Еще одна строка"));

// Ответ true. Первое сравнение. false || "Новая строка" && "" || 2023 => false || false || 2023 => 2023.
// Второе !(0 && 10 && "Еще одна строка") => !(false && 10 && "Еще одна строка") => !(false) => true
// Третье сравнение 2023 && true. Оба true. Возращается последний

console.log(false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка");

// Ответ "Еще одна строка". Порядок действий false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка" =>
// false || false || 2023 && !0 && 10 && "Еще одна строка" => false || false || true && 10 && "Еще одна строка" =>
// false || false || 10 && "Еще одна строка" => false || false || "Еще одна строка". В консоле выводится первый true

/*

Написать процесс подсчета годовой премии:
2.1. функцию, которая принимает в себя массив зарплат сотрудника за год и возвращает среднее значение. Использовать 
для этого стрелочную функцию. Внутри функции должна быть базовая проверка, что мы передаем массив с числами, а не со строками 
или другими значениями, которые к числу никак не преобразовать.
2.2. функцию, созданную с помощью function declaration, которая принимает в себя полученное значение и подсчитывает премию для 
сотрудника, а затем возвращает это значение. Расчет может проводится по Вашему усмотрению, но обязательно, чтобы в функции были условия 
(если средняя зарплата меньше/больше какой-то цифры, алгоритм расчетом отличается - например, коэффициентом)
2.3. Вывести результат в консоль

*/

const arrPetrov = [50000, 60000, 45000, 50000, 48000, 50000, 60000, 45000, 50000, 48000];

function getAverageSalary(arr) {
    if (!arr || arr.length === 0) 
        return 0;

    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        if (typeof(arr[i]) !== 'number') 
            throw new Error(`${arr[i]} is not a number!`);
        
        sum += arr[i];
    }

    let avg = sum/arr.length;
    return avg;
}

function getYearBonus(avg) {
    let rate;
    if (avg >= 30000){
        rate = 2;
    } else {
        rate = 1.5;
    }
    return avg*rate;
}

let avg = getAverageSalary(arrPetrov);
let bonus = getYearBonus(avg);
console.log(bonus);


// Найти элемент с идентификатором main на html-странице и добавить в его начало заголовок третьего уровня. 

let newTag = document.createElement("h3")
let newSearchTag = document.getElementById('main');
let result = newSearchTag.appendChild(newTag);
console.log(result);

/*


Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.
*/

let links = document.getElementsByTagName('a');
let arrLinks = [];

for (let i = 0; i < links.length; i++) {
    let linksA = links[i].getAttribute('href');
    arrLinks[i] = linksA;
}

console.log(arrLinks);