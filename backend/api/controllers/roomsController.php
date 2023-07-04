<?php

require_once('api/models/roomsModel.php');

class RoomsController {
    private $model;

    public function __construct() {
        $this->model = new RoomsModel();
    }

    public function getAll() {
        $rooms = $this->model->getAllRooms();
        return $rooms;
    }

    public function getRoomById($room_id) {
        $room = $this->model->getRoomById($room_id);
        return $room;
    }

    public function create($room_data) {
        $room_id = $this->model->createRoom($room_data);
        return $room_id;
    }

    public function update($room_id, $room_data) {
        $success = $this->model->updateRoom($room_id, $room_data);
        return $success;
    }

    public function delete($room_id) {
        $success = $this->model->deleteRoom($room_id);
        return $success;
    }
}
?>

