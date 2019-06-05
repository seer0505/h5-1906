$(function(){

    function colorChoose(){
        this.btn1 = $(".colorChoose ul li").eq(0);
        this.btn2 = $(".colorChoose ul li").eq(1);
        this.btn3 = $(".colorChoose ul li").eq(2);
        this.oshowBox = $(".leftShow .showList ul");
        this.oColorPrompt = $(".rightShow .colorChoose p span");
        this.oWindowImg = $(".leftShow .showWindow img")
        // this.oBtns = $('.leftShow .showList ul li');
        this.init()
    }
    colorChoose.prototype = {
        init : function(){
          
            this.evetBind()
        },
        showImg : function(num){
            var _this = this;
            axios({
                method : "get",
                url : "../php/detail-colorChoose.json",
                data : {}
            }).then(function(data){
                var str = '';
                _this.oshowBox.html('')
                str = `
                     <li><img src='${data.data[num].link1}'></li>
                     <li><img src='${data.data[num].link2}'></li>
                     <li><img src='${data.data[num].link3}'></li>
                     <li><img src='${data.data[num].link4}'></li>
                `
               _this.oColorPrompt.html(data.data[num].color);
            //    console.log( $('.showList ul'))
               _this.oshowBox.html(str);
               _this.oWindowImg.attr('src',data.data[num].link1)
            }).catch(function(info){
                console.log(info)
            })   
        },
        changeScreen : function(){
            var _this = this;
            var oBtns = $('.leftShow .showList ul li');
            console.log(oBtns)
            oBtns.mouseover(function(){
                console.log(oBtns)
                _this.oWindowImg.attr('src',$(this).find("img").attr('src'))
            })
        },
        evetBind : function(){
            var _this = this;
            this.btn1.click(function(){
                _this.showImg(2)
                _this.changeScreen()
                $(".colorChoose ul li").removeClass('colorChooseLi')
                $(this).addClass('colorChooseLi')
            })
            this.btn2.click(function(){
                _this.showImg(1)
                _this.changeScreen()
                $(".colorChoose ul li").removeClass('colorChooseLi')
                $(this).addClass('colorChooseLi')
            })
            this.btn3.click(function(){
                _this.showImg(0)
                _this.changeScreen()
                $(".colorChoose ul li").removeClass('colorChooseLi')
                $(this).addClass('colorChooseLi')
            })
            this.changeScreen()
        }
    }

    new colorChoose()
})

$('.sizeChoose ul li').click(function(){
    $(this).addClass("sizeChooseLi").siblings().removeClass('sizeChooseLi')
    $('.sizeChoose p span').html($(this).html())
    
})

var count = 1;

$(".buyNow li").eq(1).click(function(){
    var sum = 0;
var sumprice = 0;
    $(".shopcar p").css('display','none')
    var flag = false;
    for(var i = 0 ; i < Math.max($('.shopcar div').length) ; i++){
        if($('.shopcar div').eq(i).find('img').attr('src') ==  $('.colorChoose .colorChooseLi').find('img').attr('src')&&$('.shopcar div').eq(i).find('.Size').html() ==  $('.sizeChoose p span').html() ){
            count++;
            $('.shopcar div').eq(i).find('.Num').html(count)
            flag = true;
           
        }
    }
    if(!flag){
        count = 1;
        var div = $('<div><div>')
        div.insertAfter($(".shopcar>p"))
        var 
        str = `
            <h2>`+ $('.rightShow h2').html() +`</h2>
            <h3><span>`+ $('.colorChoose p span').html() +` </span><span class='Size'>`+$('.sizeChoose p span').html()+`</span><span class='perprice'>`+ $('.rightShow h3').html() +`</span></h3>
            <img src = '`+ $('.colorChoose .colorChooseLi').find('img').attr('src') +`'>
            <h4><span>*</span><span class='Num'>`+ 1 +`</span><span class='goodsDel'>移除</span></h4>
        `
        div.html(str);
        
    }

    $('.shopcar div').find('.goodsDel').click(function(){
        $(this).parent().parent().remove()
        if($('.shopcar').find('div').length == 0){
            $(".shopcar p").css('display','block')
        }
    })


    
    for(var i = 0 ; i < Math.max($('.shopcar div').length,1) ; i++){
        sum += Number($('.shopcar div').eq(i).find('.Num').html()) 
        sumprice += Number($('.shopcar div').eq(i).find('.Num').html()) * Number($('.shopcar div').eq(i).find('.perprice').html()) 
    }


    if($('.shopcar .total').length == 0){
        var total = $("<section class='total'></section>")
        var str = `
            <h6><span>`+ sum +`</span><span>件商品</span><span>商品总计： ￥</span><span>`+ sumprice  +`</span></h6>
        `
        total.html(str)
        total.insertBefore($('.shopcar button'))
    }else{
        $('.shopcar .total span').eq(0).html(sum)
        $('.shopcar .total span').eq(3).html(sumprice)
    }






})

