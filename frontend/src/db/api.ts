export interface RoomModel {
  room_id: number
  room_name: string
  room_type: string
}
export interface DeviceModel {
  device_id: number
  device_name: string
  device_type: string
  room_id: number
}
export interface UserModel {
  user_id: number
  username: string
  password: string
}
export interface SensorModel {
  sensor_id: number
  sensor_name: string
  sensor_type: string
  room_id: number
}
export interface CameraModel {
  camera_id: number
  camera_name: string
  room_id: number
}
export interface UserDeviceRelationModel {
  relation_id: number
  user_id: number
  device_id: number
}
export interface ClimateControlModel {
  control_id: number
  device_id: number
  temperature: number
  mode: string
}
export interface CoffeeMachineModel {
  coffee_id: number
  device_id: number
  is_active: number
  delivery_time: Date
}
export interface ResourceModel {
  resource_id: number
  resource_name: string
}
export interface UsageLogModel {
  log_id: number
  device_id: number
  resource_id: number
  usage_minutes: number
  usage_timestamp: Date
}
export interface FridgeModel {
  fridge_id: number
  device_id: number
  temperature: number
  is_ice_available: number
}
export interface LightModel {
  light_id: number
  device_id: number
  is_on: number
}
export interface WashingMachineModel {
  washing_id: number
  device_id: number
  mode: string
  end_time: Date
}
export interface RobotVacuumModel {
  vacuum_id: number
  device_id: number
  is_active: number
}
interface RoomModelRequest {
  room_name: string
  room_type: string
}

interface DeviceModelRequest {
  device_name: string
  device_type: string
  room_id: number
}

interface UserModelRequest {
  username: string
  password: string
}

interface SensorModelRequest {
  sensor_name: string
  sensor_type: string
  room_id: number
}

interface CameraModelRequest {
  camera_name: string
  room_id: number
}

interface UserDeviceRelationModelRequest {
  user_id: number
  device_id: number
}

interface ClimateControlModelRequest {
  device_id: number
  temperature: number
  mode: string
}

interface CoffeeMachineModelRequest {
  device_id: number
  is_active: number
  delivery_time: Date
}

interface ResourceModelRequest {
  resource_name: string
}

interface UsageLogModelRequest {
  device_id: number
  resource_id: number
  usage_minutes: number
  usage_timestamp: Date
}

interface FridgeModelRequest {
  device_id: number
  temperature: number
  is_ice_available: number
}

interface LightModelRequest {
  device_id: number
  is_on: number
}

interface WashingMachineModelRequest {
  device_id: number
  mode: string
  end_time: Date
}

interface RobotVacuumModelRequest {
  device_id: number
  is_active: number
}

export type {
  RoomModelRequest,
  DeviceModelRequest,
  UserModelRequest,
  SensorModelRequest,
  CameraModelRequest,
  UserDeviceRelationModelRequest,
  ClimateControlModelRequest,
  CoffeeMachineModelRequest,
  ResourceModelRequest,
  UsageLogModelRequest,
  FridgeModelRequest,
  LightModelRequest,
  WashingMachineModelRequest,
  RobotVacuumModelRequest,
}
