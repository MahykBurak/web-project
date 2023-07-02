const CoffeCard = () => {
  const CoffeCard = document.createElement('section')
  CoffeCard.classList.add('controlCard')
  CoffeCard.innerHTML = `
  <div class='flex flex-col items-center h-full gap-4 pb-2'>
    <div class='flex mx-auto flex-col justify-center items-center text-center w-full '>
    <i class="ph ph-coffee text-7xl"></i>
      <h1 class='text-2xl font-bold'>Coffe</h1>
    </div>
    <div id='coffe-container' class='w-ful flex flex-col gap-4 justify-start items-center '> 
      <div class='flex gap-4 items-center w-full justify-between'>
        <span class='text-2xl font-semibold'>Current Status:</span>
        <span class='text-2xl'>Running</span>
      </div>
      <div class='flex gap-4 items-center w-full justify-between'>
        <span class='text-2xl font-semibold'>Delivery Time:</span>
        <span class='text-2xl'>15min</span>
      </div>
    </div>
  </div>
  `
  return CoffeCard
}

export default CoffeCard
