
const heat_room_select = document.getElementById('heat_room_select');
const heat_tempature = document.getElementById('heat_tempature');
const heat_status = document.getElementById('heat_status');
const heat_isCold = document.getElementById('heat_isCold');
const heat_fan = document.getElementById('heat_fan');
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

    const room = JSON.parse(localStorage.getItem('tempature_rooms'))[selectedRoom]
    console.log(room)
    const open = room.isOpen;
    const heat = room.range
    const cold = room.isCold
    const fan = room.fan
    heat_status.innerHTML = open ? 'ON' : 'OFF';

}
loadTempatureValues()




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
