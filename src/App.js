import { useState } from "react";
import './App.css';

function App()
{
  const [formData,setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments : false,
    candidates : false,
    offers : false,
    notification: ""
  })

  function submitHandler(e)
  {
    e.preventDefault();
    console.log("The final data is ");
    console.log(formData);
  }

  function changeHandler(event,prevData)
  {
      const {name,type,checked,value} = event.target;
      setformData(prevData => {
        return {
          ...prevData,
          [name]: type === "checkbox" ? checked : value
        }
      })
  
  }


  return (
    <div className="container">
      <div className="form-container">
        <br/>
        <br/>
        <label htmlFor="first-name" className="label">First Name</label>
        <input id="first-name" placeholder="John" type="text" value={formData.firstName} onChange={changeHandler} name="firstName"/>
        
        <br/>
        <label htmlFor="last-name" className="label">Last Name</label>
        <input id="last-name" placeholder="Doe" type="text" value={formData.lastName} onChange={changeHandler} name="lastName"/>

        <br/>
        <label htmlFor="email" className="label">Email</label>
        <input id="email" placeholder="xyz@gmail.com" type="email" value={formData.email} onChange={changeHandler} name="email"/>

        <br/>
        <label htmlFor="street-address" className="label">Street Address</label>
        <input id="street-address" placeholder="B-21/23,Sector-54" type="text" value={formData.streetAddress} onChange={changeHandler} name="streetAddress"/>

        <br/>
        <label htmlFor="city" className="label">City</label>
        <input id="city" placeholder="Noida" type="text" value={formData.city} onChange={changeHandler} name="city"/>

        <br/>
        <label htmlFor="state" className="label">State/Province</label>
        <input id="state" type="text" placeholder="Uttar Pradesh" value={formData.state} onChange={changeHandler} name="state"/>

        <br/>
        <label htmlFor="postal-code" className="label">ZIP/Postal Code</label>
        <input id="postal-code" placeholder="201402" type="text" value={formData.postalCode} onChange={changeHandler} name="postalCode"/>

        <div className="checkboxes">
            <label className="label">By Email</label><br/>
            <input value={formData.comments} name="comments" onChange={changeHandler} type="checkbox" id="comments"/>
            <label className="label text-align" htmlFor="comments">Comments</label>
            <br/>
            <span>Get notified when someones posts a comment on a posting.</span><br/>

            <input value={formData.candidates} name="candidates" onChange={changeHandler} type="checkbox" id="candidates"/>
            <label className="label text-align" htmlFor="candidates">Candidates</label>
            <br/>
            <span>Get notified when a candidate applies for a job.</span><br/>

            <input value={formData.offers} onChange={changeHandler} name="offers" type="checkbox" id="offers"/>
            <label className="label text-align" htmlFor="offers">Offers</label>
            <br/>
            <span>Get notified when a candidate accepts or rejects an offer.</span>
        </div>

        <div className="radio-container">

          <label className="label">Push Notifications</label>
          <br/>
          <span className="last-span">These are delivered via SMS to your mobile phone.</span><br/>

          <input value="everything" onChange={changeHandler} id="everything" type="radio" name="notification"/>
          <label className="label text-align" htmlFor="everything">Everything</label><br/>

          <input value="same as email" onChange={changeHandler} id="same" type="radio" name="notification"/>
          <label className="label text-align" htmlFor="same">Same as email</label><br/>

          <input value="no push notifications" onChange={changeHandler} id="no" type="radio" name="notification"/>
          <label className="label text-align" htmlFor="no">No push notifications</label>

        </div>


      </div>
      <button onClick={submitHandler}>Save</button>
    </div>
  );
}

export default App;