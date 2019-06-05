$(".listBox>ul>li").click(function(){
    $(this).next().toggle()
    $(this).find('span').toggle()
})

//列表内部标签单击样式
$('.goodsChoose ul li b').on('click',function(){
    $(this).parent().addClass("chooseLi")
    $(this).parent().find("span").css('opacity','1')
    $(this).parent().siblings().eq(1).removeClass("chooseLi")
    
    //向上添加标签
    $(this).parent().clone().addClass('clone'+$(this).parent().parent().index()+$(this).parent().index()).appendTo($('.goodsChoose h3 ul'))

    console.log($('h3 .chooseUl li'))
})

//‘不限’ 按钮重置
$('.goodsChoose ul .resetChooseLi').click(function(){
    $(this).addClass('chooseLi').siblings().removeClass('chooseLi')
    $(this).siblings().find("span").css('opacity','0')
})

// × 按钮功能
$('.goodsChoose ul li span').click(function(){
    $(this).parent().removeClass("chooseLi")
    $(this).css('opacity','0')
    console.log($(this).parent().parent().find('.chooseLi').length)
    if($(this).parent().parent().find('.chooseLi').length == 0){
        $(this).parent().parent().find('.resetChooseLi').addClass('chooseLi')
    }

    //向上找到对应标签删除
    $('.goodsChoose h3 ul').find('.clone'+$(this).parent().parent().index()+$(this).parent().index()).remove()
})



// $('.goodsChoose h3 ul').on('click','li span',function(){
//     $(this).parent().remove()
// })


$('.goodsChoose h4 p').click(function(){
    $(this).toggle()
    $(this).siblings().toggle()
    $('.contentBox .goodsBox .goodsChoose ul:nth-of-type(5)').toggle()
    $('.contentBox .goodsBox .goodsChoose ul:nth-of-type(6)').toggle()
})