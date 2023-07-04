<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');

require_once 'api/controllers/roomsController.php';
require_once 'api/controllers/devicesController.php';
require_once 'api/controllers/usersController.php';
require_once 'api/controllers/sensorsController.php';
require_once 'api/controllers/camerasController.php';
require_once 'api/controllers/climateControlsController.php';
require_once 'api/controllers/coffeeMachinesController.php';
require_once 'api/controllers/resourcesController.php';
require_once 'api/controllers/usageLogsController.php';
require_once 'api/controllers/fridgeController.php';
require_once 'api/controllers/lightsController.php';
require_once 'api/controllers/washingController.php';
require_once 'api/controllers/robotVacuumsController.php';

$requestMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

$route = str_replace("/index.php", "", $uri);
$route = strtok($route, '?');
switch ($route) {
    case '/rooms':
        $roomsController = new RoomsController();
        handleRequest($requestMethod, $roomsController);
        break;
    case '/devices':
        $devicesController = new DevicesController();
        handleRequest($requestMethod, $devicesController);
        break;
    case '/users':
        $usersController = new UsersController();
        handleRequest($requestMethod, $usersController);
        break;
    case '/sensors':
        $sensorsController = new SensorsController();
        handleRequest($requestMethod, $sensorsController);
        break;
    case '/cameras':
        $camerasController = new CamerasController();
        handleRequest($requestMethod, $camerasController);
        break;
    case '/climateControls':
        $climateControlsController = new ClimateControlsController();
        handleRequest($requestMethod, $climateControlsController);
        break;
    case '/coffeeMachines':
        $coffeeMachinesController = new CoffeeMachinesController();
        handleRequest($requestMethod, $coffeeMachinesController);
        break;
    case '/resources':
        $resourcesController = new ResourcesController();
        handleRequest($requestMethod, $resourcesController);
        break;
    case '/usageLogs':
        $usageLogsController = new UsageLogsController();
        handleRequest($requestMethod, $usageLogsController);
        break;
    case '/fridge':
        $fridgeController = new FridgeController();
        handleRequest($requestMethod, $fridgeController);
        break;
    case '/lights':
        $lightsController = new LightsController();
        handleRequest($requestMethod, $lightsController);
        break;
    case '/washing':
        $washingController = new WashingController();
        handleRequest($requestMethod, $washingController);
        break;
    case '/robotVacuums':
        $robotVacuumsController = new RobotVacuumsController();
        handleRequest($requestMethod, $robotVacuumsController);
        break;
    default:
        http_response_code(404);
        echo json_encode(array("message" => "Endpoint not found."));
        break;
}

function handleRequest($requestMethod, $controller) {
    switch ($requestMethod) {
        case 'GET':
            $response = $controller->getAll();
            echo json_encode($response);
            break;
        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            $response = $controller->create($data);
            echo json_encode($response);
            break;
        case 'PUT':
            $data = json_decode(file_get_contents('php://input'), true);
            $response = $controller->update($data);
            echo json_encode($response);
            break;
        case 'DELETE':
            $id = $_GET['id'];
            $data = json_decode(file_get_contents('php://input'), true);
            $response = $controller->delete($id);
            echo json_encode($response);
            break;
        default:
            http_response_code(405);
            echo json_encode(array("message" => "Method not allowed."));
            break;
    }
}
?>

