type AC_MODES = 'Cool' | 'Heat' | 'Fan' | 'Dry' | 'Auto'
const AcCard = () => {
  const AcCard = document.createElement('section')
  AcCard.classList.add('controlCard')
  AcCard.innerHTML = `
  <div class='flex flex-col justify-between items-center h-full'>
    <div class='flex justify-between items-center text-center w-full '>
    <span class='text-center space-x-2 flex items-center'>
      <h1 class='text-2xl font-bold'>AC</h1>
      <i class="ph ph-wind text-4xl"></i>
    </span>
    <select class='focus:outline-none'>
      <option value="saloon">Saloon</option>
      <option value="bedroom">Bedroom</option>
      <option value="kitchen">Kitchen</option>
    </select>

    </div>
    <div class='flex gap-4 items-center justify-between w-full'> 
      <button class='rounded-xl w-24 text-white bg-sky-900 py-2 text-center'>Up</button>
      <span class='text-6xl font-medium'>32</span>
      <button class='rounded-xl w-24 text-white bg-sky-900 py-2 text-center'>Down</button>
    </div>
    <div class='flex gap-4 items-center w-full justify-start'>
    <span class='text-2xl font-semibold'>Current Mod:</span>
    <span class='text-2xl font-semibold'>Cool</span>
    </div>
  </div>
  `
  return AcCard
}

export default AcCard
