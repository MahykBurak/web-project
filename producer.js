const tempature_room = document.getElementById('tempature_room_select')
const tempature_isOpen = document.getElementById('tempature_isOpen')
const tempature_range = document.getElementById('tempature_range')
const tempature_heatMode_isCold = document.getElementById('tempature_heatMode_isCold')
const tempature_fan_isOpen = document.getElementById('tempature_fan_isOpen')
const lights_livingRoom_isOpen = document.getElementById('lights_livingRoom_isOpen')
const lights_kitchen_isOpen = document.getElementById('lights_kitchen_isOpen')
const lights_bedroom_isOpen = document.getElementById('lights_bedroom_isOpen')
const lights_bath_isOpen = document.getElementById('lights_bath_isOpen')
const lights_close_all = document.getElementById('lights_close_all')
const lights_livingRoom_icon_container = document.getElementById("lights_livingRoom_icon_container")
const lights_kitchen_icon_container = document.getElementById("lights_kitchen_icon_container")
const lights_bedroom_icon_container = document.getElementById("lights_bedroom_icon_container")
const lights_bath_icon_container = document.getElementById("lights_bath_icon_container")
const water_hot_range = document.getElementById('water_hot_range')
const water_cold_range = document.getElementById('water_cold_range')
const door_garage_isOpen = document.getElementById("door_garage_isOpen")
const door_frontDoor_isOpen = document.getElementById("door_frontDoor_isOpen")
const door_backDoor_isOpen = document.getElementById("door_backDoor_isOpen")
const door_garden_isOpen = document.getElementById("door_garden_isOpen")
const door_garage_icon_container = document.getElementById("door_garage_icon_container")
const door_frontDoor_icon_container = document.getElementById("door_frontDoor_icon_container")
const door_backDoor_icon_container = document.getElementById("door_backDoor_icon_container")
const door_garden_icon_container = document.getElementById("door_garden_icon_container")
const vacuum_room_select = document.getElementById("vacuum_room_select")
const vacuum_isOpen = document.getElementById("vacuum_isOpen")
const vacuum_time = document.getElementById("vacuum_time")

const lockActiveIcon = document.createElement('i')
const lockDeactiveIcon = document.createElement('i')
lockActiveIcon.className = "fa-solid fa-lock fa-2xl"
lockDeactiveIcon.className = "fa-solid fa-lock-open fa-2xl"

const lightActiveIcon = document.createElement('i')
const lightDeactiveIcon = document.createElement('i')
lightActiveIcon.className = "fa-solid fa-lightbulb fa-2xl"
lightDeactiveIcon.className = "fa-regular fa-lightbulb fa-2xl"


const rooms = {
    1:{

        isOpen:true,

        isCold:true,
        range:55,
        fan:true
    },
    2:{
        isOpen:true,

        isCold:true,
        range:25,
        fan:false
    },
    3:{
        isOpen:true,

        isCold:true,
        range:25,
        fan:true
    }
}
const selectedRoom = 1
function checkLocalStorageValues() {
    // tempature-start
    if (!localStorage.getItem('tempature_selected_room')) {
        localStorage.setItem('tempature_selected_room', selectedRoom);
    }
    if(!localStorage.getItem('tempature_rooms')){
        localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
    }



    // light-start
    if (!localStorage.getItem('lights_livingRoom_isOpen')) {
        localStorage.setItem('lights_livingRoom_isOpen', true);
    }
    if (!localStorage.getItem('lights_kitchen_isOpen')) {
        localStorage.setItem('lights_kitchen_isOpen', false);
    }
    if (!localStorage.getItem('lights_bedroom_isOpen')) {
        localStorage.setItem('lights_bedroom_isOpen', false);
    }
    if (!localStorage.getItem('lights_bath_isOpen')) {
        localStorage.setItem('lights_bath_isOpen', true);
    }
    // light-end

    // Water-start
    if (!localStorage.getItem('water_hot_range')) {
        localStorage.setItem('water_hot_range', 40);
    }
    if (!localStorage.getItem('water_cold_range')) {
        localStorage.setItem('water_cold_range', 30);
    }
    // Water-end

    // Door-start
    if (!localStorage.getItem('door_garage_isOpen')) {
        localStorage.setItem('door_garage_isOpen', false);
    }
    if (!localStorage.getItem('door_frontDoor_isOpen')) {
        localStorage.setItem('door_frontDoor_isOpen', true);
    }
    if (!localStorage.getItem('door_backDoor_isOpen')) {
        localStorage.setItem('door_backDoor_isOpen',false);
    }
    if (!localStorage.getItem('door_garden_isOpen')) {
        localStorage.setItem('door_garden_isOpen',true);
    }
    // Door-end

    // Vacuum-start
    if (!localStorage.getItem('vacuum_room_select')) {
        localStorage.setItem('vacuum_room_select',2);
    }
    if (!localStorage.getItem('vacuum_isOpen')) {
        localStorage.setItem('vacuum_isOpen',true);
    }
    if (!localStorage.getItem('vacuum_time')) {
        localStorage.setItem('vacuum_time',20);
    }
    // Vacuum-end
}
function loadTempatureValues(){
    tempature_room.value = localStorage.getItem('tempature_selected_room');
    const selectedRoom = localStorage.getItem('tempature_selected_room');

    const room = JSON.parse(localStorage.getItem('tempature_rooms'))[selectedRoom]
    console.log(room)
    tempature_isOpen.checked = room.isOpen;
    tempature_range.value = room.range
    tempature_heatMode_isCold.checked = room.isCold
    tempature_fan_isOpen.checked = room.fan
}
function loadLightValues(){
    const lights_livingRoom_current = localStorage.getItem('lights_livingRoom_isOpen') === 'true';
    lights_livingRoom_isOpen.checked =lights_livingRoom_current
    lights_livingRoom_icon_container.innerHTML = ''
    lights_livingRoom_icon_container.appendChild(lights_livingRoom_current ? lightActiveIcon.cloneNode(true) : lightDeactiveIcon.cloneNode(true))

    const lights_kitchen_current = localStorage.getItem('lights_kitchen_isOpen') === 'true';
    lights_kitchen_isOpen.checked =lights_kitchen_current
    lights_kitchen_icon_container.innerHTML = ''
    lights_kitchen_icon_container.appendChild(lights_kitchen_current ? lightActiveIcon.cloneNode(true) : lightDeactiveIcon.cloneNode(true))

    const lights_bedroom_current = localStorage.getItem('lights_bedroom_isOpen') === 'true';
    lights_bedroom_isOpen.checked =lights_bedroom_current
    lights_bedroom_icon_container.innerHTML = ''
    lights_bedroom_icon_container.appendChild(lights_bedroom_current ? lightActiveIcon.cloneNode(true) : lightDeactiveIcon.cloneNode(true))

    const lights_bath_current = localStorage.getItem('lights_bath_isOpen') === 'true';
    lights_bath_isOpen.checked =lights_bath_current
    lights_bath_icon_container.innerHTML = ''
    lights_bath_icon_container.appendChild(lights_bath_current ? lightActiveIcon.cloneNode(true) : lightDeactiveIcon.cloneNode(true))

}
function loadWaterValues(){
    water_hot_range.value = localStorage.getItem('water_hot_range');
    water_cold_range.value = localStorage.getItem('water_cold_range');
}
function loadDoorValues(){
    door_garage_isOpen.checked = localStorage.getItem('door_garage_isOpen') === 'true';
    door_garage_icon_container.innerHTML = ''
    door_garage_icon_container.appendChild(localStorage.getItem('door_garage_isOpen') === 'true' ? lockActiveIcon.cloneNode(true) : lockDeactiveIcon.cloneNode(true))
    door_frontDoor_isOpen.checked = localStorage.getItem('door_frontDoor_isOpen') === 'true';
    door_frontDoor_icon_container.innerHTML = ''
    door_frontDoor_icon_container.appendChild(localStorage.getItem('door_frontDoor_isOpen') === 'true' ? lockActiveIcon.cloneNode(true) : lockDeactiveIcon.cloneNode(true))
    door_backDoor_isOpen.checked = localStorage.getItem('door_backDoor_isOpen') === 'true';
    door_backDoor_icon_container.innerHTML = ''
    door_backDoor_icon_container.appendChild(localStorage.getItem('door_backDoor_isOpen') === 'true' ? lockActiveIcon.cloneNode(true) : lockDeactiveIcon.cloneNode(true))
    door_garden_isOpen.checked = localStorage.getItem('door_garden_isOpen') === 'true';
    door_garden_icon_container.innerHTML = ''
    door_garden_icon_container.appendChild(localStorage.getItem('door_garden_isOpen') === 'true' ? lockActiveIcon.cloneNode(true) : lockDeactiveIcon.cloneNode(true))

}
function loadVacuumValues(){
    vacuum_room_select.value = localStorage.getItem('vacuum_room_select');
    vacuum_isOpen.checked = localStorage.getItem('vacuum_isOpen') === 'true';
    vacuum_time.value = localStorage.getItem('vacuum_time');

}

checkLocalStorageValues();
loadTempatureValues();
loadLightValues();
loadWaterValues();
loadDoorValues();
loadVacuumValues();

//tempature-start
tempature_room.addEventListener('change',(event) => {
    const val = event.target.value
    loadTempatureValues()
    localStorage.setItem('tempature_selected_room',val)
})
tempature_isOpen.addEventListener('change',(event) => {
    const val = event.target.checked
    const currentRoom = localStorage.getItem("tempature_selected_room")
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    rooms[currentRoom].isOpen = val
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
})
tempature_range.addEventListener("change", (event) => {
    const val = event.target.value
    const currentRoom = localStorage.getItem("tempature_selected_room")
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    rooms[currentRoom].range = +val
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
})
tempature_heatMode_isCold.addEventListener("change", (event) => {
    const val = event.target.checked
    const currentRoom = localStorage.getItem("tempature_selected_room")
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    rooms[currentRoom].isCold = val
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
})
tempature_fan_isOpen.addEventListener("change", (event) => {
    const val = event.target.checked
    const currentRoom = localStorage.getItem("tempature_selected_room")
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    rooms[currentRoom].fan = val
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
})
//tempature-end

//light-start
lights_livingRoom_isOpen.addEventListener("change", (event) => {
    const val = event.target.checked
    localStorage.setItem('lights_livingRoom_isOpen',val)
    loadLightValues()
})
lights_kitchen_isOpen.addEventListener("change", (event) => {
    const val = event.target.checked
    localStorage.setItem('lights_kitchen_isOpen',val)
    loadLightValues()
})

lights_bedroom_isOpen.addEventListener("change", (event) => {
    const val = event.target.checked
    localStorage.setItem('lights_bedroom_isOpen',val)
    loadLightValues()
})
lights_bath_isOpen.addEventListener("change", (event) => {
    const val = event.target.checked
    localStorage.setItem('lights_bath_isOpen',val)
    loadLightValues()
})
lights_close_all.addEventListener("click", (event) => {
    localStorage.setItem('lights_livingRoom_isOpen',false)
    localStorage.setItem('lights_kitchen_isOpen',false)
    localStorage.setItem('lights_bedroom_isOpen',false)
    localStorage.setItem('lights_bath_isOpen',false)
    loadLightValues()
})
//light-end

//Water-start


water_hot_range.addEventListener("change", (event) => {
    const val = event.target.value
    localStorage.setItem('water_hot_range',val)
})

water_cold_range.addEventListener("change", (event) => {
    const val = event.target.value
    localStorage.setItem('water_cold_range',val)
})

//Water-end

//Door-start
door_garage_isOpen.addEventListener("change",(event) => {
    const val = event.target.checked
    localStorage.setItem("door_garage_isOpen",val)
    loadDoorValues()
})
door_frontDoor_isOpen.addEventListener("change",(event) => {
    const val = event.target.checked
    localStorage.setItem("door_frontDoor_isOpen",val)
    loadDoorValues()
})
door_backDoor_isOpen.addEventListener("change",(event) => {
    const val = event.target.checked
    localStorage.setItem("door_backDoor_isOpen",val)
    loadDoorValues()
})
door_garden_isOpen.addEventListener("change",(event) => {
    const val = event.target.checked
    localStorage.setItem("door_garden_isOpen",val)
    loadDoorValues()
})
//Door-end

//Vacuum-start

vacuum_room_select.addEventListener("change",(event) => {
    const val = event.target.value
    localStorage.setItem("vacuum_room_select",val)
})
vacuum_isOpen.addEventListener("change",(event) => {
    const val = event.target.checked
    localStorage.setItem("vacuum_isOpen",val)

})
vacuum_time.addEventListener("change",(event) => {
    const val = event.target.value
    localStorage.setItem("vacuum_time",val)

})