<?php
    header("content-type:text/html;charset=utf-8");
    $data = array(
        array(
            'src' => 'images/show1.jpg',
            'cn' => '越野跑',
            'en' => 'TRAL RUNNING'
        ),
        array(
            'src' => 'images/show2.jpg',
            'cn' => '训练',
            'en' => 'OUTDOOR TRAINNING'
        ),
        array(
            'src' => 'images/show3.jpg',
            'cn' => '徒步',
            'en' => 'HIKING'
        ),
        array(
            'src' => 'images/show4.jpg',
            'cn' => '滑雪',
            'en' => 'SKIING'
        ),
        array(
            'src' => 'images/show5.jpg'
        ),
        array(
            'src' => 'images/show6.jpg'
        ),
        array(
            'src' => 'images/show7.jpg'
        )
    );


    echo json_encode($data);
?>