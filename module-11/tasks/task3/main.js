/*
  Написать функцию get, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить форму состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
  Name Score
  имя  кол-во очков 
  имя  кол-во очков 
*/

const getBtn = document.querySelector("#js-get");
const result = document.querySelector(".result");
const htmlTpl = document.querySelector("#templ").textContent.trim();
const compiled = _.template(htmlTpl);

getBtn.addEventListener("click", get);

/*
  @param {FormEvent} evt
*/
function get(evt) {
  evt.preventDefault();
    
    fetch("http://fecore.net.ua/rest/", {
        method: 'get'
    })
    
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
        let htmlString = "<h1>Name Score</h1>";
        data.forEach(item => {
            htmlString += compiled(item);
        });
        result.innerHTML = htmlString; 
    })
    .catch(err => {
      console.error("Error: ", err);
    });
}
