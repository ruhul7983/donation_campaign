import { useLoaderData, useParams } from 'react-router-dom';
import Food from '../../assets/Education.png';
import { createContext } from 'react';

export const DonationContext = createContext();


const DonationDetails = () => {

    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation=>donation.id ===idInt);
    const {price, description,title,picture} = donation;

    const handleMyDonation = price=>{
        return price;
    }
    return (
       <DonationContext.Provider value={handleMyDonation}>
         <div className='max-w-6xl mx-auto'>
           <div className='relative min-h-96 ' style={{ backgroundImage: `url(${picture})`, backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:'center',maxWidth:'100%' }}>
                <div className='absolute bottom-0 h-24 w-full bg-black bg-opacity-75 items-center'>
                    <button onClick={()=>handleMyDonation(price)} className='btn btn-secondary mt-7 ml-3'>Donate ${price} </button>
                </div>
           </div>
           <h1 className='font-bold text-4xl'>{title}</h1>
           <p>{description}</p>  
        </div>
       </DonationContext.Provider>
    );
};

export default DonationDetails;