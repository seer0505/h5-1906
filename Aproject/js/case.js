function MoveImg(){
    this.oBox = document.querySelector(".caseBox .box");
    this.oimgBox = document.querySelector(".caseBox .imgBox");
    this.oImg = this.oimgBox.getElementsByTagName("img");
    this.oSpan = document.querySelectorAll(".caseBox span");
    this.obtnBox = document.querySelector(".btnBox")
    this.obtn = this.obtnBox.getElementsByTagName("div")    /////
    this.distance = this.oImg[0].offsetWidth;
    this.clone = this.oImg[0].cloneNode();
    this.count = 0;
    this.timer = null;
    this.init();

}
MoveImg.prototype = {
    init : function(){
        this.cloneImg();
        this.oimgBox.style.width = this.oImg.length * this.oImg[0].offsetWidth + "px";
        this.bindEvent();
    },
    //克隆第一张
    cloneImg : function(){
        this.oimgBox.appendChild(this.clone)
    },
    //图片运动
    toImg : function(){
        move(this.oimgBox,{"left": -this.count * this.distance })
    },
    //上一张图片
    nextImg : function(){
        if(this.count >= this.oImg.length - 1){
            this.oimgBox.style.left = 0;
            this.count = 1;
        }else{
            this.count++;
        }
        this.toImg();
    },
    //下一张图片
    lastImg : function(){
        if(this.count <= 0){
            this.oimgBox.style.left =  -(this.oImg.length - 1) *  this.oImg[0].offsetWidth + "px";
            this.count = this.oImg.length - 2;
        }else{
            this.count--
        }
        this.toImg();
    },
    //自动播放
    autoPlay : function(){
        var _this = this;
        this.timer = setInterval(function(){
            _this.nextImg();
        },3000);
    },
    //添加圆点
    addBtn : function(){
        for(var i = 0 ; i < this.oImg.length-1 ; i++){
            var creatDiv = document.createElement("div");
            this.obtnBox.appendChild(creatDiv)
        }
    },
    //圆点控制图片
    btnmove :function(){
        for(var j = 0 ; j < this.obtn.length; j++){
                var _this = this;
                this.obtn[j].index = j;
                this.obtn[j].onmouseover = function(){
                    _this.count = this.index;

                    _this.toImg();
                }
            }
    },
    //清除类名
    clearActive : function(){
        for(var m = 0 ; m < obtn.length; m++){
            obtn[m].className = "";
        }
    },
    //结合
    bindEvent : function(){
        var _this = this;
        this.oSpan[0].onclick = function(){
            _this.lastImg();
        };
        this.oSpan[1].onclick = function(){
            _this.nextImg();
        };
        this.autoPlay();
        this.oBox.onmouseout = function(){
            _this.autoPlay();
        };
        this.oBox.onmouseover = function(){
            clearInterval(_this.timer)
        };
        console.log(this.obtn)
        this.addBtn();
        this.btnmove();
        
    }

}
new MoveImg();