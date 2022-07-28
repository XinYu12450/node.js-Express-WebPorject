$(document).ready(function () {
    $("#registerbtn").click(function () {
        $.ajax({
            type:'get',
            url:'/get/registeruser',
            data:{
                "logname":$("#userlogname").val(),
                "logpwd":$("#userpwd").val(),
                "address":$("#address").val(),
                "telphone":$("#telphone").val(),
                "zipcode":$("#zipcode").val()
            },
            success:function (data) {
                if (data!='OK'){
                    alert("账号已存在!请选择其他用户名")
                }else {
                    window.location.href="/login"
                }

            }
        })
    })
})