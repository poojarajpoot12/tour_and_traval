import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/packageinterest.css';

const Packages = () => {
    const navigate= useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Wildlife');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Category Buttons */}
      <div className='maindiv4'>
            <p className='heading1'><b>Packages By Interest</b></p>
            <div className="category-buttons">
                <ul className='list'>
                <button onClick={() => handleCategoryClick('Wildlife')}><li className='li'><a className='achor'>Wildlife</a></li></button>
                <button onClick={() => handleCategoryClick('Hill station')}><li className='li'><a className='achor'>Hill Stations</a></li></button>
                <button onClick={() => handleCategoryClick('Pilgrimage')}><li className='li'><a className='achor'>Pilgrimage</a></li></button>    
                <button onClick={() => handleCategoryClick('Heritage')}><li className='li'><a className='achor'>Heritage</a></li></button> 
                <button onClick={() => handleCategoryClick('Beach')}><li className='li'><a className='achor'>Beach</a></li></button>   
                <button onClick={() => handleCategoryClick('Honeymoon')}><li className='li'><a className='achor'>Honeymoon</a></li></button>
                <button onClick={() => handleCategoryClick('Adventure')}><li className='li'><a className='achor'>Advanture</a></li></button>
                <button onClick={() => handleCategoryClick('Trekking')}><li className='li'><a className='achor'>Trekking</a></li></button>
                </ul>
            </div>
        </div>
      

      {/* Content Rendering */}
      <div className="package1-content">
        {selectedCategory === 'Wildlife' && (
          <div>
           <section className="cards-row1">
                <div className="pachage-card">
                    <img src="/images/india-tiger.webp" alt=''/>
                    <div className="card-content">
                        <div className="card-title"><h6>Indian Tigher Tour</h6></div>
                        <div className="card-description">
                        <p>13 Nights-14 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/golden-tiger.webp" alt=""/>
                    <div className="card-content">
                        <div className="card-title"><h6>Golden Triangle with Tigers</h6></div>
                        <div className="card-description">
                        <p> 9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/rhino-tiger.webp" alt=""/>
                    <div className="card-content">
                        <div className="card-title"><h6>Rhino & Tigers Tour</h6></div>
                        <div className="card-description">
                        <p>13 Nights - 14 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/tiger-safari.webp" alt=""/>
                    <div className="card-content">
                        <div className="card-title"><h6>Tiger Safari Expedition</h6></div>
                        <div className="card-description">
                        <p>10 Nights - 11 Days</p>
                        </div>
                    </div>
                </div>
            </section><br></br>
            
            <section className="cards-row2">
                <div className="pachage-card">
                    <img src="/images/tiger-photo.webp" alt=""/>
                    <div className="card-content">
                        <div className="card-title"><h6>Tiger Photography</h6></div>
                        <div className="card-description">
                        <p>9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                  <a  onClick={()=>{navigate('/userregister')}}><img src="/images/corbet-safari.webp" alt=""/></a>
                  {/* <a onClick={()=>{navigate}}>  <img src="/images/corbet-safari.webp" alt="Image"/></a> */}
                    <div className="card-content">
                        <div className="card-title"><h6>Corbett Safari</h6></div>
                        <div className="card-description">
                        <p>7 Nights - 8 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/north-tiger.webp" alt=""/>
                    <div className="card-content">
                        <div className="card-title"><h6>North India Birding</h6></div>
                        <div className="card-description">
                        <p>13 Nights - 14 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/mp-tiger.webp" alt=""/>
                    <div className="card-content">
                        <div className="card-title"><h6>MP Wildlife Safari</h6></div>
                        <div className="card-description">
                        <p>7 Nights - 8 Days</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        //   </div>
        )}

        {selectedCategory === 'Hill station'&& (
            <div>
                <section className="cards-row1">
                <div className="pachage-card">
                    <img src="/images/hills/darzeeling-hills.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Darjeeling Pelling & Gangtok Tour</h6></div>
                        <div className="card-description">
                        <p>6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/hills/himachal-hills.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Himachal Hill Station Tour</h6></div>
                        <div className="card-description">
                        <p> 8 Nights - 9 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/hills/kashmir-hills.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Best of Kashmir</h6></div>
                        <div className="card-description">
                        <p>5 Nights - 6 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/hills/kumaon-hills.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Best of Kumaon Hills</h6></div>
                        <div className="card-description">
                        <p>5 Nights - 6 Days</p>
                        </div>
                    </div>
                </div>
            </section><br></br>
            
            <section className="cards-row2">
                <div className="pachage-card">
                    <img src="/images/hills/nainital-hils.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Nainital Kausani Ranikhet Tour</h6></div>
                        <div className="card-description">
                        <p>6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/hills/south-hills.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Best of South India</h6></div>
                        <div className="card-description">
                        <p>7 Nights - 8 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/hills/tawang-hills.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Tawang Hill Station Tour</h6></div>
                        <div className="card-description">
                        <p>8 Nights - 9 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/hills/uttarakhand-hills.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Best of Garhwal Hill Station Tour</h6></div>
                        <div className="card-description">
                        <p>7 Nights - 8 Days</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>

           
        )}

        {selectedCategory === 'Pilgrimage'&& (
            <div>
                <section className="cards-row1">
                <div className="pachage-card">
                    <img src="/images/pilgrimage/budhha.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Buddhist Pilgrimage Tour</h6></div>
                        <div className="card-description">
                        <p>9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/pilgrimage/chardham.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Chardham Tour</h6></div>
                        <div className="card-description">
                        <p>11 Nights - 12 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/pilgrimage/hemkund-sahib.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Hemkund Sahib Yatra</h6></div>
                        <div className="card-description">
                        <p>6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/pilgrimage/jain.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Jain Pilgrimage Tour</h6></div>
                        <div className="card-description">
                        <p>15 Nights - 16 Days</p>
                        </div>
                    </div>
                </div>
            </section><br></br>
            
            <section className="cards-row2">
                <div className="pachage-card">
                    <img src="/images/pilgrimage/jewis.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Jewish Pilgrimage Tou</h6></div>
                        <div className="card-description">
                        <p>9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/pilgrimage/jyotirlinga.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>12 Jyotirlinga Tour</h6></div>
                        <div className="card-description">
                        <p>23 Nights - 24 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/pilgrimage/kedarnath-temple.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Badrinath Kedarnath Yatra</h6></div>
                        <div className="card-description">
                        <p>7 Nights - 8 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/pilgrimage/south-temple.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>South India Temple Tour</h6></div>
                        <div className="card-description">
                        <p>11 Nights - 12 Days</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )}

        {selectedCategory === 'Heritage'&& (
            <div>
                <section className="cards-row1">
                <div className="pachage-card">
                    <img src="/images/heritage/central-heritage.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Central India Heritage Tour</h6></div>
                        <div className="card-description">
                        <p>15 Nights - 16 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/heritage/golden-heritage.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Golden Triangle Tour</h6></div>
                        <div className="card-description">
                        <p>6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/heritage/gujrat-heritage.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Best of Gujarat Heritage Tour</h6></div>
                        <div className="card-description">
                        <p>9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/heritage/khajuraho-heritage.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Khajuraho Gwalior Tour</h6></div>
                        <div className="card-description">
                        <p>6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>
            </section><br></br>
            
            <section className="cards-row2">
                <div className="pachage-card">
                    <img src="/images/heritage/mp-heritage.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>MP Historical Tour</h6></div>
                        <div className="card-description">
                        <p>6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/heritage/oddisha-heritage.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Odisha Heritage Tour</h6></div>
                        <div className="card-description">
                        <p>5 Nights - 6 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/heritage/rajasthan-heritage.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Forts & Palaces Tour of Rajasthan</h6></div>
                        <div className="card-description">
                        <p>13 Nights - 14 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/heritage/south-heritage.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>South India Heritage</h6></div>
                        <div className="card-description">
                        <p>11 Nights - 12 Days</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )}

        {selectedCategory === 'Beach'&& (
            <div>
                <section className="cards-row1">
                <div className="pachage-card">
                    <img src="/images/beachs/andaman-beach.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Andaman Beach Tour</h6></div>
                        <div className="card-description">
                        <p> 8 Nights - 9 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/beachs/best-beach.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Best of India Beach </h6></div>
                        <div className="card-description">
                        <p> 10 Nights - 11 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/beachs/daman-beach.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Daman Beach Tour</h6></div>
                        <div className="card-description">
                        <p>2 Nights - 3 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/beachs/goa-beach.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Goa Beach Tour with Golden </h6></div>
                        <div className="card-description">
                        <p>11 Nights - 12 Days</p>
                        </div>
                    </div>
                </div>
            </section><br></br>
            
            <section className="cards-row2">
                <div className="pachage-card">
                    <img src="/images/beachs/gujrat-beach.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Gujarat Diu Beach </h6></div>
                        <div className="card-description">
                        <p> 6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/beachs/kerala-beach.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Kerala Beach & Backwater Tour</h6></div>
                        <div className="card-description">
                        <p>10 Nights - 11 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/beachs/lakshdweep-beach.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Lakshadweep Beach Tour</h6></div>
                        <div className="card-description">
                        <p>4 Nights - 5 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/beachs/maharashtra-beach.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Maharashtra Beach Tour</h6></div>
                        <div className="card-description">
                        <p>12 Nights - 13 Days</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )}
         {selectedCategory === 'Honeymoon'&& (
            <div>
                <section className="cards-row1">
                <div className="pachage-card">
                    <img src="/images/honeymoon/darjeeling-honeymoon.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Sikkim Darjeeling Honeymoon </h6></div>
                        <div className="card-description">
                        <p> 7 Nights - 8 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/honeymoon/goa-honeymoon.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Goa Honeymoon Tour</h6></div>
                        <div className="card-description">
                        <p>5 Nights - 6 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/honeymoon/kashmir-honeymoon.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Kashmir Honeymoon Tour</h6></div>
                        <div className="card-description">
                        <p>6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/honeymoon/kerala-honeymoon.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Kerala Honeymoon Tour</h6></div>
                        <div className="card-description">
                        <p>7 Nights - 8 Days</p>
                        </div>
                    </div>
                </div>
            </section><br></br>
            
            <section className="cards-row2">
                <div className="pachage-card">
                    <img src="/images/honeymoon/kerala1-honeymoon.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Kerala Honeymoon Tour</h6></div>
                        <div className="card-description">
                        <p>6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/honeymoon/manali-honeymoon.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Kullu Manali Honeymoon Tour</h6></div>
                        <div className="card-description">
                        <p>5 Nights - 6 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/honeymoon/sikkim-honeymoon.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>North Sikkim Honeymoon Tour</h6></div>
                        <div className="card-description">
                        <p>7 Nights - 8 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/honeymoon/uttarakhand-honeymoon.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Uttarakhand Honeymoon Tour</h6></div>
                        <div className="card-description">
                        <p> 6 Nights - 7 Days</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )}

        
         
        {selectedCategory === 'Adventure'&& (
            <div>
                <section className="cards-row1">
                <div className="pachage-card">
                    <img src="/images/advanture/garhwal-biking.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Mountain Biking in Garhwal </h6></div>
                        <div className="card-description">
                        <p>13 Nights - 14 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/advanture/himachal-biking.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Mountain Biking in Himachal</h6></div>
                        <div className="card-description">
                        <p> 15 Nights - 16 Days </p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/advanture/kumaon-biking.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Mountain Biking in Kumaon</h6></div>
                        <div className="card-description">
                        <p>9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/advanture/ladakh-biking.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Mountain Biking in Ladakh</h6></div>
                        <div className="card-description">
                        <p>11 Nights - 12 Days</p>
                        </div>
                    </div>
                </div>
            </section><br></br>
            
            <section className="cards-row2">
                <div className="pachage-card">
                    <img src="/images/advanture/manali-jeep.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Manali Leh Jeep Safari</h6></div>
                        <div className="card-description">
                        <p>   9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/advanture/manali-peak.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Manali Peak Expedition </h6></div>
                        <div className="card-description">
                        <p>11 Nights - 12 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/advanture/sikkim-biking.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Mountain Biking in Sikkim</h6></div>
                        <div className="card-description">
                        <p>9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/advanture/trans-motor.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Trans Himalayan Motor Safari</h6></div>
                        <div className="card-description">
                        <p>19 Nights - 20 Days</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )}
         {selectedCategory === 'Trekking'&& (
            <div>
                <section className="cards-row1">
                <div className="pachage-card">
                    <img src="/images/trekking/adi-kailash-trek.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Adi Kailash Trek</h6></div>
                        <div className="card-description">
                        <p>  9 Nights - 10 Days </p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/trekking/green-lake-trek.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Green Lake Trek</h6></div>
                        <div className="card-description">
                        <p>15 Nights - 16 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/trekking/kanchenjunga-trek.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Kanchenjuga Base Camp Trek</h6></div>
                        <div className="card-description">
                        <p>10 Nights - 11 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/trekking/kinner-kailash-trek.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Kinner Kailash Trek </h6></div>
                        <div className="card-description">
                        <p> 10 Nights - 11 Days</p>
                        </div>
                    </div>
                </div>
            </section><br></br>
            
            <section className="cards-row2">
                <div className="pachage-card">
                    <img src="/images/trekking/manimahesh-kailash-trek.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Manimahesh Kailash Trek</h6></div>
                        <div className="card-description">
                        <p> 10 Nights - 11 Days</p>
                        </div>
                    </div>
                </div>

                <div className="pachage-card">
                    <img src="/images/trekking/nubra-valley-trek.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Nubra Valley Trek</h6></div>
                        <div className="card-description">
                        <p> 9 Nights - 10 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/trekking/punch-kedar-trek.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Panch Kedar Trek</h6></div>
                        <div className="card-description">
                        <p>14 Nights - 15 Days</p>
                        </div>
                    </div>
                </div>
                <div className="pachage-card">
                    <img src="/images/trekking/snow-leopard-trek.webp" alt="Image"/>
                    <div className="card-content">
                        <div className="card-title"><h6>Snow Leopard Trek</h6></div>
                        <div className="card-description">
                        <p> 12 Nights - 13 Days</p>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )}

       
      </div>
    </div>
  );
};

export default Packages;
