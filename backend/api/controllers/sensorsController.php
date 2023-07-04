<?php
require_once 'api/models/sensorsModel.php';

class SensorsController {
    private $model;

    public function __construct() {
        $this->model = new SensorsModel();
    }

    public function getAll() {
        $sensors = $this->model->getAllSensors();
        return $sensors;
    }

    public function getSensorById($sensor_id) {
        $sensor = $this->model->getSensorById($sensor_id);
        return $sensor;
    }

    public function create($sensor_data) {
        $sensor_id = $this->model->createSensor($sensor_data);
        return $sensor_id;
    }

    public function update($sensor_id, $sensor_data) {
        $success = $this->model->updateSensor($sensor_id, $sensor_data);
        return $success;
    }

    public function delete($sensor_id) {
        $success = $this->model->deleteSensor($sensor_id);
        return $success;
    }
}
?>

