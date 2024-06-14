import { useLoaderData } from "react-router-dom";
import DonationCard from "../DonationCard/DonationCard";
import DonationCard2 from "../DonationCard2/DonationCard2";
import { useState } from "react";

const Donation = () => {
    const donations = useLoaderData();
    const [dataLength, setDataLength] = useState(6);

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 max-w-6xl mx-auto gap-5">
                
            {
                donations.slice(0,dataLength).map(donation=><DonationCard2 key={donation.id} donation={donation}></DonationCard2>)
            }
            
            </div>
            <div className={`text-center ${dataLength === donations.length ? "hidden" : ""}`}>
                    <button onClick={()=>setDataLength(donations.length)} className="btn btn-secondary">See All Donation</button>
                </div>
        </div>
    );
};

export default Donation;