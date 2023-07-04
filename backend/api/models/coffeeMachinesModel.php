<?php
require_once('api/config/database.php');

class CoffeeMachinesModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllCoffeeMachines() {
        $query = "SELECT * FROM Coffee_Machines";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $coffeeMachines = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $coffeeMachines;
    }

    public function getCoffeeMachineById($machine_id) {
        $query = "SELECT * FROM Coffee_Machines WHERE machine_id = :machine_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':machine_id', $machine_id);
        $stmt->execute();
        $coffeeMachine = $stmt->fetch(PDO::FETCH_ASSOC);
        return $coffeeMachine;
    }

    public function createCoffeeMachine($machine_data) {
        $query = "INSERT INTO Coffee_Machines (device_id, working_status, delivery_time) VALUES (:device_id, :working_status, :delivery_time)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_id', $machine_data['device_id']);
        $stmt->bindParam(':working_status', $machine_data['working_status']);
        $stmt->bindParam(':delivery_time', $machine_data['delivery_time']);
        $stmt->execute();
        $machine_id = $this->conn->lastInsertId();
        return $machine_id;
    }

    public function updateCoffeeMachine($machine_id, $machine_data) {
        $query = "UPDATE Coffee_Machines SET device_id = :device_id, working_status = :working_status, delivery_time = :delivery_time WHERE machine_id = :machine_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_id', $machine_data['device_id']);
        $stmt->bindParam(':working_status', $machine_data['working_status']);
        $stmt->bindParam(':delivery_time', $machine_data['delivery_time']);
        $stmt->bindParam(':machine_id', $machine_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteCoffeeMachine($machine_id) {
        $query = "DELETE FROM Coffee_Machines WHERE machine_id = :machine_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':machine_id', $machine_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

