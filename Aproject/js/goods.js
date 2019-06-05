axios({
    method : 'get',
    url : 'php/goods.php',
    data : {}
}).then(function(data){
    console.log(data)
    var str = '';
    var oUl = document.querySelector(".goodsBox ul")
    for(var i = 0 ; i < data.length;i++){
        str += `
        <li>
            <a href="#">
                <img src = "${data[i].src}">
                <h2>${data[i].name}</h2>
                <h3>${data[i].price}</h3>
                <h4>￥${data[i].originalprice}</h4>
            </a>
        </li>
        `
    }
    oUl.innerHTML = str;
    $('.goodsBox ul').css('width',$(".goodsBox ul li").length*($(".goodsBox ul li").width()+20) + 'px')
    $('.goodsBox').find('span').eq(1).click(function(){ 
        $('.goodsBox ul').animate({
            'left' : -$('.goodsBox section').width()
        },1000)
    })
    $('.goodsBox').find('span').eq(0).click(function(){
        $('.goodsBox ul').animate({
            'left' : '0'
        },1000)
    })




}).catch(function(info){
    console.log(info)
})