import { useContext, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { DonationContext } from '../DonationDetails/DonationDetails';
const Statistics = () => {
  

    const [myDonation, setMyDonation] = useState(10);
    const data01 = [
        { name: 'My Donation', value:myDonation,fill:'green' },
        { name: 'Total Donation', value: 100 ,fill:'purple'},
    ];
    return (
        <div>
                <div>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                    />
                    <Tooltip />
                </PieChart>
                </div>
        </div>
    );
};

export default Statistics;