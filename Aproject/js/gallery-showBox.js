$(".showChoose p").eq(0).click(function(){
    $(this).addClass('showChooseActive').siblings().removeClass('showChooseActive')
    
    $('.showBox h2 select option').eq($(this).index()).attr("selected", "selected")
    $('.showBox h2 select option').eq($(this).index()).siblings().removeAttr("selected")
})
$(".showChoose p").eq(1).click(function(){
    $(this).siblings().removeClass('showChooseActive')
    $(this).toggle()
    $(this).next().addClass('showChooseActive').toggle()
    
    $('.showBox h2 select option').eq($(this).index()).attr("selected", "selected")
    $('.showBox h2 select option').eq($(this).index()).siblings().removeAttr("selected")
})
$(".showChoose p").eq(2).click(function(){
    $(this).siblings().removeClass('showChooseActive')
    $(this).toggle()
    $(this).prev().addClass('showChooseActive').toggle()
    $('.showBox h2 select option').eq($(this).index()).siblings().removeAttr("selected")
    $('.showBox h2 select option').eq($(this).index()).attr("selected", "selected")
})
$(".showChoose p").eq(3).click(function(){
    $(this).addClass('showChooseActive').siblings().removeClass('showChooseActive')
    $(this).find('span').toggle()
    
    $('.showBox h2 select option').eq($(this).index()).attr("selected", "selected")
    $('.showBox h2 select option').eq($(this).index()).siblings().removeAttr("selected")
})

console.log($('.showBox h2 option'))
$('.showBox h2 option').eq(0).click(function(){
    console.log(1)
    $(".showChoose p").eq(0).addClass('showChooseActive').siblings().removeClass('showChooseActive')
})
