$(document).ready(function(){
    $("form").submit(function(event) {event.preventDefault()})//取消submit的默认行为
    $("form input[type='submit']").click(function(){
        var url = $('form').attr('action'); // 取Form中要提交的链接
        var param = {}; // 组装发送参数
        param['name']  = $('form input[name=name]').val();
        param['age'] = $('form input[name=age]').val();
      $.get(url, param, function(dom) { $('div.get').append(dom) }) ;  // 发送并显示返回内容
    });
})