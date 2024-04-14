import React, { useState } from 'react'
import "./Planing.css"
import image from  "../../assets/images/travel.jpg"

const Planing = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [interests, setInterests] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [majorDistricts, setMajorDistricts] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logic to handle form submission
      console.log('Form submitted!');
      // You can send the form data to your backend or perform any other actions here
    };
  
    return (
      <section className='planning'>
        <img className='planning__image' src={image} alt="kerala location" />
        <h2 className='planning__title'>Plan Your Trip to Kerala</h2>
        <div className='planning__form'>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="planning__form-row">
                <div className="planning__form-div from">
                  <label className='planning__form-tag' htmlFor="fromDate">From</label>
                  <input
                    type="date"
                    id="fromDate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    required
                    className="planning__form-input"
                    placeholder='Select Start Date'
                  />
                </div>
                <div className="planning__form-div to">
                  <label className='planning__form-tag' htmlFor="toDate">To</label>
                  <input
                    type="date"
                    id="toDate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    required
                    className="planning__form-input"
                    placeholder='Select End Date'
                  />
                </div>
              </div>
              <div className="planning__form-div district">
                <label className='planning__form-tag' htmlFor="majorDistricts">Major Districts to Visit</label>
                <input
                  type="text"
                  id="majorDistricts"
                  value={majorDistricts}
                  onChange={(e) => setMajorDistricts(e.target.value)}
                  placeholder="Enter major districts to be visited"
                  required
                  className="planning__form-input"      
                />
              </div>
              <div className="planning__form-row">
                  <div className="planning__form-div planning__form-area from">
                    <label className='planning__form-tag' htmlFor="interests">Interests</label>
                    <textarea
                      id="interests"
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                      rows="4"
                      className="planning__form-input"
                      placeholder='Enter Your Preferences on Locations (Optional)'
                    />
                  </div>
                  <div className="planning__form-div planning__form-area to">
                    <label className='planning__form-tag' htmlFor="additionalInfo">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      cols="30" rows="10"
                      className="planning__form-input"
                      placeholder='Any Additional Information(Optional)'
                    />
                  </div>
              </div>
              <div className='btn'>
                <button type="submit" className="button button--flex btn-submit">
                  Start PLanning
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  };

export default Planing
