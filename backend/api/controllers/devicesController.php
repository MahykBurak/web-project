<?php
require_once 'api/models/devicesModel.php';

class DevicesController {
    private $model;

    public function __construct() {
        $this->model = new DevicesModel();
    }

    public function getAll() {
        $devices = $this->model->getAllDevices();
        return $devices;
    }

    public function getDeviceById($device_id) {
        $device = $this->model->getDeviceById($device_id);
        return $device;
    }

    public function create($device_data) {
        $device_id = $this->model->createDevice($device_data);
        return $device_id;
    }

    public function update($device_id, $device_data) {
        $success = $this->model->updateDevice($device_id, $device_data);
        return $success;
    }

    public function delete($device_id) {
        $success = $this->model->deleteDevice($device_id);
        return $success;
    }
}
?>

