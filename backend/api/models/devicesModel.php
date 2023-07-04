<?php
require_once('api/config/database.php');

class DevicesModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllDevices() {
        $query = "SELECT * FROM Devices";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $devices = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $devices;
    }

    public function getDeviceById($device_id) {
        $query = "SELECT * FROM Devices WHERE device_id = :device_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_id', $device_id);
        $stmt->execute();
        $device = $stmt->fetch(PDO::FETCH_ASSOC);
        return $device;
    }

    public function createDevice($device_data) {
        $query = "INSERT INTO Devices (device_name, device_type) VALUES (:device_name, :device_type)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_name', $device_data['device_name']);
        $stmt->bindParam(':device_type', $device_data['device_type']);
        $stmt->execute();
        $device_id = $this->conn->lastInsertId();
        return $device_id;
    }

    public function updateDevice($device_id, $device_data) {
        $query = "UPDATE Devices SET device_name = :device_name, device_type = :device_type WHERE device_id = :device_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_name', $device_data['device_name']);
        $stmt->bindParam(':device_type', $device_data['device_type']);
        $stmt->bindParam(':device_id', $device_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteDevice($device_id) {
        $query = "DELETE FROM Devices WHERE device_id = :device_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_id', $device_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

