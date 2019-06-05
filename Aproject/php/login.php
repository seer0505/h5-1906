<?php
    header("content-type:text/html;charset=utf-8");
    include('public.php');
    $userName = $_POST['userName'];
    $passWord = $_POST['passWord'];

    $sql = "select * from thenorthface where userName = '$userName'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);

    if($arr){
        echo json_encode(
            array(
                'state' => '0',
                'info' => '用户名重复'
            )
        );
    }else{
        $insert = "insert into thenorthface (userName,passWord) values ('$userName','$passWord')";
        mysqli_query($connect,$insert);
        echo json_encode(
            array(
                'state' => '1',
                'info' => '注册成功'
            )
        );
    }

    

?>