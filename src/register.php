<?php
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password']

if(!empty($name) || !empty($email) || !empty($password)){
    $host = 'localhost';
    $dbusername = 'root';
    $dbpassword = "";
    $dbname = "project1"


    $conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
    if(mysqli_connect_error()){
        die('Connect Error('.mysqli_connect_error().') '.
        mysqli_connect_error());
    }else{
        $SELECT = "SELECT email from register where email = ? Limit 1";
        $INSERT = "INSERT INTO register (name,email,password)values(?,?,?)";


        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum==0){
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sss",$name,$
            email,$password);
            $stmt->execute();
            echo "Successfully registered"
        } else{
            echo "Already existing email"
        }
        $stmt->close();
        $conn->close();
    }
}else {
        die();
    }
    ?>