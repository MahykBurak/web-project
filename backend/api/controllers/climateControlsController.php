<?php
require_once 'api/models/climateControlsModel.php';

class ClimateControlsController {
    private $model;

    public function __construct() {
        $this->model = new ClimateControlsModel();
    }

    public function getAll() {
        $climateControls = $this->model->getAllClimateControls();
        return $climateControls;
    }

    public function getClimateControlById($control_id) {
        $climateControl = $this->model->getClimateControlById($control_id);
        return $climateControl;
    }

    public function create($control_data) {
        $control_id = $this->model->createClimateControl($control_data);
        return $control_id;
    }

    public function update($control_id, $control_data) {
        $success = $this->model->updateClimateControl($control_id, $control_data);
        return $success;
    }

    public function delete($control_id) {
        $success = $this->model->deleteClimateControl($control_id);
        return $success;
    }
}
?>

