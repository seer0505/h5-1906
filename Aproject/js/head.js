$(function () {
    function head() {
        this.oPhoneshopBox = $(".phoneshopbox")
        this.oPhoneshop = $(".phoneshop");
        this.ochooseCountry = $(".chooseCountry");
        this.ochooseCountryBox = $(".chooseCountryBox");
        this.oshopcar = $(".shopcar");
        this.oshopcarBox = $(".shopcarBox");
        this.oshopcarBtn = $(".shopcarBtn");
        this.init();
    }
    head.prototype = {
        init: function () {
            this.eventBind()
        },

        eventBind: function () {
            var _this = this;
            this.oPhoneshopBox.mouseover(function () {
                _this.oPhoneshop.show()
            })
            this.oPhoneshopBox.mouseout(
                function () {
                    _this.oPhoneshop.hide()
                })
            this.ochooseCountryBox.mouseover(
                function () {
                    _this.ochooseCountry.show();
                }
            )
            this.ochooseCountryBox.mouseout(
                function () {
                    _this.ochooseCountry.hide();
                }
            )
            this.oshopcarBox.mouseover(
                function () {
                    _this.oshopcar.show();
                }
            )
            this.oshopcarBox.mouseout(
                function () {
                    _this.oshopcar.hide();
                }
            )

        }
    }

    new head()
})

$(".list3 li").mouseover(function(){
    $(this).addClass("liActive").siblings().removeClass("liActive")
    $(this).find("div").addClass("divActive")
    $(this).siblings().find("div").removeClass("divActive")
})
$(".list3 li").mouseout(function(){
    $(this).removeClass("liActive")
    $(this).find("div").removeClass("divActive")
})
// $(".list3Box").mouseout(function(){
//     $(".list3 li").removeClass("liActive")
//     $(".navBox div").removeClass("navActive")
// })
// $('.navBox div').on('mouseiver',()=>{
//     $(this).addClass('navActive').siblings().removeClass("navActive")
// })
var cookie = getCookie('username');
$(".list2 li").eq(0).find('a').html(cookie);