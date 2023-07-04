<?php
require_once('api/config/database.php');

class RobotVacuumsModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllRobotVacuums() {
        $query = "SELECT * FROM Robot_Vacuums";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $robotVacuums = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $robotVacuums;
    }

    public function getRobotVacuumById($robotVacuum_id) {
        $query = "SELECT * FROM Robot_Vacuums WHERE robotVacuum_id = :robotVacuum_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':robotVacuum_id', $robotVacuum_id);
        $stmt->execute();
        $robotVacuum = $stmt->fetch(PDO::FETCH_ASSOC);
        return $robotVacuum;
    }

    public function createRobotVacuum($robotVacuum_data) {
        $query = "INSERT INTO Robot_Vacuums (name, status) VALUES (:name, :status)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':name', $robotVacuum_data['name']);
        $stmt->bindParam(':status', $robotVacuum_data['status']);
        $stmt->execute();
        $robotVacuum_id = $this->conn->lastInsertId();
        return $robotVacuum_id;
    }

    public function updateRobotVacuum($robotVacuum_id, $robotVacuum_data) {
        $query = "UPDATE Robot_Vacuums SET name = :name, status = :status WHERE robotVacuum_id = :robotVacuum_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':name', $robotVacuum_data['name']);
        $stmt->bindParam(':status', $robotVacuum_data['status']);
        $stmt->bindParam(':robotVacuum_id', $robotVacuum_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteRobotVacuum($robotVacuum_id) {
        $query = "DELETE FROM Robot_Vacuums WHERE robotVacuum_id = :robotVacuum_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':robotVacuum_id', $robotVacuum_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

