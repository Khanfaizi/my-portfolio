import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 

function page() {
  return (
    <div className='justify-center h-screen bg-blue-950'>
      <div>
      <main className='h-96 flex justify-around items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl'>Faiz Ahmed Khan</h1>
          <p className='text-1xl'>I am a front-end web developer experience in react js and next Js</p>
        </div>
        <div>
          <Image  
          className='rounded-full'
          src="/images/portfolio.jpg"
          width={300}
          height={100}
          alt="picture"
          />
        </div>
      </main>
      </div>
    </div>
  )
}

export default page