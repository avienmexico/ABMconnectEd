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

// Get the selected region, province, and municipality from the AJAX request
$region = $_GET['region'];
$province = $_GET['province'];
$municipality = $_GET['municipality'];

// Prepare a query to fetch the school information from the database based on the selected dropdown values
// Replace "schools_table" with the actual name of your schools table in the database
$sql = "SELECT school_id, school_name FROM database_school WHERE region = ? AND province = ? AND municipality = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $region, $province, $municipality);
$stmt->execute();
$stmt->bind_result($schoolId, $schoolName);

// Build an array to store the school information
$schools = array();
while ($stmt->fetch()) {
    $schoolInfo = array(
        'school_id' => $schoolId,
        'school_name' => $schoolName
    );
    $schools[] = $schoolInfo;
}

// Close the statement and the database connection
$stmt->close();
$conn->close();

// Return the school information in JSON format
header('Content-Type: application/json');
echo json_encode($schools);
?>
