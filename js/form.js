$(document).ready(function(){
        callbackform();
    });
// Скрипт, вызывающий модальное окно после загрузки страницы 
    function callback() {
        $("#myModalBox").modal('show');
      }



function callbackform(){
$('#send-form').submit(function(e) {
  //отменяем стандартное действие при отправке формы
  e.preventDefault();
  //берем из формы метод передачи данных
  var m_method = $(this).attr('method');
  //получаем адрес скрипта на сервере, куда нужно отправить форму
  var m_action = $(this).attr('action');
  //получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
  //то есть в стандартном формате передачи данных формы
  var m_data = $(this).serialize();
  $.ajax({
    type: m_method,
    url: m_action,
    data: m_data,
    success: function() { //сообщение об удачной отправке
      jQuery('#send-form').html("<div id='message'></div>");
      jQuery('#message').html("<h2>Сообщение отправлено!</h2>")
        .append("<p>Скоро мы с вами свяжемся.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<i class=\"icon-ok\"></i>");
        })},
      error:function() { //сообщение об удачной отправке
      jQuery('#send-form').html("<div id='message'></div>");
      jQuery('#message').html("<h2>Сообщение не может быть отправлено!</h2>")
        .append("<p>Приносим извинения за предоставленные неудобства.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<i class=\"icon-ok\"></i>");
        });
    }
  });
}
)}