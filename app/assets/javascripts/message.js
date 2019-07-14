$(function(){
  function buildHTML(message){

    var imgHTML = message.image.url ? `<image class="lower-message__image" src="${message.image.url}">` : "" ;

    var html =`
                <div class='message' data-message-id="${message.id}">
                  <div class='upper-message'>
                    <div class='upper-message__user-name'>
                      ${message.user_name}
                    </div>
                    <div class='upper-message__date'>
                      ${message.created_at}
                    </div>
                  </div>
                  <div class='lower-message'>
                    <p class='lower-message__content'>
                      ${message.content}
                    </p>
                    ${imgHTML}
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.new_message')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
    .fail(function(){
      alert('エラー');
      $('.form__submit').prop('disabled', false);
    })
  });

  function reloadMessages(){
    var url = window.location.href;

    if (url.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("message-id")
      
      $.ajax({
        url: 'api/messages',
        type: 'get',
        dataType: 'json',
        data: {last_id: last_message_id}
      })

      .done(function(messages) {
        console.log("ダンをとっている");
        console.log(last_message_id);
        var insertHTML = '';

        messages.forEach(function(message) {
          insertHTML = buildHTML(message);
          $('.messages').append(insertHTML);
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })

      .fail(function () {
        alert('自動更新できない');
      });
    }
  };
  setInterval(reloadMessages, 3000);
});