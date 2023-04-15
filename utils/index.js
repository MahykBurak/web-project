function setInfo(){
  const date = new Date()
  const currentTime = `${date.getHours()}.${date.getMinutes()}`
  const todayName = date.toLocaleString('en-us', { weekday: 'long' })
  const today = date.getDay()
  const dayNumberContainer = document.getElementById('day-number')
  const dayTextContainer = document.getElementById('day-text')
  const timeContainer = document.getElementById('time')
  dayNumberContainer.innerHTML = today
  dayTextContainer.innerHTML = todayName
timeContainer.innerHTML = currentTime
}
function loadLights(lights){
  const {kitchen, livingRoom, saloon, bath}=lights
  const lightsKitchenImg = document.getElementById('lights-kitchen-img')
  const lightsLivingRoomImg = document.getElementById('lights-living-img')
  const lightsSaloonImg = document.getElementById('lights-saloon-img')
  const lightsBathImg = document.getElementById('lights-bath-img')
  const lightsKitchenActiveIcon = '<img src="assets/lights-on.png"/>'
  const lightsKitchenInactiveIcon = '<img src="assets/lights-off.png"/>'

  if(kitchen){
    lightsKitchenImg.innerHTML=lightsKitchenActiveIcon
  }else{
    lightsKitchenImg.innerHTML=lightsKitchenInactiveIcon
  }
  if(livingRoom){
    lightsLivingRoomImg.innerHTML=lightsKitchenActiveIcon
  }else{
    lightsLivingRoomImg.innerHTML=lightsKitchenInactiveIcon
  }
  if(saloon){
    lightsSaloonImg.innerHTML=lightsKitchenActiveIcon
  }else{
    lightsSaloonImg.innerHTML=lightsKitchenInactiveIcon
  }
  if(bath){
    lightsBathImg.innerHTML=lightsKitchenActiveIcon
  }else{
    lightsBathImg.innerHTML=lightsKitchenInactiveIcon
  }
}

export { setInfo,loadAC ,loadLights}