$(document).ready(function () {
    var logsid=getUrlParameter("itemid");
    console.log(logsid)
    $.ajax({
        type:'get',
        url:'/get/logsinfosg',
        data:{
            "logsid":logsid
        },
        success:function (data) {
            console.log(data)
            var result=data[0];
            var itemstate=null;
            var statenum=0;
            var backgroudcolor;
            if (result.endtime==null){
                itemstate="待送达"
                statenum=50
                backgroudcolor="bg-warning"
            }else if (result.has_find==0){
                itemstate="待收货"
                statenum=75
                backgroudcolor="bg-info"
            }else {
                itemstate="已收货"
                statenum=100
                backgroudcolor="bg-success"
            }
            $("#progress").empty();
            $("#progress").append("<div class='progress-bar progress-bar-striped progress-bar-animated "+backgroudcolor+"' role='progressbar' style='width: "+statenum+"%' aria-valuenow='"+statenum+"' aria-valuemin='0' aria-valuemax='100'>"+itemstate+"</div>")
            $("<span class='infoChecked' id='logstate'>"+itemstate+"</span>").replaceAll("#logstate");
            $("<div class='mb-1' id='logsnum'>订单编号:"+result.id+"</div>").replaceAll("#logsnum");
            $("<div class='mb-1' id='logstime'>订单日期:"+result.starttime+"</div>").replaceAll("#logstime");
            $("<div class='mb-1' id='logsprice'>订单金额:"+result.price+"</div>").replaceAll("#logsprice");
            if (statenum==50){
                $("<div class='float-left' id='wuliuxingxi'>&nbsp&nbsp您的快件已经发出请耐心等待，感谢您使用京东物流，期待再次为您服务。\n"+result.starttime+"</div>").replaceAll("#wuliuxingxi");
            }else if (statenum==75){
                $("<div class='float-left' id='wuliuxingxi'>&nbsp&nbsp您的快件已经到达配送区域，正在进行派送请耐心等待，感谢您使用京东物流，期待再次为您服务。\n"+result.starttime+"</div>").replaceAll("#wuliuxingxi");
            }else {
                $("<div class='float-left' id='wuliuxingxi'>&nbsp&nbsp您的快件已由其他（您所指定的地方）代收，感谢您使用京东物流，期待再次为您服务。\n"+result.endtime+"</div>").replaceAll("#wuliuxingxi");
            }
            $("#logsitem").empty()
            $("#logsitem").append(
                "<div class='itemSp'>\n" +
                "                    <div class='float-left'>订单日期："+result.starttime+"</div>\n" +
                "                    <div class='float-right infoChecked'>"+itemstate+"</div>\n" +
                "                    <div class='clearfix'></div>\n" +
                "                </div>\n" +
                "                <div class='itemIf border-bottom pb-3'>\n" +
                "                    <div class='float-left'>\n" +
                "                        <img class='align-self-center float-left mt-3' src='/public/img/"+result.comm_id+"/"+((result.pri).split(';'))[0]+"' style='height: 120px;width: 120px'/>\n" +
                "                        <div class='float-left justify-content-center mt-5 ml-3'>\n" +
                "                            <div>"+result.name+"</div>\n" +
                "                            <div class='infoChecked'>￥"+result.price+"</div>\n" +
                "                            <div class='clearfix'></div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class='float-right infoChecked mt-5'>X&nbsp1</div>\n" +
                "\n" +
                "                    <div class='clearfix'></div>\n" +
                "                    <div>共<span>一</span>件商品, 订单总金额: <span class='infoChecked'>"+result.price+"</span>元</div>\n" +
                "                </div>"
            )
            $.ajax({
                type: 'get',
                url: '/get/userinfo',
                success:function (data) {
                    var result2=data;
                    $(" <div class='mb-1' id='usernmt'>收货人："+result2.relname+"<span>&nbsp&nbsp联系电话:"+result2.telphone+"</span></div>").replaceAll("#usernmt");
                    $("<div class='mb-1' id='useraddress'>收货地址："+result2.address+"</div>").replaceAll("#useraddress");

                }
            })


        }
    })

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
})