import heroBg from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center h-[90vh] "
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundPosition:'center',
      }}
    >
      <h1 className='font-bold text-3xl md:text-5xl'>Welcome to my Web app</h1>
      <p className='text-1xl md:text-2xl'>bangladesh, khulna</p>
      <button className='my-3 bg-orange-500 h-9 w-39 rounded-full transition-all duration-200 cursor-grab hover:scale-110 '>Buy the Products</button>
    </div>
  )
}

export default Hero