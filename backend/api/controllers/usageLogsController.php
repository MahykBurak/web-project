<?php
require_once 'api/models/usageLogsModel.php';

class UsageLogsController {
    private $model;

    public function __construct() {
        $this->model = new UsageLogsModel();
    }

    public function getAll() {
        $usageLogs = $this->model->getAllUsageLogs();
        return $usageLogs;
    }

    public function getUsageLogById($log_id) {
        $usageLog = $this->model->getUsageLogById($log_id);
        return $usageLog;
    }

    public function create($log_data) {
        $log_id = $this->model->createUsageLog($log_data);
        return $log_id;
    }

    public function update($log_id, $log_data) {
        $success = $this->model->updateUsageLog($log_id, $log_data);
        return $success;
    }

    public function delete($log_id) {
        $success = $this->model->deleteUsageLog($log_id);
        return $success;
    }
}
?>

