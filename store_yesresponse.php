<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userclick";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get JSON data from the POST request
$data = json_decode(file_get_contents("php://input"), true);

// Extract data
$click = $data["click"];

// Store data in the database
$sql = "INSERT INTO yes (click) VALUES ($click)";
$result1 = $conn->query($sql);

$conn->close();
?>
