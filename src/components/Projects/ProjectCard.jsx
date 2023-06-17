import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsArrowUpRight} from "react-icons/bs"

const ProjectCard = (props) => {
  return (
    <div className='flex justify-between my-5 border-b-2 py-20'>
      <div className='w-4/12 flex flex-col justify-between'>
        <div>
          <h3 className='uppercase text-xl font-medium tracking-wider'>
            0{props.num} / {props.name}
          </h3>
          <h6 className='text-justify mt-5'>{props.desc}</h6>
          <p className='text-gray-400 text-sm my-4'>{props.tech}</p>
        </div>
        <Link href="#" className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>Read More <span className='animate-pulse'><BsArrowUpRight/></span></Link>
      </div>
      <div className='w-1/2 h-[350px] p-5'>
        <Image src={props.img} width={500} height={500} className="w-full h-full hover:scale-105 transition-all duration-300 ease-out"/>
      </div>
    </div>
  )
}

export default ProjectCard