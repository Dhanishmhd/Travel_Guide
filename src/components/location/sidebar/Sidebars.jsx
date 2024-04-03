import "./Sidebars.css"
import TouristAttraction from './touristAttraction/TouristAttraction'
import Month from './month/Month'
import Rating from './rating/Rating'

const Sidebars = ({ handleChange }) => {

  return (
    <div className="sidebar">
        <div className="logo__container">
          <h1>
          <i class='bx bxs-filter-alt filter'></i>
          </h1> 
        </div>
        <TouristAttraction handleChange={handleChange} />
        <Month handleChange={handleChange}/>
        <Rating handleChange={handleChange}/>
    </div>

  )
}

export default Sidebars