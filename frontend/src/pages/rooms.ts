const Rooms = () => {
  const page = document.createElement('section')
  page.classList.add('roomsPage')
  page.innerHTML = `
  <section class='space-y-2'>
    <h1 class='text-4xl font-bold'>Home Automation System</h1> 
    <p class=' lg:w-2/3'>Welcome to the Home Automation System. This system is designed to allow you to control your home's lights, temperature, and more from anywhere in the world.</p>
  </section>
  <div class='flex flex-col gap-4 h-full w-full'>
   <div class='w-full rounded-lg bg-white shadow-dreamy p-4 flex flex-col gap-4'>
    <section class='flex justify-between items-center'>
      <h1 class='text-4xl font-bold'>Living Room</h1>
      <div class='flex flex-col items-center gap-2 text-3xl font-semibold'>
        <span>22°C</span>
      </div>
    </section>
    <section class='flex flex-col items-center w-full h-full gap-3'>
     <div class='w-full py-2 border-b-2 border-sky-900 flex items-center justify-between'>
      <span class='text-xl font-semibold'>AC:</span>
      <span>Status: Running, Mode:Cold</span>
     </div> 
     <div class='w-full py-2 border-b-2 border-sky-900 flex items-center justify-between'>
      <span class='text-xl font-semibold'>Light:</span>
      <span>Status: Open</span>
     </div> 
    </section>
   </div> 
  </div>
  `
  return page
}

export { Rooms as default }
