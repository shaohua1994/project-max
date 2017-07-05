;(function(){
  $('.mapIco').each(function(index,el){
    $(el).mouseover(function(){
      $(el).next().show();
    }).mouseout(function(){
      $(el).next().hide();
    })
  })

})()
