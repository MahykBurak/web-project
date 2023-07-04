<?php
require_once 'api/models/lightsModel.php';

class LightsController {
    private $model;

    public function __construct() {
        $this->model = new LightsModel();
    }

    public function getAll() {
        $lights = $this->model->getAllLights();
        return $lights;
    }

    public function getLightById($light_id) {
        $light = $this->model->getLightById($light_id);
        return $light;
    }

    public function create($light_data) {
        $light_id = $this->model->createLight($light_data);
        return $light_id;
    }

    public function update($light_id, $light_data) {
        $success = $this->model->updateLight($light_id, $light_data);
        return $success;
    }

    public function delete($light_id) {
        $success = $this->model->deleteLight($light_id);
        return $success;
    }
}
?>

