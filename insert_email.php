<?php

$email = $_GET["email"];


//echo $email."<br>";
//echo $password."<br>";
//echo $repeat_password."<br>";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "location";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
 // Check connection
  if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 
 
$sql = "INSERT INTO email_list (email)
 VALUES ('".$email."')";
 
if ($conn->query($sql) === TRUE) {
  header("Location: home.html" );
 
  exit();
} else {
   echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>