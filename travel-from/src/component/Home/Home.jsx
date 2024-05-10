
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
    const [data, setData] = useState([]);
    const [tableHead, setTableHead] = useState(null);
    const [dataLoad , setDataLoad] = useState(null);


    useEffect(()=>{
        Aos.init();
    },[])

    const seccess = "Data Load Successfully";

    const heading = <>
        <thead>
            <tr>
                <th>FLIGHT</th>
                <th>AIRCRAFT</th>
                <th>CLASS</th>
                <th>FARE</th>
                <th>ROUTE</th>
                <th>DEPARTURE</th>
                <th>ARRIVAL</th>
                <th></th>
                <th>DURATION</th>
                <th>PRICE</th>
            </tr>
        </thead>
    </>



    const handleSearch = (event) => {
        event.preventDefault();

        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data.flightOffer);
                setTableHead(heading);
                setDataLoad(seccess);
            })
    }

    console.log(data);

    return (
        <div>
            <h2 className="font-bold text-3xl max-w-5xl mx-auto my-4">Master Price</h2>
            <hr />
            <div className="max-w-5xl mx-auto">
                {/* way selection */}
                <div className="max-w-[300px] mx-auto my-4">
                    <div role="tablist" className="tabs tabs-boxed ">
                        <a role="tab" className="tab">Round Trip</a>
                        <a data-aos="flip-down" role="tab" className="tab  text-white font-semibold bg-blue-700">One Way</a>
                        <a role="tab" className="tab ">Multi city</a>
                    </div>
                </div>
                <hr />

                {/* Form section */}
                <form onSubmit={handleSearch}>
                    <div>
                        <div className="my-2 flex justify-between items-center">
                            <input type="text" placeholder="LHR" required className="border  m-1 py-2 px-1 uppercase" />
                            <input type="text" placeholder="CDG" required className="border m-1 py-2 px-1 uppercase" />
                            <input type="date" placeholder="CDG" required className="border m-1 py-2 px-1 " />
                            {/* day - */}
                            <select className="border py-3 px-1 m-1">
                                <option disabled selected>Day- <MdKeyboardArrowDown></MdKeyboardArrowDown></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            {/* day + */}
                            <select className="border py-3 px-1 m-1">
                                <option disabled selected>Day+ <MdKeyboardArrowDown></MdKeyboardArrowDown></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            {/*Anytime */}
                            <select className="border py-3 px-1 m-1">
                                <option disabled selected>Any Time <span>  </span>   <MdKeyboardArrowDown></MdKeyboardArrowDown></option>
                                <option>Sat</option>
                                <option>Sun</option>
                                <option>Mon</option>
                                <option>Tue</option>
                                <option>Wed</option>
                                <option>Thu</option>
                                <option>Fri</option>
                            </select>
                            <span className="font-bold">+</span>
                            {/*ADT */}
                            <select className="border py-3 px-1 m-1">
                                <option disabled selected>ADT   <MdKeyboardArrowDown></MdKeyboardArrowDown></option>
                                <option>SDA</option>
                                <option>DHA</option>
                                <option>CAD</option>
                                <option>BUD</option>
                                <option>HON</option>
                            </select>
                            {/*Number */}
                            <select className="border py-3 px-1 m-1">
                                <option disabled selected>1   <MdKeyboardArrowDown></MdKeyboardArrowDown></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                            <span className="font-bold">+</span>
                        </div>
                        <hr />

                    </div>

                    <div className="my-2 flex justify-between items-center">
                        {/* Extra option */}
                        <div data-aos="fade-right" data-aos-duration="4000">
                            <label><input type="checkbox" name="" id="" /><span className="font-semibold">  Extra Option</span></label>
                        </div>

                        {/* Environment */}
                        <div className="flex gap-2">
                            <span className="font-semibold">Environment</span>
                            <label className="flex items-centers gap-2"><input type="radio" name="radio-7" className="radio radio-info checked:bg-blue-700" checked />Dummy
                                <input type="radio" name="radio-7" className="radio radio-info checked:bg-blue-700" />pdt

                            </label>
                        </div>

                        {/* Search Button */}
                        <div data-aos="fade-left" data-aos-duration="4000">
                            <input className="btn bg-blue-700 text-white border py-2 px-3 rounded-lg " type="submit" value="Search" />
                        </div>
                    </div>
                    <div className="border-blue-400 border"></div>
                </form>
                <div className="my-1 text-bold" >
                    <p className=" font-semibold">
                        {dataLoad}
                    </p>
                </div>
                <div className="mt-4" >

                    <div className="overflow-x-auto">
                        <table className="table table-zebra"  >
                            {/* head */}
                            {tableHead}
                            <tbody>
                                {/* data show */}
                                {
                                    data.map((aData, idx) =>

                                        <tr key={idx} >
                                            {/* flight */}
                                            <td>
                                                <p>{aData.itineraries[0].segments[0].marketingCarrier}.{aData.itineraries[0].segments[0].aircraft}</p>
                                                <p>{aData.itineraries[0].segments[0].marketingCarrier}.{aData.itineraries[0].segments[1].aircraft}</p>
                                            </td>
                                            {/* AirCraft */}
                                            <td>
                                                <p>{aData.itineraries[0].segments[0].flightNumber}</p>
                                                <p>{aData.itineraries[0].segments[1].flightNumber}</p>
                                            </td>
                                            {/* Class */}
                                            <td>
                                                {
                                                    aData.class[0].map((sit, idx) => <p key={idx}>
                                                        <p>{sit}</p>
                                                    </p>)
                                                }
                                            </td>
                                            {/* Fare */}
                                            <td>
                                                {
                                                    aData.fareBasis[0].map((fare, idx) => <p key={idx}>
                                                        <p>{fare}</p>
                                                    </p>)
                                                }
                                            </td>
                                            {/* Route */}
                                            <td>
                                                <p>{aData.itineraries[0].segments[0].departure.iataCode}-{aData.itineraries[0].segments[0].arrival.iataCode}</p>
                                                <p>{aData.itineraries[0].segments[1].departure.iataCode}-{aData.itineraries[0].segments[1].arrival.iataCode}</p>
                                            </td>
                                            {/* Departure */}
                                            <td>
                                                <p>{aData.itineraries[0].segments[0].departure.at}</p>
                                                <p>{aData.itineraries[0].segments[1].departure.at}</p>
                                            </td>
                                            {/* Arrival */}
                                            <td>
                                                <p>{aData.itineraries[0].segments[0].arrival.at}</p>
                                                <p>{aData.itineraries[0].segments[1].arrival.at}</p>
                                            </td>
                                            <td>
                                                <p>--</p>
                                                <p>--</p>
                                            </td>
                                            {/* duration */}
                                            <td>
                                                <p>{aData.itineraries[0].duration}</p>
                                            </td>
                                            {/* duration */}
                                            <td>
                                                <p className="mb-2">{aData.price}</p>
                                                <a href="#" className=" bg-blue-700 text-white border px-2 py-1 rounded-md ">Select</a>
                                            </td>

                                            <td></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;