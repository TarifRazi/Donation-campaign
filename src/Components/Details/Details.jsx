import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationData } from "../Store/localStore";

const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id)
    const donate = details.find(donate => donate.id === idInt)
    console.log(donate)


    const handleDonate = () =>{
        saveDonationData(id); 
        toast('You have donate successfully')
    }

    // const idInt = parseInt(id);
    // const selectedDonation = details ? details.find(donation => donation.id === idInt) : null;

    // if (!details || !selectedDonation) {
    //     return <div>Loading...</div>; // You can replace this with your loading component
    // }

    return (
        <div className="max-w-full ">
            
            <div className="relative">
                <img className="w-full " src={donate.image} alt="" />
                <div className="absolute bottom-0 w-full text-left bg-[#0B0B0B80]">
                    <button onClick={handleDonate} className="py-4 px-7 ml-9 my-9 bg-[#FF444A] text-white  text-xl font-semibold rounded-lg">Donate ${donate.price}</button>
                </div>
            </div>
            <h1 className="text-4xl font-bold text-left mt-14">{donate.title}</h1>
            <p className="mt-6 text-left">{donate.details}</p>
            <ToastContainer />
        </div>
    );
};

export default Details;
