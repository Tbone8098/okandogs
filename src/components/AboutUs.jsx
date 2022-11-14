import React from 'react'

import TomandJan from '../static/img/tomandjan2.png'

function AboutUs() {
    return (
        <div className='lg:grid grid-cols-3 p-10 gap-3'>
            <div className="col-span-2 flex flex-col h-full mb-10">
                <h2 className="text-4xl font-bold uppercase text-primary-2">It is all About Caring</h2>
                <div className='flex flex-col gap-5 text-xl h-full text-left mt-10'>
                    <p>After volunteering at a local animal shelter, Jan and Tom Short identified a need in the underserved Okanogan area. There are no funded Humane Societies or shelters for Okanogan County dogs. There is no public money available or agencies to help out. They realized that any effort to assist had to be derived from the private sector, both in terms of financial support and work effort.</p>
                    <p className='hidden md:block'>In 2014, Tom and Jan opened their hearts and home in Cashmere to form the Okandogs non-profit in response to this unmet need in the greater North Central Washington area. Since that time, the organization has helped thousands of dogs by funding and providing medical care, spay/neuter and adoptions. They have done this by rapidly responding to dogs in need and building confidence and trust in the community. Okandogs adoption rate nears 100% through the use of carefully chosen transfer partners who put local area dogs first. The euthanasia rate and overall fatality rate is almost nil. As the organization has grown, so have its followers and supporters.</p>
                    <p className='hidden lg:block'>Okandogs maintains a vet emergency fund to assist injured and ill dogs who have no other resources available. In addition, Okandogs has a very successful program, Mom's Last Litter, that provides free stay at home spay for mama dogs when pup litters are entrusted to us. On average, two-thirds of the dog intakes at Okandogs are puppies.</p>
                    <button className='bg-primary-2 text-white lg:hidden w-fit'>Read More</button>
                </div>
            </div>
            <div className=' flex justify-center'>
                <img className=' rounded-xl' src={TomandJan} alt="tom and Jan" />
            </div>
        </div>
    )
}

export default AboutUs