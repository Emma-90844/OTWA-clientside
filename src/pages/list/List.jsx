import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            {/* item 1 */}
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            {/* item 1 */}
            <div className="lsItem calendar ">
              <label htmlFor="">Check in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")}`} to{" "}
                {`${format(date[0].endDate, "MM/dd/yyyy")}`}{" "}
              </span>

              {/* oprn date option */}
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  className="date"
                  ranges={date}
                />
              )}
            </div>

            {/* item 1 */}
            <div className="lsItem">
              <label htmlFor="">Options</label>
            <div className="lsOptions">
                   {/* smaller item */}
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput"></input>
              </div>

              {/* smaller item */}
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput"></input>
              </div>

              {/* smaller item */}
              <div className="lsOptionItem">
                <span className="lsOptionText">Adults</span>
                <input type="number" min={1} placeholder={options.adult} className="lsOptionInput"></input>
              </div>

              {/* smaller item */}
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} placeholder={options.children} className="lsOptionInput"></input>
              </div>

              {/* smaller item */}
              <div className="lsOptionItem">
                <span className="lsOptionText">Room </span>
                <input type="number" min={1} placeholder={options.room} className="lsOptionInput"></input>
              </div>


            </div>
            
            
           

            </div>
            <button>Search</button>
          </div>

          {/* LEFT SIDE. */}
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
