$(document).ready(function () {
    var userinfo;
    var comm_id=$("#iteminfoid").html();
    
    $.ajax(({
        type:'get',
        url:'/get/userinfo',
        success:function(data){
            userinfo=data;
        }
    }))
    $("#getincart").click(function () {
        if (userinfo.id!=null){
            $.ajax({
                type:'get',
                url:'/get/irtpro',
                data:{
                        "comm_id":comm_id
                    },
                success:function (data) {
                    if (data.core==1){
                        alert("已放入购物车")
                        window.location.href="/userinfo?model=mydd";
                    }else {
                        console.log("?")
                    }
                }
            })
        }else {
            alert("请先登录！")
        }
    });
    $("#getinbuy").click(function () {
        if (userinfo.id!=null){
            $.ajax({
                type:'get',
                url:'/get/irtlogs',
                data:{
                    "commid":comm_id
                },
                success:function (data) {
                    if (data=="OK"){
                        alert("已放入订单")
                    }else {
                        console.log("?")
                    }
                }
            })
                }else {
                    alert("请先登录！")
                }

            })
    
})