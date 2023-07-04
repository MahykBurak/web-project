<?php
require_once 'api/models/fridgeModel.php';

class FridgeController {
    private $model;

    public function __construct() {
        $this->model = new FridgeModel();
    }

    public function getAll() {
        $fridges = $this->model->getAllFridges();
        return $fridges;
    }

    public function getFridgeById($fridge_id) {
        $fridge = $this->model->getFridgeById($fridge_id);
        return $fridge;
    }

    public function create($fridge_data) {
        $fridge_id = $this->model->createFridge($fridge_data);
        return $fridge_id;
    }

    public function update($fridge_id, $fridge_data) {
        $success = $this->model->updateFridge($fridge_id, $fridge_data);
        return $success;
    }

    public function delete($fridge_id) {
        $success = $this->model->deleteFridge($fridge_id);
        return $success;
    }
}
?>

