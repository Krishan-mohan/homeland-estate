// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'India',
    address: '72C Cp Delhi, 110001',
    bedrooms: '7',
    bathrooms: '3',
    surface: '4500 sq ft',
    year: '2016',
    price: '150000',
    agent: {
      image: Agent1,
      name: 'Abhishek Chavla',
      phone: '+91 9876543211',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'India',
    address: '798 Malad west. Mumbai, 400064',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4300 sq ft',
    year: '2017',
    price: '146000',
    agent: {
      image: Agent2,
      name: 'Raghu Seth',
      phone: '+91 9876543210',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'India',
    address: '2 Alipore Kolkata, 700023',
    bedrooms: '6',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2017',
    price: '165000',
    agent: {
      image: Agent3,
      name: 'shyam Roy',
      phone: '+91 9876543210',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'India',
    address: '84 Boring Road. Patna, 800001',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4600 sq ft',
    year: '2018',
    price: '250000',
    agent: {
      image: Agent4,
      name: 'Madhav Mishra',
      phone: '+91 9876543210',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'India',
    address: '28 Mp Nagar Bhopal, 462027',
    bedrooms: '4',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2015',
    price: '240000',
    agent: {
      image: Agent5,
      name: 'Kaushik de',
      phone: '+91 9876543210',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'india',
    address: '32 Tulsi Nagar Indore, 462003',
    bedrooms: '7',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2015',
    price: '240000',
    agent: {
      image: Agent6,
      name: 'Raghav Kumar',
      phone: '+91 9876543210',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'India',
    address: '33 Vijay Nagar Indore, 452010',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1500 sq ft',
    year: '2013',
    price: '23000',
    agent: {
      image: Agent7,
      name: 'Md. Rashid',
      phone: '+91 9876543210',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'India',
    address: '30 Civil Line Sasaram, 821115',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1200 sq ft',
    year: '2012',
    price: '25000',
    agent: {
      image: Agent8,
      name: 'Ravi Kumar',
      phone: '+91 9876543210',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'India',
    address: '45 Indira Nagar Bangalore, 560038',
    bedrooms: '4',
    bathrooms: '3',
    surface: '2100 sq ft',
    year: '2014',
    price: '45000',
    agent: {
      image: Agent9,
      name: 'Nagaraju',
      phone: '+91 9876543210',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'india',
    address: '72 Banjara Hils Hyderabad, 500034',
    bedrooms: '5',
    bathrooms: '4',
    surface: '3200 sq ft',
    year: '2017',
    price: '115000',
    agent: {
      image: Agent10,
      name: 'Vera Swami',
      phone: '+91 9876543210',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'India',
    address: '79 Shivaji Nagar Pune, 411003',
    bedrooms: '7',
    bathrooms: '3',
    surface: '2700 sq ft',
    year: '2017',
    price: '185000',
    agent: {
      image: Agent11,
      name: 'Raj Kapoor',
      phone: '+91 9876543210',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'India',
    address: '23 New Kalyani Nagar Pune, 411055',
    bedrooms: '5',
    bathrooms: '4',
    surface: '4800 sq ft',
    year: '2018',
    price: '149000',
    agent: {
      image: Agent12,
      name: 'Raj Kapoor',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'India',
    address: 'Noida Sector 63, 201301',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '175000',
    agent: {
      image: Agent1,
      name: 'Rajeev Singh',
      phone: '+91 9876543210',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'India',
    address: 'Sector 16 Chandigarh, 160015',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3500 sq ft',
    year: '2014',
    price: '203000',
    agent: {
      image: Agent2,
      name: 'Udham Singh',
      phone: '+91 9876543210',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'India',
    address: '32 Vidhan Shabha Road Raipur, 49005',
    bedrooms: '4',
    bathrooms: '2',
    surface: '4200 sq ft',
    year: '2017',
    price: '251000',
    agent: {
      image: Agent3,
      name: 'Indra Kumar',
      phone: '+91 9876543210',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'India',
    address: '82 Nehru Nagar Patna, 800001',
    bedrooms: '3',
    bathrooms: '2',
    surface: '2300 sq ft',
    year: '2013',
    price: '29000',
    agent: {
      image: Agent4,
      name: 'Pawan Jha',
      phone: '+91 9876543210',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'India',
    address: ' 67 Ratu Road Ranchi, 835222',
    bedrooms: '4',
    bathrooms: '2',
    surface: '2000 sq ft',
    year: '2014',
    price: '45000',
    agent: {
      image: Agent5,
      name: 'Nitish Kumar',
      phone: '+91 9876543210',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'india',
    address: '45 Anna Nagar Chennai, 600102',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1600 sq ft',
    year: '2014',
    price: '42000',
    agent: {
      image: Agent6,
      name: 'Venu Srinivasan',
      phone: '+91 9876543210',
    },
  },
];
