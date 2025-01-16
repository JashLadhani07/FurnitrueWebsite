<?php
    include("connection.php");
    if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $POST["phone"];
        $age = $POST["age"];
        $period = $POST["period"];
        $gender = $POST["gender"];
        $payment = $POST["payment"];

        $mysql = mysqli_connection($connection,"INSERT INTO 'registration'('ID','Name','Email','Number','Age','Period','Gender','Payment')VALUES 
        ('','$name','$email','$phone','$age','$period','$gender','$payment')");
    }
    if($mysql){
        echo "data inserted successfully";
    }
    else{
        echo "data insertion failed";
    }
    ?>