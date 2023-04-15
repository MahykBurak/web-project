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

function loadAC(ac){
  const { heat, air, cold, hot } = ac
  const heatValue = document.getElementById('heat-value')
  const heatControlAir = document.getElementById('heat-control-air')
  const heatControlCold = document.getElementById('heat-control-cold')
  const heatControlHot = document.getElementById('heat-control-hot')
  const AirActiveIcon = '<img src="assets/air.png"/>'
  const AirInactiveIcon ='<img src="assets/air-inactive.png"/>'
  const ColdActiveIcon = '<img src="assets/cold.png"/>'
  const ColdInactiveIcon = '<img src="assets/cold-inactive.png"/>'
  const HotActiveIcon = '<img src="assets/sun.png"/>'
  const HotInactiveIcon = '<img src="assets/sun-inactive.png"/>'
  heatValue.innerHTML = heat
  if(air){
    heatControlAir.classList.add('active-control')
    heatControlAir.innerHTML = AirActiveIcon
  }else{
    heatControlAir.classList.remove('active-control')
    heatControlAir.classList.add('inactive-control')
    heatControlAir.innerHTML = AirInactiveIcon
  }
  if(cold){
    heatControlCold.classList.add('active-control')
    heatControlCold.innerHTML = ColdActiveIcon
  }else{
    heatControlCold.classList.remove('active-control')
    heatControlCold.classList.add('inactive-control')
    heatControlCold.innerHTML = ColdInactiveIcon
  }
  if(hot){
    heatControlHot.classList.add('active-control')
    heatControlHot.innerHTML = HotActiveIcon
  }else{
    heatControlHot.classList.remove('active-control')
    heatControlHot.classList.add('inactive-control')
    heatControlHot.innerHTML = HotInactiveIcon
  }
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