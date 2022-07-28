$(document).ready(function () {
    var itemname=getUrlParameter("itemname");
    var ii=0;
    console.log(itemname)
    $.ajax({
        type:'get',
        url:'/get/getsearch',
        data:{
            "name":itemname
        },
        crossDomain:true,
        dataType:'json',
        success:function(data,status){
            console.log(data)
            var itemline=Math.ceil((data.length)/4);
            console.log(itemline);
            if (data.length==0){
                alert("暂无该商品！");
            }else {
                $("#searchmain").empty();
                $("#searchmain").append("<div>为您找到<span id='pronum'>"+data.length+"</span>条结果</div>")
                for (var i=0;i<itemline;i++){
                    var numcatch=0;
                    if((data.length-i*4)>=4){
                        numcatch=4
                    }else {
                        numcatch=data.length-i*4;
                    }
                    $("#searchmain").append("<div class='protypeshower mb-5'>" +
                        "<div class='card-group row mt-3 mb-5' id='cdg"+i+"'></div>\n" +
                        "\t</div>")
                    for (var j=0;j<numcatch;j++){
                        var result=data[ii];
                        $("#cdg"+i).append("<div class='card col-3 mr-2 p-0 border-0'>\n<a href='/iteminfo?itemid="+result.id+"' class='text-decoration-none'>" +
                            "<img src='public/img/"+result.id+"/"+((result.pri).split(';'))[0]+"' class='card-img-top align-self-center' alt='...'>\n" +
                            "<div class='card-body p-2'>\n" +
                            "<h5 class='text-center mt-1'>"+result.name+"</h5>\n" +
                            "<div class='text-center pricetitle'>￥<span class='price'>"+result.price+"</span>起<span class='timerred smfont p-1 ml-1'>特价</span></div>\n" +
                            "</div>\n" +
                            "</a></div>")
                        console.log(result);
                        ii++;
                    }

                }
            }

        },
        error:function (data,state) {
            console.log(data)
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