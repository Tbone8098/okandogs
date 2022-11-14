import React from 'react'

import TomandJan from '../static/img/tomandjan1.png'

function Mission() {
    return (
        <div className='bg-primary-2 p-[2em] md:p-[5em]'>
            <div className='bg-white rounded-xl shadow md:grid grid-cols-12'>
                <div className="col-span-10 col-start-2 mt-5 flex flex-col">
                    <h2 className='text-4xl text-primary-2 uppercase font-bold'>Our Mission</h2>
                    <div className="flex flex-col md:grid grid-cols-2 items-center p-10 gap-10">
                        <div className=' border border-black rounded-xl shadow'>
                            <img className='w-full h-full rounded-lg shadow' src={TomandJan} alt="" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p>After volunteering at a local animal shelter, Jan and Tom Short identified a need in the underserved Okanogan area. There are no funded Humane Societies or shelters for Okanogan County dogs. There is no public money available or agencies to help out. They realized that any effort to assist had to be derived from the private sector, both in terms of financial support and work effort.</p>
                            <p className='hidden xl:block'>In 2014, Tom and Jan opened their hearts and home in Cashmere to form the Okandogs non-profit in response to this unmet need in the greater North Central Washington area.  Since that time, the organization has helped thousands of dogs by funding and providing medical care, spay/neuter and adoptions. They have done this by rapidly responding to dogs in need and building confidence and trust in the community. Okandogs adoption rate nears 100% through the use of carefully chosen transfer partners who put local area dogs first. The euthanasia rate and overall fatality rate is almost nil. As the organization has grown, so have its followers and supporters.</p>
                            <p className='hidden 2xl:block'>Okandogs maintains a vet emergency fund to assist injured and ill dogs who have no other resources available. In addition, Okandogs has a very successful program, Mom's Last Litter, that provides free stay at home spay for mama dogs when pup litters are entrusted to us. On average, two-thirds of the dog intakes at Okandogs are puppies.</p>
                            <button className='w-fit self-end'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission