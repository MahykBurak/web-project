const FridgeCard = () => {
  const FridgeCard = document.createElement('section')
  FridgeCard.classList.add('controlCard')
  FridgeCard.innerHTML = `
  <div class='flex flex-col items-center h-full gap-4 pb-2'>
    <div class='flex mx-auto flex-col justify-center items-center text-center w-full '>
    <i class="ph ph-table text-7xl"></i>
      <h1 class='text-2xl font-bold'>Fridge</h1>
    </div>
    <div id='fridge-container' class='w-ful flex flex-col gap-4 justify-start items-center '> 
      <div class='flex gap-4 items-center w-full justify-between'>
        <span class='text-2xl font-semibold'>Temperature:</span>
        <span class='text-2xl'>15°C</span>
      </div>
      <div class='flex gap-4 items-center w-full justify-between'>
        <span class='text-2xl font-semibold'>Ice Status:</span>
        <span class='text-2xl'>Ready</span>
      </div>
    </div>
  </div>
  `
  return FridgeCard
}

export default FridgeCard
