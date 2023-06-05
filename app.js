
const heat_room_select = document.getElementById('heat_room_select');
const heat_tempature = document.getElementById('heat_tempature');
const heat_status = document.getElementById('heat_status');
const heat_isCold = document.getElementById('heat_isCold');
const heat_fan = document.getElementById('heat_fan');
const snow = document.createElement('i')
const vacuum_room_select = document.getElementById('vacuum_room_select');
const  cleaner_status = document.getElementById('cleaner_status');
const cleaner_time = document.getElementById('cleaner_time');
const lights_living = document.getElementById("lights_living")
const lights_kitchen = document.getElementById("lights_kitchen")
const lights_bath = document.getElementById("lights_bath")
const lights_bedroom = document.getElementById("lights_bedroom")
const lights_living_btn = document.getElementById("lights_living_btn")
const lights_kitchen_btn = document.getElementById("lights_kitchen_btn")
const lights_bath_btn = document.getElementById("lights_bath_btn")
const lights_bedroom_btn = document.getElementById("lights_bedroom_btn")
const water_hot_minus = document.getElementById("water_hot_minus")
const water_hot_tempature = document.getElementById("water_hot_tempature")
const water_hot_plus = document.getElementById("water_hot_plus")
const water_cold_minus = document.getElementById("water_cold_minus")
const water_cold_tempature = document.getElementById("water_cold_tempature")
const water_cold_plus = document.getElementById("water_cold_plus")
const doors_garage  = document.getElementById("doors_garage")
const doors_front  = document.getElementById("doors_front")
const doors_back  = document.getElementById("doors_back")
const doors_garden  = document.getElementById("doors_garden")
snow.className ='fa-solid fa-snowflake'
const sun = document.createElement('i')
sun.className = 'fa-solid fa-sun'
const fanIcon = document.createElement('i')
fanIcon.className = 'fa-solid fa-fan'

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
checkLocalStorageValues()
function loadTempatureValues(){
    heat_room_select.value = localStorage.getItem('tempature_selected_room');
    const selectedRoom = localStorage.getItem('tempature_selected_room');
    heat_isCold.innerHTML = ''
    heat_fan.innerHTML = ''
    const room = JSON.parse(localStorage.getItem('tempature_rooms'))[selectedRoom]
    console.log(room)
    const open = room.isOpen;
    const heat = room.range
    const cold = room.isCold
    const fan = room.fan
    heat_status.innerHTML = open ? 'ON' : 'OFF';
    heat_tempature.innerHTML = heat;
    heat_isCold.appendChild(  cold ? snow.cloneNode(true) : sun.cloneNode(true))
    if(fan){
        heat_fan.appendChild(fanIcon.cloneNode(true))
    }

}
loadTempatureValues()
const heat_minus = document.getElementById('heat_minus');
const heat_plus = document.getElementById('heat_plus');
heat_minus.addEventListener('click',()=>{
    const currentRoom = localStorage.getItem('tempature_selected_room');
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    const current = rooms[currentRoom].range
    rooms[currentRoom].range = current > 0 ? current - 1 : 0
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
    loadTempatureValues()
})
heat_plus.addEventListener('click',()=>{
    const currentRoom = localStorage.getItem('tempature_selected_room');
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    const current = rooms[currentRoom].range
    rooms[currentRoom].range = current < 35 ? current + 1 : 35
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
    loadTempatureValues()
})
heat_room_select.addEventListener('change',()=>{
    const val = heat_room_select.value
    localStorage.setItem('tempature_selected_room',val)
    loadTempatureValues()
})
heat_status.addEventListener('click',()=>{
    const currentRoom = localStorage.getItem('tempature_selected_room');
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    const current = rooms[currentRoom].isOpen
    rooms[currentRoom].isOpen = !current
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
    loadTempatureValues()
})
heat_isCold.addEventListener('click',()=>{
    const currentRoom = localStorage.getItem('tempature_selected_room');
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    const current = rooms[currentRoom].isCold
    rooms[currentRoom].isCold = !current
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
    loadTempatureValues()
})
heat_fan.addEventListener('click',()=>{
    const currentRoom = localStorage.getItem('tempature_selected_room');
    const rooms = JSON.parse(localStorage.getItem('tempature_rooms'))
    const current = rooms[currentRoom].fan
    rooms[currentRoom].fan = !current
    localStorage.setItem('tempature_rooms',JSON.stringify(rooms))
    loadTempatureValues()
})

function loadVacuum (){
    const selected_room = localStorage.getItem('vacuum_room_select')
    vacuum_room_select.innerHTML = selected_room  == 1 ? 'Living Room' : selected_room == 2 ? 'Bedroom' : 'Kitchen'
    const time = localStorage.getItem('vacuum_time')
    cleaner_time.innerHTML = time + ' min'
    const isOpen = localStorage.getItem('vacuum_isOpen')
    cleaner_status.innerHTML = isOpen == 'true' ? 'Running' : 'OFF'
}
loadVacuum()

function loadLightValues(){
    const lights_livingRoom_current = localStorage.getItem('lights_livingRoom_isOpen') === 'true';
    lights_living.innerHTML = ''
    lights_living.appendChild(lights_livingRoom_current ? lightActiveIcon.cloneNode(true) : lightDeactiveIcon.cloneNode(true))

    const lights_kitchen_current = localStorage.getItem('lights_kitchen_isOpen') === 'true';
    lights_kitchen.innerHTML = ''
    lights_kitchen.appendChild(lights_kitchen_current ? lightActiveIcon.cloneNode(true) : lightDeactiveIcon.cloneNode(true))

    const lights_bedroom_current = localStorage.getItem('lights_bedroom_isOpen') === 'true';
    lights_bedroom.innerHTML = ''
    lights_bedroom.appendChild(lights_bedroom_current ? lightActiveIcon.cloneNode(true) : lightDeactiveIcon.cloneNode(true))

    const lights_bath_current = localStorage.getItem('lights_bath_isOpen') === 'true';
    lights_bath.innerHTML = ''
    lights_bath.appendChild(lights_bath_current ? lightActiveIcon.cloneNode(true) : lightDeactiveIcon.cloneNode(true))
}
loadLightValues()
lights_living_btn.addEventListener("click",() => {
    const current = localStorage.getItem("lights_livingRoom_isOpen")
    localStorage.setItem("lights_livingRoom_isOpen",current === 'true' ? 'false' : 'true')
    loadLightValues()
})
lights_kitchen_btn.addEventListener("click",() => {
    const current = localStorage.getItem("lights_kitchen_isOpen")
    localStorage.setItem("lights_kitchen_isOpen",current === 'true' ? 'false' : 'true')
    loadLightValues()
})
lights_bath_btn.addEventListener("click",() => {
    const current = localStorage.getItem("lights_bath_isOpen")
    localStorage.setItem("lights_bath_isOpen",current === 'true' ? 'false' : 'true')
    loadLightValues()
})
lights_bedroom_btn.addEventListener("click",() => {
    const current = localStorage.getItem("lights_bedroom_isOpen")
    localStorage.setItem("lights_bedroom_isOpen",current === 'true' ? 'false' : 'true')
    loadLightValues()
})


function loadWater () {
    const hot = localStorage.getItem('water_hot_range')
    const cold = localStorage.getItem('water_cold_range')
    water_hot_tempature.innerHTML = hot + '°C'
    water_cold_tempature.innerHTML = cold + '°C'
}
loadWater()

water_hot_minus.addEventListener('click',()=>{
    const current = localStorage.getItem('water_hot_range')
    localStorage.setItem('water_hot_range',current > 25 ? parseInt(current) - 1 : 25)
    loadWater()
})
water_hot_plus.addEventListener('click',()=>{
    const current = localStorage.getItem('water_hot_range')
    localStorage.setItem('water_hot_range',current < 50 ? parseInt(current) + 1 : 50)
    loadWater()
}   )
water_cold_minus.addEventListener('click',()=>{
    const current = localStorage.getItem('water_cold_range')
    localStorage.setItem('water_cold_range',current > 5 ? parseInt(current) - 1 : 5)
    loadWater()
}
)
water_cold_plus.addEventListener('click',()=>{
    const current = localStorage.getItem('water_cold_range')
    localStorage.setItem('water_cold_range',current < 20 ? parseInt(current) + 1 : 20)
    loadWater()
}
)
function loadDoorValues(){

    doors_garage.innerHTML = ''
    doors_garage.appendChild(localStorage.getItem('door_garage_isOpen') === 'true' ? lockActiveIcon.cloneNode(true) : lockDeactiveIcon.cloneNode(true))

    doors_front.innerHTML = ''
    doors_front.appendChild(localStorage.getItem('door_frontDoor_isOpen') === 'true' ? lockActiveIcon.cloneNode(true) : lockDeactiveIcon.cloneNode(true))

    doors_back.innerHTML = ''
    doors_back.appendChild(localStorage.getItem('door_backDoor_isOpen') === 'true' ? lockActiveIcon.cloneNode(true) : lockDeactiveIcon.cloneNode(true))

    doors_garden.innerHTML = ''
    doors_garden.appendChild(localStorage.getItem('door_garden_isOpen') === 'true' ? lockActiveIcon.cloneNode(true) : lockDeactiveIcon.cloneNode(true))

}
loadDoorValues()


function updateClock() {
    var clockElement = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Saat ve saniyeleri iki haneli sayılara dönüştürme
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Saat ve saniyeleri güncelleme
    var clockText = hours + ":" + minutes
    clockElement.textContent = clockText;
}


setInterval(updateClock, 1000);

var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        //months
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: 'Electricity Consumption',
            data: [1611, 3452, 4345, 3125, 2324, 148],
            backgroundColor: 'rgba(230,0 , 0, 0.5)',
            borderColor: 'rgba(200,0 , 0, 0.5)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["10:00", '12:00', '14:00', '16:00', '18:00', '20:00'],
        datasets: [{
            label: 'Heat Difference',
            data: [16, 32, 45, 35, 24, 33],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
