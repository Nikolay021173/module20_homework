const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const but = document.querySelector('.button');
const result = document.querySelector('.result');

but.addEventListener('click', () => {
    const res = Number(inp1.value) + Number(inp2.value);
    result.innerHTML = res;
});

    /*Ниже, в качестве примера, приведено нарушение принципа YAGNI в js-файле,
      т.к. в тех. задании, прведённом в комментарии файла index.html не было сказано 
      создать ещё 1 кнопку, которая бы очищала поля ввода-вывода (лишний функционал программы)*/


const but1 = document.querySelector('.button1');
but1.addEventListener('click', () => {
    inp1.value = '';
    inp2.value = '';
    result.innerHTML = '';
});
