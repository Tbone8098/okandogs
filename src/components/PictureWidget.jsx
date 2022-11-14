import React from 'react'

function PictureWidget(props) {
    const { photoInfo } = props
    return (
        <div className='relative w-[100%] h-[100%] md:w-[20em] md:h-[20em] lg:w-[25em] lg:h-[25em] xl:w-[25em] xl:h-[25em] my-10 overflow-hidden'>
            <div className='w-full h-full rounded-xl shadow absolute top-0 left-0 -z-10'>
                <img className='w-full h-full object-cover rounded-xl' src={photoInfo.photo} alt="" />
            </div>
            <div className='md:absolute top-0 left-0 text-white bg-black/50 w-full h-full flex flex-col justify-center items-center group rounded-xl'>
                <h2 className='text-4xl uppercase mt-10 mb-4 md:translate-y-10 md:group-hover:-translate-y-1 duration-300'>{photoInfo.title}</h2>
                <button className='bg-primary-2 text-white text-2xl uppercase my-5 md:translate-y-[650%] md:group-hover:translate-y-[0%] duration-300'>Application</button>
            </div>
        </div>
    )
}

export default PictureWidget