<?php
require_once('api/config/database.php');

class LightsModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllLights() {
        $query = "SELECT * FROM Lights";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $lights = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $lights;
    }

    public function getLightById($light_id) {
        $query = "SELECT * FROM Lights WHERE light_id = :light_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':light_id', $light_id);
        $stmt->execute();
        $light = $stmt->fetch(PDO::FETCH_ASSOC);
        return $light;
    }

    public function createLight($light_data) {
        $query = "INSERT INTO Lights (status, brightness) VALUES (:status, :brightness)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':status', $light_data['status']);
        $stmt->bindParam(':brightness', $light_data['brightness']);
        $stmt->execute();
        $light_id = $this->conn->lastInsertId();
        return $light_id;
    }

    public function updateLight($light_id, $light_data) {
        $query = "UPDATE Lights SET status = :status, brightness = :brightness WHERE light_id = :light_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':status', $light_data['status']);
        $stmt->bindParam(':brightness', $light_data['brightness']);
        $stmt->bindParam(':light_id', $light_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteLight($light_id) {
        $query = "DELETE FROM Lights WHERE light_id = :light_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':light_id', $light_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

