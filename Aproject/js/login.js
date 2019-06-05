$("ul .registerBtn").click(function(){
    $(".registerBox").css('display','block')
    $(".loginBox").css('display','none')
})
$("ul .loginBtn").click(function(){
    $(".registerBox").css('display','none')
    $(".loginBox").css('display','block')
})

var oPhoneNum = document.querySelector(".phoneNum");
var oVerifyNum = document.querySelector('.verifyNum');
var oVerify =  document.querySelector('.verify');
var oUsername = document.querySelector(".username");
var oPassword = document.querySelector(".verifyPhone")
function verifyNum(){
    var str = '';

    for(var i = 0 ; i < 4 ; i++){
        var k = randomNum(0,9);
        str += k;
    }
    oVerifyNum.innerHTML = str;
}

verifyNum();
$(".verifyBtn").click(function(){
    verifyNum();
})

var reg1 =  /^((13)|(18)|(15)|(17))\d{9}$/;
var oLoginBtn = document.querySelector(".registerBox .loginBtn");
oLoginBtn.onclick = function(){
    var reg2 = new RegExp(oVerifyNum.innerHTML);
    var res1 = reg1.test(oPhoneNum.value),
        res2 = reg2.test(oVerify.value);
    if(res1&&res2){
        var usernameCon = oPhoneNum.value;
        var passowrdCon = oPassword.value; 
        axios({
            method : 'post',
            url : '../php/login.php',
            data : {
                userName : usernameCon,
                passWord : passowrdCon
            }
        }).then(function(data){
            alert('注册成功')
            $(".registerBox").css('display','none')
            $(".loginBox").css('display','block')

        }).catch(function(info){
            console.log(info)
        })
        
    }
}


var oLoginBtn2 = document.querySelector('.loginBtn2')
var ologinNum = document.querySelector(".loginNum");
var ologinPassword = document.querySelector('.loginPassword')
oLoginBtn2.onclick = function(){
    var ausernameCon = ologinNum.value;
    var apassowrdCon = ologinPassword.value; 
    axios({
        method : 'post',
        url : '../php/login2.php',
        data : {
            userName : ausernameCon,
            passWord : apassowrdCon
        }
    }).then(function(data){
        console.log(data)
        if(data.state == "1"){
            alert('登陆成功')
            setCookie('username',ausernameCon)





            location.href = "../index.html"



        }else if(data.state == "2"){
            alert('密码错误')
        }else if(data.state == "3"){
            alert('用户名不存在')
            location.href = "login.html"
        }
    }).catch(function(info){
        console.log(info)
    })
}