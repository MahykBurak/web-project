<?php
require_once('api/config/database.php');

class UsageLogsModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllUsageLogs() {
        $query = "SELECT * FROM Usage_Logs";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $usageLogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $usageLogs;
    }

    public function getUsageLogById($log_id) {
        $query = "SELECT * FROM Usage_Logs WHERE log_id = :log_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':log_id', $log_id);
        $stmt->execute();
        $usageLog = $stmt->fetch(PDO::FETCH_ASSOC);
        return $usageLog;
    }

    public function createUsageLog($log_data) {
        $query = "INSERT INTO Usage_Logs (device_id, resource_id, usage_duration) VALUES (:device_id, :resource_id, :usage_duration)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_id', $log_data['device_id']);
        $stmt->bindParam(':resource_id', $log_data['resource_id']);
        $stmt->bindParam(':usage_duration', $log_data['usage_duration']);
        $stmt->execute();
        $log_id = $this->conn->lastInsertId();
        return $log_id;
    }

    public function updateUsageLog($log_id, $log_data) {
        $query = "UPDATE Usage_Logs SET device_id = :device_id, resource_id = :resource_id, usage_duration = :usage_duration WHERE log_id = :log_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':device_id', $log_data['device_id']);
        $stmt->bindParam(':resource_id', $log_data['resource_id']);
        $stmt->bindParam(':usage_duration', $log_data['usage_duration']);
        $stmt->bindParam(':log_id', $log_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteUsageLog($log_id) {
        $query = "DELETE FROM Usage_Logs WHERE log_id = :log_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':log_id', $log_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

