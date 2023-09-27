import { useEffect, useState } from "react";
import DonationDetails from "../DonationDetails/DonationDetails";


const Donations = ({clear}) => {

    const [donations, setDonations] = useState([]);

    useEffect( () =>{
        if(!clear){
            fetch('donationData.json')
            .then(res => res.json())
            .then(data => setDonations(data))
        }else{
            setDonations([]);
        }

    },[])

    return (
        <div>
            
            <div className="grid grid-cols-4  gap-6">
                {
                    donations.map( donation => <DonationDetails key={donation.id} donation={donation}></DonationDetails>)
                }
            </div>
        </div>
    );
};

export default Donations;