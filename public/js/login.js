$(document).ready(function(){
    var userdata;
    $("#userlogin").click(function () {
        var username=$("#usernameinput").val();
        var userpwd=$("#userpwdinput").val();
        var data={
            "username":username,
            "userpwd":userpwd
        }

        $.ajax({
            type:'get',
            url:'/doLogin',
            data:data,
            success:function(data){
                console.log(data)
                //data=$.parseJSON(data);
                if (data.id!=-1){
                    alert("登录成功")
                    window.location.href="/";
                }else {
                    alert("账号不存在，或账号密码错误");
                }
                var userdata=data;
            },
            error:function (data,state) {
                console.log(data)
            }
        })
    })



});