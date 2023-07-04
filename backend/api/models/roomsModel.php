<?php

require_once('api/config/database.php');

class RoomsModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllRooms() {
        $query = "SELECT * FROM Rooms";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $rooms = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rooms;
    }

    public function getRoomById($room_id) {
        $query = "SELECT * FROM Rooms WHERE room_id = :room_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':room_id', $room_id);
        $stmt->execute();
        $room = $stmt->fetch(PDO::FETCH_ASSOC);
        return $room;
    }

    public function createRoom($room_data) {
        $query = "INSERT INTO Rooms (room_name, room_type) VALUES (:room_name, :room_type)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':room_name', $room_data['room_name']);
        $stmt->bindParam(':room_type', $room_data['room_type']);
        $stmt->execute();
        $room_id = $this->conn->lastInsertId();
        return $room_id;
    }

    public function updateRoom($room_id, $room_data) {
        $query = "UPDATE Rooms SET room_name = :room_name, room_type = :room_type WHERE room_id = :room_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':room_name', $room_data['room_name']);
        $stmt->bindParam(':room_type', $room_data['room_type']);
        $stmt->bindParam(':room_id', $room_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteRoom($room_id) {
        $query = "DELETE FROM Rooms WHERE room_id = :room_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':room_id', $room_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

