import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto max-w-4xl border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700'>
      <div className='p-2 sm:py-4 sm:px-6'>

   
      <div className='flex justify-center'>
        <img className='w-44 sm:w-52' src="https://avatars.githubusercontent.com/u/68012668?v=4 " alt="Profile Image" />
      </div>
      <div className='text-gray-900 dark:text-gray-100 text-justify py-2 flex flex-col gap-2 sm:gap-4'>
        <h1 className='text-center text-xl sm:text-2xl tracking-wide'> Hi my name is <span className='text-cyan-700 dark:text-cyan-500'>Abubakar Muhammad Sadiq</span></h1>

      <h3 className='text-lg sm:text-xl text-center'>  A full-stack developer 👨‍💻</h3>
       <p className=''>I work at Quick Supply 🔭 a Nigerian-based building materials company, where I lead the backend team in developing industry-standard applications capable of handling millions of users using Django. I focused on writing clean and secure code based on system requirements using several different technologies including HTML, CSS, JavaScript, React, Django, Flask, and SQL.
</p>
<p>
        👨‍ Prior to Quick Supply, I was a python back-end developer at E-Arewa, An ICT firm for digitizing products and services where I worked with a team of many 👬 developers writing software for over 10 clients and maintained systems for 15 different clients using Python, CI/CD, AWS services, and Linux platforms.
</p>
<p>
        💬 I am dedicated to being a valuable member of any team I am part of, I believe in the team rising together, and that we can accomplish anything if we work together.
</p>
<p>
        📝 I enjoy mentoring interns to learn more about programming and tech. I spend my free time volunteering at local events.
</p>
<p>
        ⚡ I am currently open to roles that combine my skills for developing full-stack applications, data science, and cloud development.
</p>

     
</div>
      </div>
      </div>
  )
}

export default About