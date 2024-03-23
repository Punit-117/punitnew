// import React, { useEffect, useState } from "react";
// import { useAlert } from "react-alert";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { saveShippingInfo } from "../../actions/CartAction";
// import { FaGlobe, FaHouseChimneyWindow, FaTreeCity } from "react-icons/fa6";
// import { MdLocationOn } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { City, Country, State } from "country-state-city";
// import { TbBuildingEstate } from "react-icons/tb";
// import "./Shipping.css";
// import CheckoutSteps from "./CheckoutSteps";
// import Footer from "../../partials/Footer";
// import Header from "../../partials/Header";

// const Shipping = () => {
//   const dispatch = useDispatch();
//   const alert = useAlert();
//   const navigate = useNavigate();
//   const { shippingInfo } = useSelector((state) => state.cart);

//   const [address, setAddress] = useState(
//     shippingInfo ? shippingInfo.address : ""
//   );
//   const [city, setCity] = useState(shippingInfo ? shippingInfo.city : "");
//   const [state, setState] = useState(shippingInfo ? shippingInfo.state : "");
//   const [country, setCountry] = useState(
//     shippingInfo ? shippingInfo.country : ""
//   );
//   const [pinCode, setPinCode] = useState(
//     shippingInfo ? shippingInfo.pinCode : ""
//   );
//   const [phoneNo, setPhoneNo] = useState(
//     shippingInfo ? shippingInfo.phoneNo : ""
//   );

//   const shippingSubmit = (e) => {
//     e.preventDefault();
//     if (phoneNo.length < 10 || phoneNo.length > 10) {
//       alert.error("Phone Number should be 10 digits Long");
//       return;
//     }

//     const data = {
//       address,
//       city,
//       state,
//       country,
//       pinCode,
//       phoneNo
//     };




//     dispatch(saveShippingInfo({ address, country, state, city, pinCode, phoneNo }));
//     navigate("/orders/confirm");
//   };


//   return (
//     <>
//       <>
//         {/* <MetaData title="Shipping Details"/> */}
//         <Header />
//         <CheckoutSteps activeStep={0} />
//         <div className="shippingContainer">
//           <div className="shippingBox">
//             <h2 className="shippingHeading">Shipping Details</h2>
//             <form
//               className="shippingForm"
//               encType="multipart/form-data"
//               onSubmit={shippingSubmit}
//             >
//               <div>
//                 <FaHouseChimneyWindow />
//                 <input
//                   type="text"
//                   required
//                   placeholder="Address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <FaTreeCity />
//                 <input
//                   type="text"
//                   required
//                   placeholder="City"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <MdLocationOn />
//                 <input
//                   type="number"
//                   required
//                   placeholder="Pin Code"
//                   value={pinCode}
//                   onChange={(e) => setPinCode(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <FaPhoneAlt />
//                 <input
//                   type="number"
//                   required
//                   placeholder="Phone Number"
//                   value={phoneNo}
//                   onChange={(e) => setPhoneNo(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <FaGlobe />
//                 <select
//                   required
//                   value={country}
//                   onChange={(e) => setCountry(e.target.value)}
//                 >
//                   <option value="">Country</option>
//                   {Country &&
//                     Country.getAllCountries().map((country, i) => (
//                       <option value={country.isoCode} key={i}>
//                         {country.name}
//                       </option>
//                     ))}
//                 </select>
//               </div>

//               {country && (
//                 <div>
//                   <TbBuildingEstate />

//                   <select
//                     required
//                     value={state}
//                     onChange={(e) => setState(e.target.value)}
//                   >
//                     <option value="">State</option>
//                     {State &&
//                       State.getStatesOfCountry(country).map((state) => (
//                         <option key={state.isoCode} value={state.isoCode}>
//                           {state.name}
//                         </option>
//                       ))}
//                   </select>
//                 </div>
//               )}
//               <input
//                 type="submit"
//                 value="Continue"
//                 className="shippingBtn"
//                 disabled={state ? false : true}
//               />
//             </form>
//           </div>
//         </div>
//         <Footer />
//       </>
//     </>
//   );
// };

// export default Shipping;

import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../../actions/CartAction";
import { FaGlobe, FaHouseChimneyWindow, FaTreeCity } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Country, State } from "country-state-city";
import { TbBuildingEstate } from "react-icons/tb";
import "./Shipping.css";
import CheckoutSteps from "./CheckoutSteps";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";

const Shipping = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(
    shippingInfo ? shippingInfo.address : ""
  );
  const [city, setCity] = useState(shippingInfo ? shippingInfo.city : "");
  const [state, setState] = useState(shippingInfo ? shippingInfo.state : "");
  const [country, setCountry] = useState(
    shippingInfo ? shippingInfo.country : ""
  );
  const [pinCode, setPinCode] = useState(
    shippingInfo ? shippingInfo.pinCode : ""
  );
  const [phoneNo, setPhoneNo] = useState(
    shippingInfo ? shippingInfo.phoneNo : ""
  );

  const shippingSubmit = async (e) => {
    e.preventDefault();
    if (phoneNo.length !== 10) {
      alert.error("Phone Number should be 10 digits long");
      return;
    }

    // console.log(state)
    const itemname = `${cartItems.map((item)=> item.name)}, ${cartItems.map((item)=> item.quantity)}`;
    console.log(itemname)
    const data = {
      address,
      city,
      state,
      country,
      pinCode,
      phoneNo,
      itemname
    };

    try {
      const response = await fetch('http://localhost:5000/api/orderdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if required
        },
        body: JSON.stringify(data),
      });


      // Assuming the response body contains the saved order details
      const responseData = await response.json();
      console.log(response)
      console.log(responseData)

      // Dispatch action to save order details in Redux store if needed
      dispatch(saveShippingInfo({ address, country, state, city, pinCode, phoneNo }));
      // dispatch(saveOrderDetails(responseData));

      // Navigate to the confirmation page
      navigate("/orders/confirm");
    } catch (error) {
      console.error('Error saving shipping details:', error);
      alert.error("Error saving shipping details. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <CheckoutSteps activeStep={0} />
      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Shipping Details</h2>
          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <FaHouseChimneyWindow />
              <input
                type="text"
                required
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <FaTreeCity />
              <input
                type="text"
                required
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <MdLocationOn />
              <input
                type="number"
                required
                placeholder="Pin Code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div>
              <FaPhoneAlt />
              <input
                type="number"
                required
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>

            <div>
              <FaGlobe />
              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((country, i) => (
                    <option value={country.isoCode} key={i}>
                      {country.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div>
                <TbBuildingEstate />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((state) => (
                      <option key={state.isoCode} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shipping;
