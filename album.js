$(document).ready(function() {
  $('#paste').on('click', function(){
    let url = $("#pic_url").val()
    if(/^http.+\.(jpg|jpeg|png|gif)$/.test(url)){
      $("#album").prepend(`<div class="picture col-4 p-1"><img class="w-100" src=${url} alt=""></div>`)
    }else{
      $('.pic-alert').show()
    }
    $("#pic_url").val("")
  })

  $('#album').on('click','.picture' ,function() {
    $(this).hide()
  })

  $('#alert-confirm').on('click', function(){
    $('.pic-alert').hide()
  })

})