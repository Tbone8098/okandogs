import React, { useState } from 'react'

import { contactData } from '../data/data'

function ContactUs() {
    const [activeInfo, setActiveInfo] = useState('adoption')
    const [formInfo, setFormInfo] = useState({
        fName: {
            content: '',
            required: {
                len: 2
            },
            errs: {
                status: false,
                showing: false,
                msg: "First Name must be more than 2 characters"
            }
        },
        lName: {
            content: '',
            required: {
                len: 2
            },
            errs: {
                status: false,
                showing: false,
                msg: "Last Name must be more than 2 characters"
            }
        },
        email: {
            content: '',
            required: {
                len: 7,
                pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/
            },
            errs: {
                status: false,
                showing: false,
                msg: "Not a valid Email address"
            }
        },
        message: {
            content: '',
            required: {
                len: 20
            },
            errs: {
                status: false,
                showing: false,
                msg: "Message must be more than 20 characters"
            }
        },
    })

    const inputHandler = (e) => {
        let name = e.target.name
        let val = e.target.value


        let deepCopy = structuredClone(formInfo)
        deepCopy[name].content = val

        if (name === 'email') {
            let pattern = deepCopy[name].required.pattern
            if (val.length === 0) {
                deepCopy[name].errs.status = false
                deepCopy[name].errs.showing = false
            }
            else if (!pattern.test(val)) {
                deepCopy[name].errs.status = false
                deepCopy[name].errs.showing = true
            }
            else {
                deepCopy[name].errs.status = true
                deepCopy[name].errs.showing = false
            }
        } else {
            if (val.length <= deepCopy[name].required.len && val.length > 0) {
                deepCopy[name].errs.status = false
                deepCopy[name].errs.showing = true
            }
            else if (val.length === 0) {
                deepCopy[name].errs.status = false
                deepCopy[name].errs.showing = false
            }
            else {
                deepCopy[name].errs.status = true
                deepCopy[name].errs.showing = false
            }
        }

        setFormInfo(deepCopy)
    }

    const formHandler = (e) => {
        e.preventDefault()

        let deepCopy = structuredClone(formInfo)
        let valid = true

        for (const key in deepCopy) {
            let status = deepCopy[key].errs.status
            if (!status) {
                valid = false
                deepCopy[key].errs.showing = true
            }
        }

        if (valid) {
            for (const key in deepCopy) {
                deepCopy[key].content = ""
            }
            alert("Message Sent")
        }

        setFormInfo(deepCopy)
    }

    const errStyle = "text-yellow-200 text-sm"

    return (
        <div className='bg-primary-2 p-3 md:p-10'>
            <form onSubmit={formHandler}>
                <h2 className="text-6xl uppercase text-white">Contact Us</h2>
                <div className='flex flex-col flex-col-reverse md:grid grid-cols-12 gap-10'>
                    {/* ? your info */}
                    <div className="col-span-full md:col-span-5 text-white">
                        <div className=' flex flex-col gap-5'>
                            <span className="text-2xl underline underline-offset-8">Your Information</span>
                            <div className='flex flex-col md:flex-row gap-3 w-full'>
                                <div className="flex flex-col gap-3 w-full">
                                    <input type="text" name="fName" id="fName" placeholder='First Name' className='text-center rounded-full w-full text-black' onChange={inputHandler} value={formInfo.fName.content} />
                                    {
                                        formInfo.fName.errs.showing &&
                                        <span className={errStyle}>{formInfo.fName.errs.msg}</span>
                                    }
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <input type="text" name="lName" id="lName" placeholder='Last Name' className='text-center rounded-full w-full text-black' onChange={inputHandler} value={formInfo.lName.content} />
                                    {
                                        formInfo.lName.errs.showing &&
                                        <span className={errStyle}>{formInfo.lName.errs.msg}</span>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <input type="text" name="email" id="email" placeholder='Email' className='text-center rounded-full w-full text-black' onChange={inputHandler} value={formInfo.email.content} />
                                {
                                    formInfo.email.errs.showing &&
                                    <span className={errStyle}>{formInfo.email.errs.msg}</span>
                                }
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <textarea name="message" id="message" placeholder='Message' className='text-center rounded-2xl text-black' cols="30" rows="5" onChange={inputHandler} value={formInfo.message.content}></textarea>
                                {
                                    formInfo.message.errs.showing &&
                                    <span className={errStyle}>{formInfo.message.errs.msg}</span>
                                }
                            </div>
                            <button className='mt-auto py-2 mt-3 bg-primary-1 text-black text-2xl font-bold'>Send</button>
                        </div>
                    </div>
                    <div className='flex flex-col md:grid grid-cols-2 col-span-7 gap-10'>
                        {/* ? Your Reason Box */}
                        <div className='col-span-full md:col-span-1 flex flex-col'>
                            <div className='text-white'>
                                <span className='text-2xl underline underline-offset-8'>Your Reason</span>
                                <ul className='text-left flex flex-col gap-5 '>
                                    <li>
                                        <input defaultChecked onChange={(e) => setActiveInfo(e.target.value)} type="radio" name="reason" id="reason" value="adoption" /> 
                                        <label htmlFor="Adoptions">Adoptions</label>
                                    </li>
                                    <li>
                                        <input onChange={(e) => setActiveInfo(e.target.value)} type="radio" name="reason" id="reason" value="donations" /> 
                                        <label htmlFor="Donations, Media">Donations, Media</label>
                                    </li>
                                    <li>
                                        <input onChange={(e) => setActiveInfo(e.target.value)} type="radio" name="reason" id="reason" value="events" /> 
                                        <label htmlFor="Events & Fundraising Opportunities">Events & Fundraising Opportunities</label>
                                    </li>
                                    <li>
                                        <input onChange={(e) => setActiveInfo(e.target.value)} type="radio" name="reason" id="reason" value="employment" /> 
                                        <label htmlFor="Employment">Employment</label>
                                    </li>
                                    <li>
                                        <input onChange={(e) => setActiveInfo(e.target.value)} type="radio" name="reason" id="reason" value="volunteer" /> 
                                        <label htmlFor="Volunteering">Volunteering</label>
                                    </li>
                                    <li>
                                        <input onChange={(e) => setActiveInfo(e.target.value)} type="radio" name="reason" id="reason" value="fostering" /> 
                                        <label htmlFor="Fostering">Fostering</label>
                                    </li>
                                    <li>
                                        <input onChange={(e) => setActiveInfo(e.target.value)} type="radio" name="reason" id="reason" value="other" /> 
                                        <label htmlFor="All Other Inquiries">All Other Inquiries</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* ? Info Box */}
                        <div className='col-span-full md:col-span-1 bg-white rounded-xl py-3 px-5 md:px-10'>
                            <h3 className='text-2xl underline underline-offset-8 mb-5'>Notes</h3>
                            <div className='text-left flex flex-col gap-3'>
                                {
                                    !activeInfo ?
                                        <span>Loading...</span>
                                        :
                                        <>
                                            <span><strong>Person in Charge:</strong> {contactData[activeInfo]?.pic}</span>
                                            <span><strong>Email: </strong>{contactData[activeInfo]?.email}</span>
                                            <span><strong>Phone Number: </strong>{contactData[activeInfo]?.phoneNumFormat}</span>
                                            <span>{contactData[activeInfo]?.notes}</span>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactUs