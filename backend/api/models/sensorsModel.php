<?php
require_once('api/config/database.php');

class SensorsModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllSensors() {
        $query = "SELECT * FROM Sensors";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $sensors = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $sensors;
    }

    public function getSensorById($sensor_id) {
        $query = "SELECT * FROM Sensors WHERE sensor_id = :sensor_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':sensor_id', $sensor_id);
        $stmt->execute();
        $sensor = $stmt->fetch(PDO::FETCH_ASSOC);
        return $sensor;
    }

    public function createSensor($sensor_data) {
        $query = "INSERT INTO Sensors (sensor_name, room_id) VALUES (:sensor_name, :room_id)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':sensor_name', $sensor_data['sensor_name']);
        $stmt->bindParam(':room_id', $sensor_data['room_id']);
        $stmt->execute();
        $sensor_id = $this->conn->lastInsertId();
        return $sensor_id;
    }

    public function updateSensor($sensor_id, $sensor_data) {
        $query = "UPDATE Sensors SET sensor_name = :sensor_name, room_id = :room_id WHERE sensor_id = :sensor_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':sensor_name', $sensor_data['sensor_name']);
        $stmt->bindParam(':room_id', $sensor_data['room_id']);
        $stmt->bindParam(':sensor_id', $sensor_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteSensor($sensor_id) {
        $query = "DELETE FROM Sensors WHERE sensor_id = :sensor_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':sensor_id', $sensor_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

