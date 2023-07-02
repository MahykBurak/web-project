const VacuumCleanerCard = () => {
  const VacuumCleanerCard = document.createElement('section')
  VacuumCleanerCard.classList.add('controlCard')
  VacuumCleanerCard.innerHTML = `
  <div class='flex items-center h-full'>
    <div class='flex items-center gap-2'>
      <i class="ph ph-robot text-7xl"></i>
      <h1 class='text-2xl font-bold'>Vacuum Cleaner</h1>
    </div>
    <div class='ml-auto flex flex-col'>
     <button class='rounded-full w-20 font-bold h-20 p-2 shadow-dreamy text-white bg-sky-900 hover:border-sky-700 border-2 border-sky-500 transition-all'> 
        <i class="ph ph-power text-3xl"></i>
     </button>       

    </div>
  </div>
  `
  return VacuumCleanerCard
}

export default VacuumCleanerCard
