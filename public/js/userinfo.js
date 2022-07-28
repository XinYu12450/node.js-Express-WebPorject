$(document).ready(function () {
    var model="#"+getUrlParameter("model");
    var userinfonow,userinfo,userlogs;
    var infotate=0;
    whoshow(model+"main")
    $.ajax({
        type:'get',
        url:'/get/userinfo',
        success:function(data){
            userinfo=data;
            $("<title>"+userinfo.itname+"的个人页面</title>").replaceAll("title")
            $("<div id='username2' class='mt-2'>"+userinfo.itname+"</div>").replaceAll("#username2")
        }
    })
    $(model+"li").addClass("infoChecked")

        $.ajax({
            type:'get',
            url:'/get/logsinfo',
            success:function (data) {
                userlogs=data
                proinit(data,'nsh')
            }
        })
    

    $("#probtnlist").children().click(function () {
        $("#probtnlist").children().removeClass("cartCheck");
        $(this).addClass("cartCheck");
        var model=(this.id).substring(3);
        $("#useritemgroup").empty()
        proinit(userlogs,model)
    })
    $("#mylistgt").children().click(function () {
        $(this).parent().children().removeClass("infoChecked");
        $(this).addClass("infoChecked");
    })
    $("#myddli").click(function () {
        whoshow("#myddmain")
        $("#myzcmain").hide();
        $("#myscmain").hide();
        $("#mydzmain").hide();
    })
    $("#myzcli").click(function () {
        whoshow("#myzcmain")
        $("#myddmain").hide();
        $("#myscmain").hide();
        $("#mydzmain").hide();
    })
    $("#myscli").click(function () {
        whoshow("#myscmain")
        $("#myzcmain").hide();
        $("#myddmain").hide();
        $("#mydzmain").hide();
    })
    $("#mydzli").click(function () {
        whoshow("#mydzmain")
        $("#myzcmain").hide();
        $("#myscmain").hide();
        $("#myddmain").hide();
    })
    function whoshow(thismodel) {
        $(thismodel).show();
    }


    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    function setDivCenter(divName){
        var top = ($(window).height() - $(divName).height())/2;
        var left = ($(window).width() - $(divName).width())/2;
        var scrollTop = $(document).scrollTop();
        var scrollLeft = $(document).scrollLeft();
        $(divName).css( { position : 'absolute', 'top' : top + scrollTop, left : left + scrollLeft } ).show();
    }

    $("#mydzgroup").empty();
    $.ajax({
        type:'get',
        url:'/get/userinfo',
        success:function (data) {
            if (data.address==null){
                $("#mydzgroup").append(
                    "<div class='col-4 pl-0 addressborder text-center ml-3 p-5' id='newaddress'>\n" +
                    "<img src='public/img/bootstrap-icons-1.7.1/plus.svg' class='justify-content-center mt-4'>\n" +
                    "<div>添加新地址</div>\n" +
                    "</div>"
                )
                $("#newaddress").click(function () {
                    setDivCenter("#newaddressbody")

                })

            }else {
                    var result=data;
                    $("#mydzgroup").append(
                        "<div class='col-4 pl-0 addressborder' id='"+result.id+"' name='useraddressbody'>\n" +
                        "<div class='CheckBTN d-inline-block pl-2 pr-2 mt-1 ml-1'>默认</div>\n" +
                        "<div class='mt-2 ml-3'>"+result.relname+"</div>\n" +
                        "<div class='mt-2 ml-3'>"+result.telphone+"</div>\n" +
                        "<div class='ml-3'>"+result.address+"</div>\n" +
                        "<div class='ml-3'>"+result.zipcode+"</div>\n" +
                        "</div>"
                    )
                $("[name='useraddressbody']").click(function () {
                    console.log($(this).id)
                    setDivCenter("#newaddressbody")
                            if (data<1){
                                alert("请求非法！")
                            }else {
                                var result=userinfo;
                                $('#usertelphone').val(result.telphone)
                                $('#userrelname').val(result.relname)
                                $('#useritname').val(result.itname)
                                $('#useraddress').val(result.address)
                                $('#zipcode').val(result.zipcode)
                                userinfonow=result.id;
                            }
                            infotate=1;
                            $("#userinfomsg").val("修改信息")
                            $("#registerbtn").attr({"id":"updatebtn","value":"修改"})
                            $("#updatebtn").click(function () {
                                if (infotate==1){
                                    $.ajax({
                                        type:'get',
                                        url:'/get/updinfo',
                                        data:{
                                            "telphone":$('#usertelphone').val(),
                                            "relname":$('#userrelname').val(),
                                            "itname":$('#useritname').val(),
                                            "address":$('#useraddress').val(),
                                            "zipcode":$('#zipcode').val()
                                        },
                                        success:function (data) {
                                            if (data!="OK"){
                                                alert("非法请求!")
                                            }else {
                                                alert("修改成功!")
                                                window.location.href="/userinfo?model=mydz"
                                            }
                                        }
                                    })
                                }

                            })

                })
            }
            $("#newaddress").click(function () {
                setDivCenter("#newaddressbody")

            })
        }
    })
    $("#registerbtn").click(function () {
        if (infotate==0){
            var infodata={
                "userid":Cookies.get('userid'),
                "telphone":$('#usertelphone').val(),
                "relname":$('#userrelname').val(),
                "itname":$('#useritname').val(),
                "address":$('#useraddress').val(),
                "zipcode":$('#zipcode').val()
            }
            $.ajax({
                type:'get',
                url:'/get/registerinfo',
                data:infodata,
                success:function (data) {
                    if (data!=0){
                        window.location.href="/userinfo?model=mydz";
                    }
                }
            })
        }



    })
    function proinit(data,model){
        $("#useritemgroup").empty()
        if (data.length!=0){
            for (var i=0;i<data.length;i++){
                var result=data[i];
                var itemstate=null;
                if (result.endtime==null && model=='nsd'){
                    itemstate="待送达"
                    prtpro(result,itemstate)
                }else if (result.endtime!=null && result.has_find==0 && model=='nsh'){
                    itemstate="待收货"
                    prtpro(result,itemstate)
                }else if(result.endtime!=null && result.has_find!=0 && model=='ysh'){
                    itemstate="已收货"
                    prtpro(result,itemstate)
                }else if(model=='all'){
                    if (result.endtime==null){
                        itemstate="待送达"
                        prtpro(result,itemstate)
                    }else if (result.has_find==0 && result.endtime!=null){
                        itemstate="待收货"
                        prtpro(result,itemstate)
                    }else{
                        itemstate="已收货"
                        prtpro(result,itemstate)
                    }
                }
                
                
            }
        }else {
            $("#useritemgroup").append(
                "<div class='text-center m-auto'>\n" +
                "<img class='mt-5 w-25 h-25' src='img/no-order.png'>\n" +
                "<div class='mt-3'>暂无商品记录！</div>\n" +
                "</div>"
            )
        }
    }
    function prtpro(result,itemstate){
        var exword;
        if(itemstate=="待收货"){
            exword="<button type='button' class='bg-white ml-2 pl-3 pr-3 border border-dark' name='upduserpro'>确认订单</button>\n"
        }else if(itemstate=="待送达"){
            exword=""
        }else{
            exword="<button class='bg-white ml-2 pl-3 pr-3 border border-dark' name='dellogitem'>删除订单</button>\n"
        }
        $("#useritemgroup").append(
            "<div class='cartItem border-bottom m-3' id='"+result.id+"'>\n" +
            "<div class='itemSp'>\n" +
            "<div class='float-left'>订单日期："+result.starttime+"</div>\n" +
            "<div class='float-right infoChecked'>"+itemstate+"</div>\n" +
            "<div class='clearfix'></div>\n" +
            "</div>\n" +
            "<div class='itemIf border-bottom pb-3'>\n" +
            "<div class='float-left'>\n" +
            "<img class='align-self-center float-left mt-3' src='/public/img/"+result.comm_id+"/"+((result.pri).split(';'))[0]+"' style='height: 120px;width: 120px'/>\n" +
            "<div class='float-left justify-content-center mt-5 ml-3'>\n" +
            "<div>"+result.name+"</div>\n" +
            "<div class='infoChecked'>￥"+result.price+"</div>\n" +
            "<div class='clearfix'></div>\n" +
            "</div>\n" +
            "</div>\n" +
            "<div class='float-right infoChecked mt-5'>X&nbsp1</div>\n" +
            "<div class='clearfix'></div>\n" +
            "</div>\n" +
            "<div class='itemMo mt-3 mb-3'>\n" +
            "<div class='float-right'>\n" +
            "<div>共<span>一</span>件商品, 订单总金额: <span class='infoChecked'>"+result.price+"</span>元</div>\n" +
            "<div class='mt-3 float-right' id='btninf'>\n" +
             exword+
            "<button type='button' class='bg-white ml-2 pl-3 pr-3 border border-dark' name='gologsinfo'>订单详情</button>\n" +
            "</div>\n" +
            "\n" +
            "</div>\n" +
            "<div class='clearfix'></div>\n" +
            "</div>\n" +
            "</div>"
        )
        $("[name='gologsinfo']").click(function () {
            var resultid=$(this).parent().parent().parent().parent()[0].id;
            window.location.href="/logsinfo?itemid="+resultid;
        })
        $("[name=upduserpro]").click(function () {
            var logsidWWW=$(this).parent().parent().parent().parent()[0];
            var logid=logsidWWW.id;
            var data2={
                "logsid":logid
            }
            console.log(data2);
            $.ajax({
                type:'get',
                url:"/get/proysh",
                data:data2,
                contentType: false,
                success:function (data) {
                    console.log(data2)
                    console.log(data)
                    window.location.href="/userinfo?model=mydd";
                },
                error:function (data) {
                    console.log(data)
                    console.log(data2)
                }
            })
            window.location.href="/userinfo?model=mydd";
        })
    }
})
