var express = require('express');
var urlUtil=require('url');
var fs=require('fs');
var path=require('path');
var config=require('./config');
var sqlcon=require('./sql');
var session=require('express-session');
var router = express.Router();
var hostObj=config.hostObj;
var commobjlist=[[],[],[[],[],[]]];
var loginuserlist=new Map();
//var headstr,borstr,mianpath=path.resolve(__dirname,'..');
router.get('/',(req,res)=>{

    sqlcon.sqldo(hostObj,"select * from comm_tb",(err,data)=>{
        if(err){
            throw err
        }else{
            data.forEach(item => {
                var pri=item.pri
                item.pri=pri.split(";")
            });
            if(commobjlist[0].length==0){
                init(commobjlist,data)
            }
            
            res.render('index.html',{
                commlist:commobjlist[0],
                commlist2:commobjlist[1],
                commlist3:commobjlist[2] ,
                username:(loginuserlist.get(req.sessionID)!=null)?loginuserlist.get(req.sessionID).username:null,

                
            });
            res.end()
        }
    })
})
router.get('/get/quit',(req,res)=>{
    loginuserlist.delete(req.sessionID)
    res.end()
})
router.get('/get/registeruser',(req,res)=>{
    var reqdata=urlUtil.parse(req.url,true).query;
    sqlcon.sqldo(hostObj,"select * from user_tb where username=?",(err,data)=>{
        if(data.length>=1){
            res.send("Fail")
        }else{
            sqlcon.sqldo(hostObj,'insert into user_tb (username,userpwd,uray) values (?,?,1)',(err,data)=>{ 
                sqlcon.sqldo(hostObj,"select * from user_tb where username=?",(err,data)=>{
                    var reguserinfo=data[0]
                    sqlcon.sqldo(hostObj,'insert into urif_tb (user_id,relname,itname,address,telphone,zipcode) values (?,?,?,?,?,?)',(err,data)=>{
                        res.send('OK')
                    },[reguserinfo.id,reguserinfo.username,reguserinfo.username,reqdata.address,reqdata.telphone,reqdata.zipcode])
                },reqdata.logname)
            },[reqdata.logname,reqdata.logpwd])
        }
    },reqdata.logname)
    
    
})
router.get('/iteminfo',(req,res)=>{
    
        var reqdata=urlUtil.parse(req.url,true).query;
    reqdata=parseInt(reqdata.itemid)
    sqlcon.sqldo(hostObj,"select * from comm_tb where id=?",(err,data)=>{
        if(err){
            throw err
        }else{
            if(data.length!=0){
                data.forEach(item => {
                var pri=item.pri
                item.pri=pri.split(";")
            });
            var sql="select cmpl_tb.id,plco,comm_id,name,plti,itname from (cmpl_tb join comm_tb on cmpl_tb.comm_id=comm_tb.id) join urif_tb on urif_tb.user_id=cmpl_tb.user_id where comm_id=?"
            sqlcon.sqldo(hostObj,sql,(err,data2)=>{
                console.log(typeof(user_Get(req.sessionID)))
                if(typeof(user_Get(req.sessionID))=="undefined" ){
                    res.render('itemInfo.html',{iteminfo:data[0],pinlun:data2,moreitem:commobjlist[0]});
                }else{
                    res.render('itemInfo.html',{iteminfo:data[0],pinlun:data2,moreitem:commobjlist[0],username:user_Get(req.sessionID).username});
                }
            },reqdata)}
        }
    },reqdata)
    
    
})
router.get('/register',(req,res)=>{
    res.render('register.html');
    res.end()
})
router.get('/userinfo',(req,res)=>{
    if(loginuserlist.get(req.sessionID).username!=null){
        res.render('userinfo.html',{username:loginuserlist.get(req.sessionID).username});
        res.end()
    }else{
        res.render('turn.html',{go:'/'});
    }
    
})
router.get('/get/logsinfo',(req,res)=>{
    var userinfo=loginuserlist.get(req.sessionID);
    console.log(userinfo.id)
    sqlcon.sqldo(hostObj,'select logs_tb.id,comm_id,user_id,startaddress,endaddress,starttime,endtime,has_find,is_close,count,name,price,pri from logs_tb LEFT JOIN comm_tb on logs_tb.comm_id=comm_tb.id where logs_tb.user_id=?',(err,data)=>{
        if(err){
            console.log(err)
        }
        res.send(data)
        res.end()
    },userinfo.id)
})
router.get('/get/logsinfosg',(req,res)=>{
    var reqdata=urlUtil.parse(req.url,true).query;
    var userinfo=loginuserlist.get(req.sessionID);
    console.log(userinfo.id)
    sqlcon.sqldo(hostObj,'select * from logs_tb LEFT JOIN comm_tb on logs_tb.comm_id=comm_tb.id where logs_tb.user_id=? and logs_tb.id=?',(err,data)=>{
        if(err){
            console.log(err)
        }
        res.send(data)
        res.end()
    },[userinfo.id,reqdata.logsid])
})
router.get('/get/proysh',(req,res)=>{
    var reqdata=urlUtil.parse(req.url,true).query;
    sqlcon.sqldo(hostObj,'update logs_tb set has_find=1 where user_id=? and id=?',(err,data)=>{
        res.send('OK')
    },[loginuserlist.get(req.sessionID).id,reqdata.logsid])
})
router.get('/get/getsearch',(req,res)=>{
    var reqdata=urlUtil.parse(req.url,true).query;
    var itemname='%'+reqdata.name+'%'
    sqlcon.sqldo(hostObj,'select * from comm_tb where name like ?',(err,data)=>{
        res.send(data)
    },[itemname])
})
router.get('/search',(req,res)=>{
    res.render('search.html')
})
router.get('/login',(req,res)=>{
    if(loginuserlist.get(req.sessionID)==null){
        res.render('login.html');
        res.end()
    }else{
        res.render('turn.html',{go:'/'});
        res.end()
    }
    
})
router.get('/doLogin',(req,res)=>{
    var relpath=req.url;
    var query=urlUtil.parse(req.url,true).query;
    var sql="SELECT user_tb.id,username,userpwd,relname,itname,address,telphone,zipcode FROM user_tb join urif_tb on user_tb.id=urif_tb.user_id where username=? and userpwd=?";
    sqlcon.sqldo(config.hostObj,sql,(err,data)=>{
        if(data.length>0){
            var userinfo=data[0]
            loginuserlist.set(req.sessionID,userinfo)
            res.send(data[0])
        }else{
            res.send({id:-1})
        }
    },[query.username,query.userpwd])
})
router.get('/logsinfo',(req,res)=>{
    res.render('logsinfo.html')
})
router.get('/get/irtpro',(req,res)=>{
    var username=loginuserlist.get(req.sessionID).username
    var relpath=req.url;
    var query=urlUtil.parse(req.url,true).query;
    var sql="insert into cart_tb (user_id,comm_id,count) values (?,?,?)";
    sqlcon.sqldo(config.hostObj,sql,(err,data)=>{
        console.log(data)
        if(data.affectedRows==1){
            res.send({core:data.affectedRows})
        }else{
            res.send({core:0})
        }
    },[loginuserlist.get(req.sessionID).id,query.comm_id,1])
})
router.get('/get/userinfo',(req,res)=>{
    var userinfo=loginuserlist.get(req.sessionID)
    if(userinfo!=null){ 
       res.send(userinfo) 
    }else{
        res.send('无登录')
    } 
})
router.get('/get/updinfo',(req,res)=>{
    var box=urlUtil.parse(req.url,true).query;
    var sql="update urif_tb set relname=?,itname=?,address=?,telphone=?,zipcode=? where user_id=?";
    sqlcon.sqldo(config.hostObj,sql,(err,data)=>{
        sqlcon.sqldo(hostObj,'SELECT user_tb.id,username,userpwd,relname,itname,address,telphone,zipcode FROM user_tb join urif_tb on user_tb.id=urif_tb.user_id where username=?',(err,data)=>{
            loginuserlist.set(req.sessionID,data[0])
            res.send('OK')
        },user_Get(req.sessionID).username)
    },[box.relname,box.itname,box.address,box.telphone,box.zipcode,user_Get(req.sessionID).id])
})
router.get('/cart',(req,res)=>{
    var username=user_Get(req.sessionID).username;
    var sql="select cart_tb.id,user_id,count,comm_id,name,price,fakeprice,pri from cart_tb left join comm_tb on cart_tb.comm_id=comm_tb.id where user_id=?";
    sqlcon.sqldo(config.hostObj,sql,(err,data)=>{
        if(data.length>=1){
            res.render('cart.html',{username:username,usercart:data})
        }else{
            res.render('cart.html',{username:username})
        }
    },[loginuserlist.get(req.sessionID).id])
   
})
router.get('/get/usercart',(req,res)=>{
    var username=user_Get(req.sessionID).username;
    var sql="select cart_tb.id,user_id,count,comm_id,name,price,fakeprice,pri from cart_tb left join comm_tb on cart_tb.comm_id=comm_tb.id where user_id=?";
    sqlcon.sqldo(config.hostObj,sql,(err,data)=>{
        res.send(data)
    },[loginuserlist.get(req.sessionID).id])
   
})
router.get('/get/irtlogs',(req,res)=>{
    var userinfo=user_Get(req.sessionID);
    var box=urlUtil.parse(req.url,true).query;
    var sql="insert into logs_tb (comm_id,user_id,startaddress,endaddress,starttime,endtime,has_find,is_close,count) values (?,?,?,?,?,?,0,0,1)";
    sqlcon.sqldo(config.hostObj,sql,(err,data)=>{},[box.comm_id,userinfo.id,'北京 北京市 海淀区',userinfo.address,getTime(),null])
    res.send("OK")
   
})
router.get('/get/delcart',(req,res)=>{
    var userinfo=user_Get(req.sessionID);
    var box=urlUtil.parse(req.url,true).query;
    delcart(config.hostObj,box.cart_id,box.comm_id,userinfo.id)
    res.send('OK')
})
router.get('./pagehead',(req,res)=>{
    var username=loginuserlist.get(req.sessionID).username
    res.render('pagehead.html',{username:username})
})
function checkuser(hostObj,username){
    var userdata=[];
    sqlcon.sqldo(hostObj,'select * from user_tb where username=?',(err,data)=>{
        userdata=data
    },[username])
    return userdata
}
function delcart(hostobj,cart_id,comm_id,user_id){
    sql2="delete from cart_tb where id=? and user_id=? and comm_id=?"
    sqlcon.sqldo(hostobj,sql2,(err,data)=>{},[cart_id,user_id,comm_id])
}

function getTime(){
    var d=new Date();
    return d.getFullYear()+'-'+(parseInt(d.getMonth())+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
}

function user_Get(sessionID){
    return loginuserlist.get(sessionID);
}

function init(commobjlist,data){
    for(let i=0;i<4;i++){commobjlist[0].push(data[i])}
    for(let i=4;i<8;i++){commobjlist[1].push(data[i])}
    for(let i=8;i<12;i++){commobjlist[2][0].push(data[i])}
    for(let i=12;i<16;i++){commobjlist[2][1].push(data[i])}
    for(let i=16;i<20;i++){commobjlist[2][2].push(data[i])}
}
module.exports=router;