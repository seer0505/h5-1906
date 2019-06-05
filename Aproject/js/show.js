axios(
    {
        method : "get",
        url : "php/show.php",
        data :{}
    }
).then(function(data){
    console.log(data)
    var oShowTop = document.querySelector(".showBox .showTop")
    var oShowMiddle = document.querySelector(".showBox .showMiddle")
    var oShowBottom = document.querySelector(".showBox .showBottom")
    var str = '';
    for(var i=0 ; i< 4 ; i++){
        str += `
            <li>
                <a href="#">
                    <img src="${data[i].src}">
                    <div>
                        <p>${data[i].cn}</p>
                        <p>${data[i].en}</p>
                    </div>
                </a>
            </li>
        `
    }
    oShowTop.innerHTML = str;
    oShowMiddle.innerHTML = `
            <li>
                <a href="#">
                    <img src="${data[4].src}">
                </a>
            </li>
        `
    var str1 = '';
    for(var i=5 ; i<= 6 ; i++){
        str1 += `
            <li>
                <a href="#">
                    <img src="${data[i].src}">
                </a>
            </li>
        `
    }
    oShowBottom.innerHTML = str1;
    $(".showBox .showTop li").mouseover(function(){
        $(this).find("div").css('display','block')
    });
    $(".showBox .showTop li").mouseout(function(){
        $(this).find("div").css('display','none')
    })

}).catch(function(info){
    console.log(info)
})