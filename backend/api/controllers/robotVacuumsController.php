<?php
require_once 'api/models/robotVacuumsModel.php';

class RobotVacuumsController {
    private $model;

    public function __construct() {
        $this->model = new RobotVacuumsModel();
    }

    public function getAllRobotVacuums() {
        $robotVacuums = $this->model->getAllRobotVacuums();
        return $robotVacuums;
    }

    public function getRobotVacuumById($robotVacuum_id) {
        $robotVacuum = $this->model->getRobotVacuumById($robotVacuum_id);
        return $robotVacuum;
    }

    public function createRobotVacuum($robotVacuum_data) {
        $robotVacuum_id = $this->model->createRobotVacuum($robotVacuum_data);
        return $robotVacuum_id;
    }

    public function updateRobotVacuum($robotVacuum_id, $robotVacuum_data) {
        $success = $this->model->updateRobotVacuum($robotVacuum_id, $robotVacuum_data);
        return $success;
    }

    public function deleteRobotVacuum($robotVacuum_id) {
        $success = $this->model->deleteRobotVacuum($robotVacuum_id);
        return $success;
    }
}
?>

