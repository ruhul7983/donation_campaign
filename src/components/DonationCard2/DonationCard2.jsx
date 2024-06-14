import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard2 = ({donation}) => {
    const {id, title,picture,category,text_button_bg,card_bg,category_bg} = donation;

    return (
        <div>
            <Link to={`${id}`}>
            <div className=''>
                <div className={`bg-[${card_bg}] pb-4 rounded`}>
                    <img className='' src={picture} alt="" />
                    <div className={`bg-[${category_bg}] inline-block p-1 mx-3 mt-2 rounded-sm`}>
                        <h1 className={`text-[${text_button_bg}]`}>{category}</h1>
                    </div>  
                    <h1 className={`text-[${text_button_bg}] text-xl mx-3`}>{title}</h1>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default DonationCard2;