<?php
require_once 'api/models/washingModel.php';

class WashingController {
    private $model;

    public function __construct() {
        $this->model = new WashingModel();
    }

    public function getAll() {
        $washingMachines = $this->model->getAllWashingMachines();
        return $washingMachines;
    }

    public function getWashingMachineById($washingMachine_id) {
        $washingMachine = $this->model->getWashingMachineById($washingMachine_id);
        return $washingMachine;
    }

    public function create($washingMachine_data) {
        $washingMachine_id = $this->model->createWashingMachine($washingMachine_data);
        return $washingMachine_id;
    }

    public function update($washingMachine_id, $washingMachine_data) {
        $success = $this->model->updateWashingMachine($washingMachine_id, $washingMachine_data);
        return $success;
    }

    public function delete($washingMachine_id) {
        $success = $this->model->deleteWashingMachine($washingMachine_id);
        return $success;
    }
}
?>

