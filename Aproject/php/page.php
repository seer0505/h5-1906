<?php
    header("content-type:text/html;charset=utf-8");
    $data = array(
        array(
            'src' => 'images/man1.jpg',
        ),
        array(
            'src' => 'images/man2.jpg',
        ),
        array(
            'src' => 'images/man3.jpg',
        ),
        array(
            'src' => 'images/man4.jpg',
        ),
        array(
            'src' => 'images/woman1.jpg',
        ),
        array(
            'src' => 'images/woman2.jpg',
        ),
        array(
            'src' => 'images/woman3.jpg',
        ),
        array(
            'src' => 'images/woman4.jpg',
        )
       
    );


    echo json_encode($data);
?>