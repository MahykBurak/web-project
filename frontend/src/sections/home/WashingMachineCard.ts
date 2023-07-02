const WashingMachineCard = () => {
  const WashingMachineCard = document.createElement('section')
  WashingMachineCard.classList.add('controlCard')
  WashingMachineCard.innerHTML = `
  <div class='flex flex-col items-center h-full gap-4 pb-2'>
    <div class='flex mx-auto flex-col justify-center items-center text-center w-full '>
    <i class="ph ph-t-shirt text-7xl"></i>
      <h1 class='text-2xl font-bold'>Washing Machine</h1>
    </div>
    <div id='washing-machine-container' class='w-ful flex flex-col gap-4 justify-start items-center '> 
      <div class='flex gap-4 items-center w-full justify-between'>
        <span class='text-2xl font-semibold'>Mode:</span>
        <span class='text-2xl'>White</span>
      </div>
      <div class='flex gap-4 items-center w-full justify-between'>
        <span class='text-2xl font-semibold'>End Time:</span>
        <span class='text-2xl'>15 Min</span>
      </div>
    </div>
  </div>
  `
  return WashingMachineCard
}

export default WashingMachineCard
