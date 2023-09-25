import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donation.find(donation => donation.id === idInt)
    
    console.log(details[0].details)
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default Details;