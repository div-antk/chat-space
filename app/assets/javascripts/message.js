$(function(){
  // function buildMessage(post){
  //   var html =`<div class='message'>
  //                 <div class='upper-message'>
  //                   <div class='upper-message__user-name'>
  //                     ${message.user.name}
  //                   </div>
  //                   <div class='upper-message__date'>
  //                     ${message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')}
  //                   </div>
  //                 </div>
  //                 <div class='lower-message'>
  //                   ${if message.content.present?}
  //                   <p class='lower-message__content'>
  //                     ${message.content}</p>
  //                     ${image_tag message.image.url, class: 'lower-message__image' if message.image.present?}
  //                 </div>
  //               </div>`
  //   return html;
  // };
  
  $('#new_message').on('form__submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: json,
      processData: false,
      contenTyple: false,
    })
    .done(function(message){
      console.log(message.content);
      var html = buildMessage(message);
      $('')
    })
    
  })
});