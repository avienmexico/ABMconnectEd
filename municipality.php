<?php
// Connect to your database (you need to provide the correct credentials here)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "location";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$region = $_GET['region'];
$province = $_GET['province'];

// Fetch unique municipalities based on the selected region and province from the database
$sql = "SELECT DISTINCT municipality FROM database_school WHERE region = '$region' AND province = '$province'";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        
        $data[] = $row['municipality'];
    }
}

$conn->close();

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
