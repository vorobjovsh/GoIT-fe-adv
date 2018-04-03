/*
 Заполнение TYPABLE AREA текстом для набора
 */
export default function fillTypableChars(arr, str) {
  Array.from(arr, function (elem, i) {
    return elem.textContent = str[i];
  });
}
