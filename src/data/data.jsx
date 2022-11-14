
import Dog1 from '../static/img/dog1.png'
import Dog2 from '../static/img/dog2.png'
import Dog3 from '../static/img/dog3.png'
import Dog4 from '../static/img/dog4.png'

import Adoption from '../static/img/Adoption.png'
import Fostering from '../static/img/Fostering.png'
import Volunteer from '../static/img/VolunteerPic2.png'


const dogs = [
    {
        photo: Dog1,
        alt: "Dog photo"
    },
    {
        photo: Dog2,
        alt: "Dog photo"
    },
    {
        photo: Dog3,
        alt: "Dog photo"
    },
    {
        photo: Dog4,
        alt: "Dog photo"
    },
]

const takeEm = [
    {
        title: "Adopt",
        photo: Adoption,
        alt: "Adpotion photo"
    }, 
    {
        title: "Foster",
        photo: Fostering,
        alt: "Fostering photo"
    }, 
    {
        title: "Volunteer",
        photo: Volunteer,
        alt: "Fostering photo"
    }, 
]

const contactData = {
    adoption: {
        pic: "Jan Short",
        email: "adopt@okandogs.org",
        phoneNum: 5096701909,
        phoneNumFormat: "(509) 670 - 1909",
        notes: <div> 
            <p>If voicemail box is full, text to this number.</p>
            <p>If interested in adopting, please complete an application form before inquiring about specific dogs. If you have applied to adopt and have not heard back from us, the dog may have already been adopted. We handle a high volume of adoptions and transfers, so we appreciate your understanding.</p>
        </div>,
    },
    donations: {
        pic: "Tom Short",
        email: "tom@okandogs.org",
        phoneNum: 5096704937,
        phoneNumFormat: "(509) 670-4937",
        notes: '',
    },
    events: {
        // pic: "Tom Short",
        email: "events@okandogs.org",
        // phoneNum: 5096704937,
        // phoneNumFormat: "(509) 670-4937",
        // notes: '',
    },
    employment: {
        pic: "Tom Short",
        email: "employment@okandogs.org",
        // phoneNum: 5096704937,
        // phoneNumFormat: "(509) 670-4937",
        notes: <div>
            <p> Please see our Employment page and submit an application if interested in a position with us.</p>
        </div>,
    },
    volunteer: {
        pic: "Top Short",
        email: "volunteer@okandogs.org",
        // phoneNum: 5096704937,
        // phoneNumFormat: "(509) 670-4937",
        notes: <div>
            <p>Please see our Volunteer page and submit an application.</p>
        </div>,
    },
    fostering: {
        pic: "Top Short",
        email: "foster@okandogs.org",
        // phoneNum: 5096704937,
        // phoneNumFormat: "(509) 670-4937",
        notes: <div>
            <p>Please see our Foster page and submit an application if you are interested in being a dog foster.</p>
        </div>,
    },
}

export {
    dogs,
    takeEm,
    contactData
}