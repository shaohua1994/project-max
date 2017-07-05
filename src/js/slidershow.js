
$(function(){
      $.ajax({
          url:"../data/news.json",
          type:"GET",                                          
          datatype:"json",
          success:function(obj,status,xhr){
            console.log(obj.data);
            // 显示在节点上
            insertInfo(obj.data);
          
          },
          error:function(xhr,status,error){
      
    }
      });

       function insertInfo(array){
        for (var i = 0; i < array.length; i++) {
            var $msg = creat();
            $('#dnew').append($msg);
            //插入数据
            var info = array[i];
            $('#dnew li').eq(i).find('.dnew_title').html(info.title);
            $('#dnew li').eq(i).find('.dnew_time').text(info.time);

        }
      }
  function creat(){
      var str = "";
      str += '<li>';
      str += '<a class="dnew_title" href=""></a>';
      str += '<span class="dnew_time"></span>';
      str += '</li>';
      return $(str);
  }
  
})
 


