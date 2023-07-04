<?php
require_once 'api/models/camerasModel.php';

class CamerasController {
    private $model;

    public function __construct() {
        $this->model = new CamerasModel();
    }

    public function getAll() {
        $cameras = $this->model->getAllCameras();
        return $cameras;
    }

    public function getCameraById($camera_id) {
        $camera = $this->model->getCameraById($camera_id);
        return $camera;
    }

    public function create($camera_data) {
        $camera_id = $this->model->createCamera($camera_data);
        return $camera_id;
    }

    public function update($camera_id, $camera_data) {
        $success = $this->model->updateCamera($camera_id, $camera_data);
        return $success;
    }

    public function delete($camera_id) {
        $success = $this->model->deleteCamera($camera_id);
        return $success;
    }
}
?>

