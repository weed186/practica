//валидация(универсальная)
function validate(form){

  function removeError(input){
    const parent = input.parentNode;
    
    if(parent.classList.contains('error')){
      parent.querySelector('.error-label').remove()
      parent.classList.remove('error')
    }
  }


  function createError(input, text){
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')

    errorLabel.textContent = text;
    parent.append(errorLabel);
    parent.classList.add('error');
  }


  /*let result = true;
  const allInputs = form.querySelectorAll('input');
  for (const input of allInputs) {
тоже самое что и forEach
  }
  */

  let result = true;

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {

    removeError(input)

    if(input.value === '') {

    createError(input,'Поле не заполнено');

    result = false; 
  }

  }

//forEach - запускает форму столько раз сколько инпутов будет найдено
  return result;
}


document.getElementById('add-form').addEventListener('submit', function(event) {
  event.preventDefault();//отмена перезагрузки страницы
  if(validate(this)===true){
    window.location.href='pole.html'
    alert('Форма проверена')
  }//отправка формы
  
})