import './Animation.css'

const BlackHole = () => {
  return (
    <div className='absolute flex items-center justify-center w-full h-full'>
      <div className='w-[6em] h-[6em]'>
        <div className='flex items-center justify-center w-full h-full rounded-full megna'>
          <div className='w-[90%] h-[90%] blackhole bg-black'></div>
        </div>
      </div>
    </div>
  )
}
export default BlackHole