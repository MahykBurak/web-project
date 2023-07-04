<?php
require_once 'api/models/coffeeMachinesModel.php';

class CoffeeMachinesController {
    private $model;

    public function __construct() {
        $this->model = new CoffeeMachinesModel();
    }

    public function getAll() {
        $coffeeMachines = $this->model->getAllCoffeeMachines();
        return $coffeeMachines;
    }

    public function getCoffeeMachineById($machine_id) {
        $coffeeMachine = $this->model->getCoffeeMachineById($machine_id);
        return $coffeeMachine;
    }

    public function create($machine_data) {
        $machine_id = $this->model->createCoffeeMachine($machine_data);
        return $machine_id;
    }

    public function update($machine_id, $machine_data) {
        $success = $this->model->updateCoffeeMachine($machine_id, $machine_data);
        return $success;
    }

    public function delete($machine_id) {
        $success = $this->model->deleteCoffeeMachine($machine_id);
        return $success;
    }
}
?>

