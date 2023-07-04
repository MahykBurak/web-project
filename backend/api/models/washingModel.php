<?php
require_once('api/config/database.php');

class WashingModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllWashingMachines() {
        $query = "SELECT * FROM Washing_Machines";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $washingMachines = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $washingMachines;
    }

    public function getWashingMachineById($washingMachine_id) {
        $query = "SELECT * FROM Washing_Machines WHERE washingMachine_id = :washingMachine_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':washingMachine_id', $washingMachine_id);
        $stmt->execute();
        $washingMachine = $stmt->fetch(PDO::FETCH_ASSOC);
        return $washingMachine;
    }

    public function createWashingMachine($washingMachine_data) {
        $query = "INSERT INTO Washing_Machines (status, mode, remaining_time) VALUES (:status, :mode, :remaining_time)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':status', $washingMachine_data['status']);
        $stmt->bindParam(':mode', $washingMachine_data['mode']);
        $stmt->bindParam(':remaining_time', $washingMachine_data['remaining_time']);
        $stmt->execute();
        $washingMachine_id = $this->conn->lastInsertId();
        return $washingMachine_id;
    }

    public function updateWashingMachine($washingMachine_id, $washingMachine_data) {
        $query = "UPDATE Washing_Machines SET status = :status, mode = :mode, remaining_time = :remaining_time WHERE washingMachine_id = :washingMachine_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':status', $washingMachine_data['status']);
        $stmt->bindParam(':mode', $washingMachine_data['mode']);
        $stmt->bindParam(':remaining_time', $washingMachine_data['remaining_time']);
        $stmt->bindParam(':washingMachine_id', $washingMachine_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteWashingMachine($washingMachine_id) {
        $query = "DELETE FROM Washing_Machines WHERE washingMachine_id = :washingMachine_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':washingMachine_id', $washingMachine_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

