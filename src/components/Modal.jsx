import React, { useState } from 'react'

function Modal(props) {
    const { title = "Title Here", content = "Content Here" } = props

    const closeHandler = (e) => {
        props.returnHandler()
    }

    const clickStopPropagation = (e) => {
        e.stopPropagation()
    }

    return (
        <>
            <div className='fixed top-0 left-0 w-full h-full bg-black/75 flex justify-center items-center z-20' onClick={closeHandler}>
                <div className="container bg-white w-11/12 md:w-10/12 h-5/6 rounded-xl" onClick={clickStopPropagation}>
                    <div className="title flex justify-between items-center mx-5 mt-3">
                        <h1 className='text-3xl md:text-5xl'>{title}</h1>
                        <button onClick={closeHandler} className='btn bg-primary-2 text-white'>Close</button>
                    </div>
                    <div className='p-3 w-full'>
                        <p className='text-xs mb-3 border p-2 bg-yellow-300 rounded-lg'><strong>FYI: </strong>This site is currently a mock up of what it could be and therefore the links do not work. This is only for demo purposes.</p>
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal