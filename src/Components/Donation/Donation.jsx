import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Store/localStore";


const Donation = () => {
    const donations = useLoaderData();
    useEffect(() => {
        const storedDonationId = getStoredDonations();
        if(donations.length > 0 ){
            const gotDonation = donations.filter(donation =>)
        }
    },[])
    return (
        <div>
            <h3>this is donation file</h3>
        </div>
    );
};

export default Donation;