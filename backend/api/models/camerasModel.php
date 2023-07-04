<?php
require_once('api/config/database.php');

class CamerasModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllCameras() {
        $query = "SELECT * FROM Cameras";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $cameras = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $cameras;
    }

    public function getCameraById($camera_id) {
        $query = "SELECT * FROM Cameras WHERE camera_id = :camera_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':camera_id', $camera_id);
        $stmt->execute();
        $camera = $stmt->fetch(PDO::FETCH_ASSOC);
        return $camera;
    }

    public function createCamera($camera_data) {
        $query = "INSERT INTO Cameras (camera_name, room_id) VALUES (:camera_name, :room_id)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':camera_name', $camera_data['camera_name']);
        $stmt->bindParam(':room_id', $camera_data['room_id']);
        $stmt->execute();
        $camera_id = $this->conn->lastInsertId();
        return $camera_id;
    }

    public function updateCamera($camera_id, $camera_data) {
        $query = "UPDATE Cameras SET camera_name = :camera_name, room_id = :room_id WHERE camera_id = :camera_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':camera_name', $camera_data['camera_name']);
        $stmt->bindParam(':room_id', $camera_data['room_id']);
        $stmt->bindParam(':camera_id', $camera_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteCamera($camera_id) {
        $query = "DELETE FROM Cameras WHERE camera_id = :camera_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':camera_id', $camera_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

