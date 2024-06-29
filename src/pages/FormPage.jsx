import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; // Ensure you import your firebase config correctly

const LocationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: '',
    district: '',
    touristAttraction: '',
    month: [],
    activity: [],
    phone: '',
    mail: '',
    location: '',
    img: ''
  });

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const activities = ["Zip Line", "Trekking", "Off Roading", "Skiing", "Hiking", "Sightseeing"];
  const ratings = [1, 2, 3, 4, 5];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'month' || name === 'activity') {
        const currentArray = formData[name];
        const updatedArray = checked
          ? [...currentArray, value]
          : currentArray.filter(item => item !== value);
        setFormData({
          ...formData,
          [name]: updatedArray
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Validation to check if all fields are filled
    const isFormValid = Object.values(formData).every(value => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value.trim() !== '';
    });

    if (!isFormValid) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const locationCollectionRef = collection(db, "locations"); // Make sure the collection name is correct

    await addDoc(locationCollectionRef, { ...formData });

    // Reset form after submission
    setFormData({
      title: '',
      description: '',
      rating: '',
      district: '',
      touristAttraction: '',
      month: [],
      activity: [],
      phone: '',
      mail: '',
      locationUrl: '',
      img: '',
      location:''
    });
  };

  return (
    <>
      <style>{`
        .form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .form-container label {
          display: block;
          margin: 10px 0 5px;
          font-weight: bold;
        }
        .form-container input[type="text"],
        .form-container input[type="email"],
        .form-container textarea {
          width: 100%;
          padding: 8px;
          margin: 5px 0 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .form-container button {
          padding: 10px 20px;
          background-color: #28a745;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .form-container button:hover {
          background-color: #218838;
        }
        .checkbox-group, .radio-group {
          margin: 10px 0;
        }
        .checkbox-group label, .radio-group label {
          margin-right: 10px;
        }
      `}</style>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            District:
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
            />
          </label>
          <label>
            Tourist Attraction Type:
            <input
              type="text"
              name="touristAttraction"
              value={formData.touristAttraction}
              onChange={handleChange}
            />
          </label>
          <div className="checkbox-group">
            <label>Best Months to Visit:</label>
            {months.map(month => (
              <label key={month}>
                <input
                  type="checkbox"
                  name="month"
                  value={month}
                  checked={formData.month.includes(month)}
                  onChange={handleChange}
                />
                {month}
              </label>
            ))}
          </div>
          <div className="checkbox-group">
            <label>Activities:</label>
            {activities.map(activity => (
              <label key={activity}>
                <input
                  type="checkbox"
                  name="activity"
                  value={activity}
                  checked={formData.activity.includes(activity)}
                  onChange={handleChange}
                />
                {activity}
              </label>
            ))}
          </div>
          <div className="radio-group">
            <label>Rating:</label>
            {ratings.map(rating => (
              <label key={rating}>
                {rating}
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={formData.rating === rating.toString()}
                  onChange={handleChange}
                />
              </label>
            ))}
          </div>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
            />
          </label>
          <label>
            Location Url (Google Map):
            <input
              type="url"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="url"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LocationForm;
