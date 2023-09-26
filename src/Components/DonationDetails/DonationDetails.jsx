import { Link, useNavigate } from "react-router-dom";


const DonationDetails = ({ donation }) => {
    const { image, category, title, id } = donation;
    // const navigate = useNavigate ()


    // const handelClick =()=>{
    //     navigate(`/details/${id}`)
    // }
    return (
        <Link to={`/details/${id}`}>
            <div>
                <div className="text-left  w-auto bg-white shadow-xl" >
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 >{category}</h2>
                        <p>{title}</p>

                    </div>
                </div>
            </div>
        </Link>


    );
};

export default DonationDetails;