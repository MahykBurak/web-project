<?php

require_once('api/config/database.php');

class UsersModel {
    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function getAllUsers() {
        $query = "SELECT * FROM Users";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $users;
    }

    public function getUserById($user_id) {
        $query = "SELECT * FROM Users WHERE user_id = :user_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        return $user;
    }

    public function createUser($user_data) {
        $query = "INSERT INTO Users (username, password) VALUES (:username, :password)";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':username', $user_data['username']);
        $stmt->bindParam(':password', $user_data['password']);
        $stmt->execute();
        $user_id = $this->conn->lastInsertId();
        return $user_id;
    }

    public function updateUser($user_id, $user_data) {
        $query = "UPDATE Users SET username = :username, password = :password WHERE user_id = :user_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':username', $user_data['username']);
        $stmt->bindParam(':password', $user_data['password']);
        $stmt->bindParam(':user_id', $user_id);
        $success = $stmt->execute();
        return $success;
    }

    public function deleteUser($user_id) {
        $query = "DELETE FROM Users WHERE user_id = :user_id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':user_id', $user_id);
        $success = $stmt->execute();
        return $success;
    }
}
?>

