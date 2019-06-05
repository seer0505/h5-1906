axios(
    {
        mmethod : "get",
        url : "php/page.php",
        data : {}
    }
).then(function(data){
    console.log(data)
    var oPage = document.querySelector(".page")
    var oManChoose = document.querySelector(".manChoose");
    var oWomanChoose = document.querySelector(".womanChoose");
    function manShow(){
        var str = "";
        for(var i=0 ; i<4 ; i++){
            str += `
            <li>
                <a href="#">
                    <img src="${data[i].src}">
                    <div>
                        <span>查看搭配</span>
                    </div>
                </a>
            </li>
            `
        }
        oPage.innerHTML = str;
    }
    function womanShow(){
        var str = "";
        for(var i=4 ; i<8 ; i++){
            str += `
            <li>
                <a href="#">
                    <img src="${data[i].src}">
                    <div>
                        <span>查看搭配</span>
                    </div>
                </a>
            </li>
            `
        }
        oPage.innerHTML = str;
    }
    manShow();
    oManChoose.onclick = function(){
        manShow()
    };
    oWomanChoose.onclick = function(){
        womanShow()
    }
    $(".pageBox div span").click(
        function(){
            $(this).addClass("choose").siblings().removeClass("choose");
            $(".pageBox .page li").mouseover(function(){
                $(this).find("div").css("display","block")
            })
            $(".pageBox .page li").mouseout(function(){
                $(this).find("div").css("display","none")
            })
        }
    )
    $(".pageBox .page li").mouseover(function(){
        $(this).find("div").css("display","block")
    })
    $(".pageBox .page li").mouseout(function(){
        $(this).find("div").css("display","none")
    })







    
}).catch(function(info){
    console.log(info)
})