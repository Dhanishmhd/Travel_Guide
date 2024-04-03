import React, { useState } from 'react'
import "./Guidlines.css"
import Header from '../../components/header/Header';


const Guidlines = () => {
    const [toggleState,setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div>
        <Header/>
        <section className="guidlines section">
            <h2 className="section__title">Guidlines</h2>
            <span className="section__subtitle">The Department of Tourism, Kerala would like to inform you thatthe access to the destinations and activities mentioned in this site are subjected to Government orders and migration of species. Tourists are advised to make prior enquiries on the contact number provided for the associted destinations before making the trip.</span>
            <div className="guidlines__container container">
                <div className="guidlines__tabs">
                    <div className={ toggleState === 1 ? "guidlines__button guidlines__active button--flex" : "guidlines__button  button--flex"} onClick={ () => toggleTab(1)}>
                    <i class='bx bx-check guidlines__icon'></i>Do's
                    </div>
                    <div className={ toggleState === 2 ? "guidlines__button guidlines__active button--flex" : "guidlines__button  button--flex"} onClick={ () => toggleTab(2)}>
                    <i class='bx bx-x guidlines__icon' ></i>Dont's
                    </div>
                </div>

                <div className="guidlines__section">
                    <div className={toggleState === 1 ? "guidlines__content guidlines__content-active" : "guidlines__content"} >

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Follow the rules and guidlines of the place that you are visiting. Be alert at all time</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Early morning and late afternoon are the ideal time to visit locations</span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Seek the assistance of forest guards/VSS,EDC guids while going into the forests</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Wear clothes having forest-friendly colours like green ,brown and khaki</span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">While enjoying adventure activities, follow the safety guidlines</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Use flashless camera in wildlife parks. Flashes can make animals scary</span>
                        </div>
                        
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Always carry drinking water, snacks, and other refreshments</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Carry a first aid kit with medicines for common ailnments</span>
                        </div>     
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Carry passport, a notepad, flashlight, roadmaps, bus/train/airline timetables for convenience</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle"></span>
                        </div>     
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle"></span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>
                    

                    </div>

                    <div className={toggleState === 2 ? "guidlines__content guidlines__content-active" : "guidlines__content"}>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Don't litter. Disposeof the waste properly.</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Don't smoke on restricted areas (Ecotourism places are mostly no-smoking zones.)</span>
                        </div>
                        
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Don't wear bright colours or strong perfumes.It might infuriate animals in park</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Don't try to explore unfamiliar things at destinations</span>
                        </div>
                        
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Don't travel alone in areas such as Elephant reserves</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Don't disturb or tease animals</span>
                        </div>
                        
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Don't travel alone in areas such as Elephant reserves</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Don't disturb or tease animals</span>
                        </div>
                        
                    </div>
                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Don't travel alone in areas such as Elephant reserves</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Don't disturb or tease animals</span>
                        </div>
                        
                    </div>

                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Don't travel alone in areas such as Elephant reserves</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Don't disturb or tease animals</span>
                        </div>
                        
                    </div>
                    <div className="guidlines__data">
                        <div className="">
                            <span className="guidlines__subtitle">Don't travel alone in areas such as Elephant reserves</span>
                        </div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>
                    </div>

                    <div className="guidlines__data">
                        <div></div>
                        <div>
                            <span className="guidlines__rounder"></span>
                            <span className="guidlines__line"></span>
                        </div>

                        <div className="">
                            <span className="guidlines__subtitle">Don't disturb or tease animals</span>
                        </div>
                        
                    </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Guidlines