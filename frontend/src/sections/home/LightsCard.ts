const LightsCard = () => {
  const LightsCard = document.createElement('section')
  LightsCard.classList.add('controlCard')
  LightsCard.innerHTML = `
  <div class='flex flex-col items-center h-full'>
    <div class='flex justify-start items-center text-center w-full '>
    <span class='text-center space-x-2 flex items-center'>
      <h1 class='text-2xl font-bold'>Lights</h1>
      <i class="ph ph-lightbulb-filament text-4xl"></i>
    </span>
    </div>
    <div id='lights-container' class='flex gap-4  items-center my-auto flex-wrap justify-center w-full'> 
      <button class='rounded-xl w-32  border-2 border-sky-300 bg-sky-900 text-white font-semibold py-4 text-center'>Saloon</button>
      <button class='rounded-xl w-32  border-sky-900 border font-semibold py-4 text-center'>Bedroom</button>
      <button class='rounded-xl w-32  border-sky-900 border font-semibold py-4 text-center'>Kitchen</button>
      <button class='rounded-xl w-32  border-sky-900 border font-semibold py-4 text-center'>Bathroom</button>
    </div>
  </div>
  `
  return LightsCard
}

export default LightsCard
