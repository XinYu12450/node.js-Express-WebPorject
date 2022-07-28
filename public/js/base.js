$(document).ready(function(){
    var username;
    $.ajax({
        type:'get',
        url:'/get/userinfo',
        success:function (data) {
            console.log(data)
            username=data.username
        }
    })
    if (username!=null){
        $("#gologin").remove();
        $("#goregister").remove();
        $("#navlist").prepend("<li class='nav-item hideplr text-center mt-1' id='usernav'>" +
            "<img src='img/head.jpg' class='headimg m-auto ' style='height: 32px;'/>" +
            "<div class='dropdown float-right'>" +
            "<button class='btn btn-default dropdown-toggle usernamenav' type='button' id='dropdownMenu1' data-toggle='dropdown' style='color: white'>\n" +
            "  "+username+" </button>" +
            " <ul class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1' style='color: black;'>" +
            " <li role='presentation'><a role='menuitem' tabindex='-1' href='/userinfo?model=mydd' style='color: black;' id='mydd'>我的订单</a></li>" +
            "   <li role='presentation'><a role='menuitem' tabindex='-1' href='/userinfo?model=myzc' style='color: black;' id='myzc'>我的资产</a></li>" +
            "   <li role='presentation'><a role='menuitem' tabindex='-1' href='/userinfo?model=mysc' style='color: black;' id='mysc'>我的收藏</a></li>" +
            " <li role='presentation'><a role='menuitem' tabindex='-1' href='/userinfo?model=mydz' style='color: black;' id='mydz'>地址管理</a></li>" +
            "  <li role='presentation' ><a role='menuitem' tabindex='-1' href='/' style='color: black;' id='quitlogin'>退出登录</a></li>" +
            " </ul> \n" +
            "</div>\n" +
            "</li>"); 
    }

    $(".dropdown").mouseenter(function(){
          $(".dropdown-toggle").dropdown('toggle')
    });
    $(".dropdown").mouseleave(function(){
        $(".dropdown-toggle").dropdown('toggle')
    });
    $("#quitlogin").click(function () {
        $.ajax({
            type:'get',
            url:'/get/quit'
        })
    })
    $("#searchbtn").click(function (data) {
        var searchParams=$("#searchinput").val();
        window.location.href="/search?itemname="+searchParams;
    })

});
