<?php
require_once('api/config/database.php');

class ResourcesModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllResources() {
        $query = "SELECT * FROM Resources";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $resources = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $resources;
    }

    public function getResourceById($resource_id) {
        $query = "SELECT * FROM Resources WHERE resource_id = :resource_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':resource_id', $resource_id);
        $stmt->execute();
        $resource = $stmt->fetch(PDO::FETCH_ASSOC);
        return $resource;
    }

    public function createResource($resource_data) {
        $query = "INSERT INTO Resources (name, usage_per_minute) VALUES (:name, :usage_per_minute)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':name', $resource_data['name']);
        $stmt->bindParam(':usage_per_minute', $resource_data['usage_per_minute']);
        $stmt->execute();
        $resource_id = $this->conn->lastInsertId();
        return $resource_id;
    }

    public function updateResource($resource_id, $resource_data) {
        $query = "UPDATE Resources SET name = :name, usage_per_minute = :usage_per_minute WHERE resource_id = :resource_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':name', $resource_data['name']);
        $stmt->bindParam(':usage_per_minute', $resource_data['usage_per_minute']);
        $stmt->bindParam(':resource_id', $resource_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteResource($resource_id) {
        $query = "DELETE FROM Resources WHERE resource_id = :resource_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':resource_id', $resource_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

