
import React from 'react'
import {Featured, NavBar} from '../components'

const Home = () => {

  return (
    <>   
    <NavBar /> 
    <section className='container mx-auto flex my-10'>
      <div className='flex-none w-72'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem natus, nihil animi omnis obcaecati minima nemo accusamus reiciendis illum minus eum illo voluptatum veniam deserunt distinctio. Repellendus, expedita! Distinctio, voluptates?</p>
      </div>
      <div className='flex-auto min-h-screen border-x sm:px-8'>
      <Featured/>
      </div>
      <div className='flex-none w-72'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit distinctio modi illum quod totam ut ad illo itaque officia dolorem eos suscipit quia, similique fugit facere, cumque, cum assumenda nostrum.</p>

      </div>

      
      
    </section>
    
 
    </>
    
  )
}

export default Home