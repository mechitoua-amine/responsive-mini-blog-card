export function App() {
  return (
    <>
      <main className='flex justify-center items-center w-screen h-screen font-sora bg-lightyellow'>
        <div className='bg-white shadow-md rounded-lg p-4'>
          <img className='w-img h-img rounded-lg' src='./cactus_img.jpg' alt='cactus image' />
          <p className='text-accent bg-secondary w-fit px-5 py-1 my-4 font-bold tracking-wide rounded-2xl text-tag'>
            Design
          </p>
          <h1 className='text-title text-darkGray font-semibold tracking-wide'>
            Embracing Minimalism
          </h1>
          <p className='max-w-xs text-body font-light text-lightGray my-1'>
            From minimalist sculptures to minimalist paintings, this blog will inspire you to
            appreciate the beauty that lies in simplicity.
          </p>
          <hr className='my-5' />
          <p className='text-small text-lightGray before:border-t'>Annie Spratt</p>
        </div>
      </main>
    </>
  )
}
