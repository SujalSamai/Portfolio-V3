import React from 'react'

import StackCard from './StackCard'

const Stack = () => {
  return (
    <section className='my-32'>
      <h2 className='text-4xl'>tech stack.</h2>
      <p className='text-gray-300'>Technologies that I use regularly.</p>
      <div className='flex justify-between flex-wrap'>
        <StackCard name="Languages" tech={["Java", "C/C++", "JavaScript", "Python", "SQL"]}/>
        <StackCard name="Frameworks / Libraries" tech={["Next.js","React.js", "Tailwind CSS", "Bootstrap"]}/>
        <StackCard name="BaaS" tech={["Firebase", "Appwrite"]}/>
        <StackCard name="Databases" tech={["MySQL", "Firestore"]}/>
        <StackCard name="Tools" tech={["Git/GitHub", "VSCode", "Intellij IDEA", "Postman"]}/>
      </div>
    </section>
  )
}

export default Stack