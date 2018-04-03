/*
  Скрытие элементов без текста
 */

export default function hideTypeElements(arr, str) {
    Array.from(arr, function (elem, i) {
        if (i < str.length) {
            elem.classList.remove('hide');
            elem.textContent = str[i];
        } else {
            elem.classList.add('hide');
        }
        elem.classListadd = 'hide';
    });
}
