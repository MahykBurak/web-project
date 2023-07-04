<?php
require_once('api/config/database.php');

class ClimateControlsModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllClimateControls() {
        $query = "SELECT * FROM Climate_Controls";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $climateControls = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $climateControls;
    }

    public function getClimateControlById($control_id) {
        $query = "SELECT * FROM Climate_Controls WHERE control_id = :control_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':control_id', $control_id);
        $stmt->execute();
        $climateControl = $stmt->fetch(PDO::FETCH_ASSOC);
        return $climateControl;
    }

    public function createClimateControl($control_data) {
        $query = "INSERT INTO Climate_Controls (device_id, temperature, mode) VALUES (:device_id, :temperature, :mode)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_id', $control_data['device_id']);
        $stmt->bindParam(':temperature', $control_data['temperature']);
        $stmt->bindParam(':mode', $control_data['mode']);
        $stmt->execute();
        $control_id = $this->conn->lastInsertId();
        return $control_id;
    }

    public function updateClimateControl($control_id, $control_data) {
        $query = "UPDATE Climate_Controls SET device_id = :device_id, temperature = :temperature, mode = :mode WHERE control_id = :control_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_id', $control_data['device_id']);
        $stmt->bindParam(':temperature', $control_data['temperature']);
        $stmt->bindParam(':mode', $control_data['mode']);
        $stmt->bindParam(':control_id', $control_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteClimateControl($control_id) {
        $query = "DELETE FROM Climate_Controls WHERE control_id = :control_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':control_id', $control_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

