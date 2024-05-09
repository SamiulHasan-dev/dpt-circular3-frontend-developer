

import { MdKeyboardArrowDown } from "react-icons/md";

const Home = () => {
 

    return (
        <div>
            <h2 className="font-bold text-3xl max-w-5xl mx-auto my-4">Master Price</h2>
            <hr />
            <div className="max-w-5xl mx-auto">
                {/* way selection */}
                <div className="max-w-[300px] mx-auto my-4">
                    <div role="tablist" className="tabs tabs-boxed ">
                        <a role="tab" className="tab">Round Trip</a>
                        <a role="tab" className="tab tab-active text-white font-semibold tab-active:bg-blue-600">One Way</a>
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

                
                <hr />
                </form>

                <div>
                    
                </div>

            </div>

        </div>
    );
};

export default Home;