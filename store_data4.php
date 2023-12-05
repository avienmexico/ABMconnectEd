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
$click4 = $data["click4"];

// Store data in the database
$sql = "INSERT INTO question4 (click) VALUES ($click4)";
$result = $conn->query($sql);

$conn->close();
?>
