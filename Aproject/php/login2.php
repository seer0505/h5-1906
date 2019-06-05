<?php
    header("content-type:text/html;charset=utf8");
    include("public.php");

    $userName = $_POST['userName'];
    $passWord = $_POST['passWord'];

    $sql = "select * from thenorthface where userName = '$userName'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);
    if(count($arr)){
        if($arr['passWord'] == $passWord){
            echo json_encode(
                array(
                    'state' => '1',
                    'info' => '登陆成功'
                )
            );
        }else{
            echo json_encode(
                array(
                    'state' => '2',
                    'info' => '密码错误'
                )
            );
        }
    }else{    
        echo json_encode(
            array(
                'state' => '3',
                'info' => '用户名不存在'
            )
        );
    };

?>