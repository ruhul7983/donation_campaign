import { useState } from 'react';
import Banner from '../../assets/Rectangle 4281.png';
import { useEffect } from 'react';
import DonationCard from '../DonationCard/DonationCard';
const Home = () => {
    
    const [donations,setDonation] = useState([]);

    useEffect(()=>{
        fetch('donation.json')
        .then(res=>res.json())
        .then(data=>setDonation(data));
    },[])

    return (

        <div>
            <div className="hero min-h-96 " style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-90">

                </div>
                <div className="text-center">
                    <h1 className='text-6xl'>I Grow By Helping People In Need</h1>
                    <div className='flex justify-center items-center mt-8'>
                        <form action="">
                            <input className='bg-white border-none py-2 pr-6 pl-2' type="text" placeholder='Search for donation' />
                        </form>
                        <button className="py-2 bg-red-800 pl-2 pr-9 text-white rounded-tr-md rounded-br-md">Search</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 max-w-6xl mx-auto gap-5'>
            {
                donations.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
            
            </div>
        </div>
    );
};

export default Home;