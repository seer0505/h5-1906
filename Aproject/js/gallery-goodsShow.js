axios({
    method : 'get',
    url : '../php/gallery-show.json',
    data : {}
}).then(function(data){
    console.log(data)
    var oDatashowUl = document.querySelector('.showCase ul')
    var oshowCaseBtn = document.querySelector('.showCaseBtn')
    var oLastBtn = document.querySelector('.showCaseBtn .lastBtn')
    var oNextBtn = document.querySelector('.showCaseBtn .nextBtn')
    var oFirstpage = document.querySelector('.showCaseBtn .firstPage')
    var oLastPage = document.querySelector('.showCaseBtn .lastPage')
    var oPage =  document.querySelector('.showCaseBtn .page')
    var count = 1;
    var pageNum = Math.ceil(data.data.length / 18);

    function renderPage(n){
        var str = '';
        for(var i = (n-1)*18; i < Math.min(data.data.length,18*n)  ; i++){
            var str1 = '';
           
            var j  = data.data[i].smallsrc.length
            
            for(var k = 0 ; k< j; k++){
                str1 += `
                <li><img src='${data.data[i].smallsrc[k]}'></li>
                `
            }
            str+=`
                <li class='goods'>
                    <div>
                        <a href='goodsDetail.html'>
                            <img src='${data.data[i].bigsrc1}'>
                        </a>
                        <a href='#'>${data.data[i].title}</a>
                    </div>
                    <p>
                        ${data.data[i].price}
                    </p>
                    <section>
                    <ul>
                        
                            `+ str1 +`
                        
                        
                    </ul>
                    </section>
                </li>
            `  
        }
        oDatashowUl.innerHTML = str;
    }

    function giveBorder(){
        $('.goods section li img').click(function(){
            $(this).parent().addClass('chooseImg').siblings().removeClass('chooseImg')
            $(this).parent().parent().parent().parent().find("div a img").attr('src',$(this).attr('src'))
        })
       
    }
    
    
    renderPage(1)

    // for(var i = 0 ; i<pageNum ; i++){
    //     var creatSpan = document.createElement('span');
    //     creatSpan.innerHTML = i+1 ;
    //     oshowCaseBtn.insertBefore(creatSpan,oNextBtn)
    // }
    oPage.innerHTML = count + '/' + pageNum;

    // var oSpan = document.querySelectorAll('.showCaseBtn span')
    // for(var i = 1 ; i < oSpan.length-1 ; i++){
    //     oSpan[i].onclick =function(){
    //         renderPage(this.innerHTML);
    //         count = this.innerHTML
    //     }
    // }

    oLastBtn.onclick = function(){
        if(count <=1){
            count =1
        }else{
            count--
        }
        renderPage(count)
        giveBorder()
        oPage.innerHTML = count + '/' + pageNum;
    }

    oNextBtn.onclick = function(){
        if(count >= pageNum){
            count = pageNum;
        }else{
            count++;
        }
        renderPage(count);
        giveBorder()
        oPage.innerHTML = count + '/' + pageNum;
    }

    oFirstpage.onclick = function(){
        count = 1;
        renderPage(1)
        giveBorder()
        oPage.innerHTML = count + '/' + pageNum;
    }
    oLastPage.onclick = function(){
        count = pageNum;
        renderPage(pageNum)
        giveBorder()
        oPage.innerHTML = count + '/' + pageNum;
    }
    giveBorder()
    console.log($('.goods section li img'))
   

}).catch(function(info){
    console.log(info)
})