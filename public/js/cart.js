$(document).ready(function () {
    var toalprice=0;
    var fakeprice=0;
    var comm_idList=[];
    var selectbox=[];
    $.ajax({
        type:'get',
        url:'/get/usercart',
        success:function(data){
            if(data.length>=1){
                data.forEach(element => {
                toalprice+=element.price
                fakeprice+=element.fakeprice
                comm_idList.push({ comm_id:element.comm_id,cart_id:element.id } )  
            });
            $("<div class='col-7 m-auto p-2' id='itemsum'>合计 &nbsp已选"+data.length+"件</div>").replaceAll("#itemsum");
            $("<span class='mdfont timeround' id='itemtotal'>"+toalprice+"</span>").replaceAll("#itemtotal");
            $("<span class='smfont' id='itemtotal2'>"+toalprice+"</span>").replaceAll("#itemtotal2");
            $("<span id='itemfakezk'>,立减￥"+(fakeprice-toalprice)+"</span>").replaceAll("#itemfakezk");
            }
        }
    })


                $("[name=delitem]").click(function () {
                    var ID=$(this).parent().parent().children(1).children(1)[0].id
                    $.ajax({
                        type: 'get',
                        url: '/get/delcart',
                        data:{
                            "cart_id":comm_idList[ID].cart_id,
                            "comm_id":comm_idList[ID].comm_id
                        },
                        success:function (data) {
                            if(data=="OK")
                            window.location.href="/cart";
                        },
                        error:function (data) {
                        }
                    })
                })
            

    $("#SelAll").click(function () {

        if ($(this).prop("checked")){
            $("[name=procheckbox]").attr("checked", true)
        }else {
            $("[name=procheckbox]").attr("checked", false)
        }
    })
    $("#buyitem").click(function () {
        console.log($("[name=procheckbox]:checked"))
        if ($("[name=procheckbox]:checked").length==0){
            alert("请先选中商品")
        }else {
            var box=$("[name=procheckbox]:checked")
            for(var i=0;$("[name=procheckbox]:checked").length>i;i++){ 
                selectbox.push(comm_idList[$("[name=procheckbox]:checked")[i].id])
            }
            selectbox.forEach(element => {
                $.ajax({
                    type:'get',
                    url:'/get/irtlogs',
                    data:{
                        comm_id:element.comm_id,
                        cart_id:element.cart_id
                    },
                    success:function (data) {
                        
                    }
                })
                $.ajax({
                    type: 'get',
                    url: '/get/delcart',
                    data:{
                        "cart_id":element.cart_id,
                        "comm_id":element.comm_id
                    },
                    success:function (data) {
                    },
                    error:function (data) {
                    }
                })
            });
            window.location.href="/userinfo?model=mydd";
            
        }



    })
})