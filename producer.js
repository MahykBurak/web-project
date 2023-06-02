const tempature_room = document.getElementById('tempature_room_select')
const tempature_isOpen = document.getElementById('tempature_isOpen')
const tempature_range = document.getElementById('tempature_range')
const tempature_heatMode_isCold = document.getElementById('tempature_heatMode_isCold')
const tempature_fan_isOpen = document.getElementById('tempature_fan_isOpen')
tempature_room.addEventListener('change',(event) => {
    const val = event.target.value
    localStorage.setItem('tempature_selected_room',val)
})
tempature_isOpen.addEventListener('change',(event) => {
    const val = event.target.checked
    localStorage.setItem('tempature_isOpen',val)
})
tempature_range.addEventListener("change", (event) => {
    const val = event.target.value
    localStorage.setItem('tempature_range',val)
})
tempature_heatMode_isCold.addEventListener("change", (event) => {
    const val = event.target.checked
    localStorage.setItem('tempature_heatMode_isCold',val)
})
tempature_fan_isOpen.addEventListener("change", (event) => {
    const val = event.target.checked
    localStorage.setItem('tempature_fan_isOpen',val)
})