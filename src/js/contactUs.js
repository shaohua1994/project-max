;(function(){
  $('.mapIco').each(function(index,el){
    $(this).mouseover(function(){
      $(this).next().show();
    }).mouseout(function(){
      $(this).next().hide();
    })
  })

})()
