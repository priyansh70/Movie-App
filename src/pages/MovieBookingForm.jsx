import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";

function MovieBookingPage() {
    const location = useLocation();
    const movieName = location?.state?.movie?.show?.name;
    // console.log(movieName)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        const movieBookingDetail = {
            movieName,
            ...formData,
        };

        // console.log(movieBookingDetail)
        const moviesData = localStorage.moviesData;
        // console.log(moviesData);
        // Not Present in Local Storage 
        if(!moviesData)
        {
            localStorage.setItem("moviesData",JSON.stringify([movieBookingDetail]));
        }
        else
        {
            const moviesDataFromStorage = JSON.parse(localStorage.getItem("moviesData"));
            // console.log(moviesDataFromStorage)

            const updateMoviesData = [
                ...moviesDataFromStorage,
                movieBookingDetail
            ]

            localStorage.setItem("moviesData", JSON.stringify(updateMoviesData));

        }

        setFormData({
            name: "",
            email: "",
        });
        toast.success("Ticket Booked Successfully");
    }

    const inputStyle = "px-2 py-1 rounded-lg text-base  font-semibold my-1 mb-4 outline-none border border-red-900 focus:border-purple-500 focus:border-2 text-black "
    return (
        <div className="flex items-center mt-[150px] text-sky-100 w-11/12 mx-auto flex-col justify-center  ">
            <form
                className=" black__gradient py-5 px-4 rounded-lg flex-1 flex flex-col text-stone-200 gap-y-1"
                onSubmit={submitHandler}
            >
                <div>
                    <label htmlFor="movieName" className="font-medium text-base">Movie Name</label>
                    <br />
                    <input
                        type="text"
                        name="movieName"
                        value={movieName}
                        className={`text-black bg-secondary ${inputStyle}`}
                        id="movieName"
                        disabled
                    />
                    <br />
                </div>
                <div>
                    <label htmlFor="name" className="font-medium text-base">Name</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={changeHandler}
                        className={`${inputStyle}`}
                        id="name"
                        required
                    />
                    <br />
                </div>

                <div>
                    <label htmlFor="email" className="font-medium text-base">Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={changeHandler}
                        className={`${inputStyle}`}
                        id="email"
                        required
                    />
                    <br />
                </div>

                <button
                    className='w-full text-white font-poppins text-lg font-medium bg-indigo-900	rounded-md px-4 py-1 my-5 hover:bg-indigo-600 transition-all duration-200'
                >
                    Book
                </button>
            </form>
        </div>
    );
}

export default MovieBookingPage;
