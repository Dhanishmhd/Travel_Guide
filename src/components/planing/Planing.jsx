import React, { useState } from 'react'
import "./Planing.css"
import image from  "../../assets/images/travel.jpg"
import ReactMarkdown from 'react-markdown';


const Planing = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [interests, setInterests] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [majorDistricts, setMajorDistricts] = useState('');
    const [result, setResult] = useState("")
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const res = await fetch("http://localhost:4000/chat/", {
        method: "post",
        headers: {
          "Content-Type": "application/json" // Specify JSON content type
        },
        body: JSON.stringify({
          fromDate,
          toDate,
          interests,
          additionalInfo,
          majorDistricts
        })
      });
    
      if(res.ok){
        const resultText = await res.text();
            // Apply Markdown syntax to the result
            // const formattedResult = applyMarkdownSyntax(resultText);
            setResult(resultText);
      }else{
        setResult("")
      }
    };
  //   const applyMarkdownSyntax = (text) => {
  //     // Apply Markdown syntax as needed
  //     // For example, convert asterisks to bold
  //     return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // };
    
  
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
                  className="planning__form-input"      
                />
              </div>
              <div className="planning__form-row">
                  <div className="planning__form-div planning__form-area from">
                    <label className='planning__form-tag' htmlFor="interests">Interested activities</label>
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
        <div className='planning_container'>
          <ReactMarkdown className="planning__result">{result}</ReactMarkdown>
        </div>
        
      </section>

    );
  };

export default Planing;
