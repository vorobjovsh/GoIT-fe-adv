/*
  Заполнение клавиатруы символами выбранного языка
 */

export default function setKeyboardLetters(language, buttons) {
    for (var i = 0, limit = buttons.length; i < limit; i = i + 1) {
        buttons[i].textContent = language[i];
    }
}
