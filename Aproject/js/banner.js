var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay :true,
    // 如果需要分页器
  })




//   layui.use(['layer', 'form'], function(){
//     var layer = layui.layer
//     ,form = layui.form;
    
//     layer.msg('Hello World');
//   });

  layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#test1'
      ,width: '100%' //设置容器宽度
      ,arrow: 'always' //始终显示箭头
      //,anim: 'updown' //切换动画方式
    });
  });