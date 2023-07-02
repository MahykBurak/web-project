interface Props {
  roomId: string
}

const RoomCard = (props: Props) => {
  const { roomId } = props
  const roomCardContainer = document.createElement('div')
  roomCardContainer.classList.add('roomCard')
  roomCardContainer.innerHTML = `
    <section class='flex justify-between items-center'>
      <h1 id='${roomId}-name' class='text-4xl font-bold'>Living Room</h1>
      <div class='flex flex-col items-center gap-2 text-3xl font-semibold'>
        <span>22°C</span>
      </div>
    </section>
    <section class='flex flex-col items-center w-full h-full gap-3'>
     <div class='roomCardSection'>
      <span class='text-xl font-semibold'>AC:</span>
      <span>Status: Running, Mode:Cold</span>
     </div> 
     <div class='roomCardSection'>
      <span class='text-xl font-semibold'>Light:</span>
      <span>Status: Open</span>
     </div> 
    </section>
  `
}
