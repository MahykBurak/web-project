<?php


require_once('api/models/usersModel.php');
class UsersController {
    private $model;

    public function __construct() {
        $this->model = new UsersModel();
    }

    public function getAll() {
        $users = $this->model->getAllUsers();
        return $users;
    }

    public function getUserById($user_id) {
        $user = $this->model->getUserById($user_id);
        return $user;
    }

    public function create($user_data) {
        $user_id = $this->model->createUser($user_data);
        return $user_id;
    }

    public function update($user_id, $user_data) {
        $success = $this->model->updateUser($user_id, $user_data);
        return $success;
    }

    public function delete($user_id) {
        $success = $this->model->deleteUser($user_id);
        return $success;
    }
}
?>

