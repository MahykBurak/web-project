<?php
require_once('api/config/database.php');

class FridgeModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllFridges() {
        $query = "SELECT * FROM Fridge";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $fridges = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $fridges;
    }

    public function getFridgeById($fridge_id) {
        $query = "SELECT * FROM Fridge WHERE fridge_id = :fridge_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':fridge_id', $fridge_id);
        $stmt->execute();
        $fridge = $stmt->fetch(PDO::FETCH_ASSOC);
        return $fridge;
    }

    public function createFridge($fridge_data) {
        $query = "INSERT INTO Fridge (temperature, has_ice) VALUES (:temperature, :has_ice)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':temperature', $fridge_data['temperature']);
        $stmt->bindParam(':has_ice', $fridge_data['has_ice']);
        $stmt->execute();
        $fridge_id = $this->conn->lastInsertId();
        return $fridge_id;
    }

    public function updateFridge($fridge_id, $fridge_data) {
        $query = "UPDATE Fridge SET temperature = :temperature, has_ice = :has_ice WHERE fridge_id = :fridge_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':temperature', $fridge_data['temperature']);
        $stmt->bindParam(':has_ice', $fridge_data['has_ice']);
        $stmt->bindParam(':fridge_id', $fridge_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteFridge($fridge_id) {
        $query = "DELETE FROM Fridge WHERE fridge_id = :fridge_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':fridge_id', $fridge_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

