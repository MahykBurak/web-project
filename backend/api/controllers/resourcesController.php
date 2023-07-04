<?php
require_once 'api/models/resourcesModel.php';

class ResourcesController {
    private $model;

    public function __construct() {
        $this->model = new ResourcesModel();
    }

    public function getAll() {
        $resources = $this->model->getAllResources();
        return $resources;
    }

    public function getResourceById($resource_id) {
        $resource = $this->model->getResourceById($resource_id);
        return $resource;
    }

    public function create($resource_data) {
        $resource_id = $this->model->createResource($resource_data);
        return $resource_id;
    }

    public function update($resource_id, $resource_data) {
        $success = $this->model->updateResource($resource_id, $resource_data);
        return $success;
    }

    public function delete($resource_id) {
        $success = $this->model->deleteResource($resource_id);
        return $success;
    }
}
?>

