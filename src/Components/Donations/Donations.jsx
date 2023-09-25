import { useEffect, useState } from "react";
import DonationDetails from "../DonationDetails/DonationDetails";


const Donations = () => {

    const [donations, setDonations] = useState([]);

    useEffect( () =>{
        fetch('donationData.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[])

    return (
        <div>
            <h1>donation: {donations.length}</h1>
            <div className="grid grid-cols-4  gap-6">
                {
                    donations.map( donation => <DonationDetails key={donation.id} donation={donation}></DonationDetails>)
                }
            </div>
        </div>
    );
};

export default Donations;