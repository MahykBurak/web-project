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