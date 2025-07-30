import React, { useState } from 'react';
import '../css/northindiapackage.css';

const BookingForm = ({ pkg, onBack }) => {
  return (
    <div className='bigcontainer'>
      <div className='textcontainer'>
        {/* Left side - Tour details */}
      
        <h1 className='titleheading'>{pkg.title}</h1>
        <p className='titleheading'>{pkg.description}</p>
        {/* Optional: Add more specific info if available */}
        <h1>{pkg.tourplan_heading}</h1>
        <p>{pkg.tourplan_pera}</p>
        <h1>{pkg.dayplanheading}</h1>
        <h4>{pkg.dayplan1}</h4>
        <h6>{pkg.day1}</h6>
        <p>{pkg.ans01}</p>
        <h4>{pkg.dayplan2}</h4>
        <h6>{pkg.day2}</h6>
        <p>{pkg.ans02}</p>
        <h4>{pkg.dayplan3}</h4>
        <h6>{pkg.day3}</h6>
        <p>{pkg.ans03}</p>
        <h4>{pkg.dayplan4}</h4>
        <h6>{pkg.day4}</h6>
        <p>{pkg.ans04}</p>

      </div>
    <div className='booking-form'>
      <h2>{pkg.title}</h2>
      <form className='form'>
        <p>Personal Details</p>
        <div>
          <input type="text" placeholder="Your Name" required className='input'/>
        </div>
        <div>
          <input type="email" placeholder="Email" required className='input'/>
        </div>
        <div>
          <input type="tel" placeholder="Phone Number" required className='input'/>
        </div>
        <div>
          <input type="date" placeholder="Travel Date" required className='input'/>
        </div>
        <p>Accomdation</p>
        <div>
          <input type="text" placeholder="Your Name" required className='input'/>
        </div>
        <div>
          <input type="email" placeholder="Email" required className='input'/>
        </div>
        <div>
          <input type="tel" placeholder="Phone Number" required className='input'/>
        </div>
        <div>
          <input type="date" placeholder="Travel Date" required className='input'/>
        </div>
        <button type="submit">Submit Booking</button>
        <br />
        <button type="button" onClick={onBack} style={{ marginTop: '10px' }}>
          Back to Packages
        </button>
      </form>
    </div>
    </div>
  
  );
};

const PackageBooking = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { id: 1, title: 'Golden Triangle', description: 'Delhi, Agra, Jaipur',tourplan_heading:'Overview',
      tourplan_pera:'Golden Triangle Tour is one of the perfect ways to gain insight into the diverse Indian culture. It covers the three most prominent sites in North India: Delhi, Agra, and Jaipur. The tour is an ideal way to explore the ancient Indian culture and traditions that still captivate history lovers worldwide. Additionally, it allows tourists to visit UNESCO World Heritage Sites and beautiful ancient monuments in these cities.For those short on time but eager to explore India s rich cultural heritage, the 3 nights 4 days Golden Triangle tour package offered by Tour My India is the best itinerary for an incredible vacation. The tour offers an exciting 3-night and 4-day Golden Triangle experience that is both enjoyable and affordable. In addition to the three major cities of the Golden Triangle, we will also take you to the historically significant site of Fatehpur Sikri.Book this 4-day Golden Triangle tour for the best holiday deal. The package is also customizable to suit your preferences.' ,
      dayplanheading:'Itinerary',dayplan1:'Day: 01',day1:'Arrive Delhi - Agra',ans01:'On arrival in Delhi, our representative will be there to receive you and take you straight to Agra. On arrival in Agra, check-in at the hotel. Later, in the evening, take a visit to the Agra fort. Enjoy an overnight stay at the hotel.',
      dayplan2:'Day: 02',day2:'Agra - Fatehpur Sikri - Jaipur',ans02:'In the morning after breakfast at the hotel, we will be proceeding to visit the Taj Mahal. Later, we will be driving to Jaipur. En-route, we will be visiting Fatehpur Sikri. This ancient monument was built during 1571 and 1585. It is one of the finest examples of Mughal architectural splendour at its height. Though the city is in ruins, it is a place to visit for the tourists coming to Agra. But in real terms, Fatehpur Sikri is a place where one should spend some time. The sunset over the ruins is sight to cherish.',
      dayplan3:'Day: 03',day3:'Jaipur',ans03:'After breakfast at the hotel in the morning, we will be visiting Amber Fort, which was the ancient capital of the State. Further, we will be visiting the Hall of Victory or the Sheesh Mahal glittering with mirrors. Ascend the Fort on Elephant back. In the afternoon, we will be proceeding for a tour of Jaipur city.Jaipur - the capital of Rajasthan was given a colour coat of pink a century ago in honour of a visiting Prince and ever since, it has retained this colour. Built by Maharaja Jai Singh, the notable astronomer, this city is 260 years old.Thereafter, we will be visiting Maharaja s City Palace, the Observatory. Further, we will drive past Hawa Mahal and through the pink rose residential & business areas. An overnight stay at the hotel.',
      dayplan4:'Day: 04',day4:'Jaipur/ Dehli Departure',ans04:'n the morning after breakfast at the hotel, we will be driving back to Delhi. On arrival in Delhi, we will drop you at the international airport to catch the connect flight for onward destination.'
    },
    { id: 2, title: 'Royal Rajasthan', description: 'Jodhpur, Udaipur, Jaipur',tourplan_heading:'Overview', tourplan_pera:'Discover the regal charm of India through our Royal Rajasthan Tour, a journey that takes you deep into the heart of Rajasthan’s rich heritage, grand palaces, desert landscapes, and vibrant culture. This tour covers the most iconic royal cities — Udaipur, Jodhpur, Jaisalmer, and Jaipur — where centuries-old traditions blend seamlessly with majestic architecture.Wander through ancient forts, stay in heritage palaces, and experience the grandeur of Rajasthan, a land where every corner echoes with tales of bravery and royalty. This 7 nights, 8 days tour is thoughtfully curated by Tour My India to provide a perfect balance of cultural exploration, historical immersion, and luxurious comfort.Ideal for history lovers, cultural enthusiasts, and romantic travelers, this tour lets you walk in the footsteps of kings and queens while soaking in the vibrant colors and flavors of Rajasthan.Book this 8-day Royal Rajasthan experience for an unforgettable journey into India’s majestic past. The package can also be tailored to your specific interests and schedule.',
      dayplanheading:'Itinerary',dayplan1:'Day: 01',day1:'Arrival in Udaipur',ans01:'Upon arrival in Udaipur, the City of Lakes, our representative will greet you and escort you to your hotel. Later, enjoy a relaxing boat ride on Lake Pichola as the sun sets behind the majestic City Palace and Jag Mandir. Overnight stay at the hotel.',
      dayplan2:'Day: 02',day2:'Udaipur Sightseeing.',ans02:'After breakfast, explore the beautiful Udaipur City Palace, the Crystal Gallery, Jagdish Temple, and Saheliyon Ki Bari (Garden of the Maidens). In the evening, you can enjoy cultural performances at Bagore Ki Haveli. Overnight in Udaipur.',
      dayplan3:'Day: 03',day4:'Udaipur – Jodhpur (Approx. 5–6 hrs)',ans03:'After breakfast, drive to Jodhpur — the Blue City. On arrival, check-in at the hotel. In the evening, enjoy a leisure walk in the bustling markets near Clock Tower. Overnight stay in Jodhpur.',
      dayplan4:'Day: 04',day04:'Jaipur/ Dehli Departure',ans04:'n the morning after breakfast at the hotel, we will be driving back to Delhi. On arrival in Delhi, we will drop you at the international airport to catch the connect flight for onward destination.'
    },
    { id: 3, title: 'Ladakh Adventure', description: 'Leh, Pangong, Nubra' },
    { id: 4, title: 'Golden Triangle', description: 'Delhi, Agra, Jaipur' },
    { id: 5, title: 'Royal Rajasthan', description: 'Jodhpur, Udaipur, Jaipur' },
    { id: 6, title: 'Ladakh Adventure', description: 'Leh, Pangong, Nubra' },
  ];
  // const aboutpackage=()=>{

  // }

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleBack = () => {
    setSelectedPackage(null);
  };

  return (
    <>
     <div className="maincontainer">
            <img src="https://aryango.com/wp-content/uploads/2023/06/North-India.jpg" width={'100%'} height={'500px'} alt="North India Packages"/>
            <h1 className='img-text'>North India Special Packages</h1>
        </div>
        <div className="bigcontainer">
            <div className="textcontainer">
                <h1>North India Tour Packages</h1>
                    <p>Planning a trip to North India? At Tour My India, we bring you customizable North India tour packages that promise to turn your travel dreams into unforgettable experiences. Our meticulously crafted North India holiday packages cater to every kind of traveler—be it history buffs, culture lovers, adventure seekers, spiritual pilgrims, or honeymooners.

                    With seamless travel arrangements, expert guides, comfortable accommodations, and flexible itineraries, we ensure a hassle-free and immersive journey through this culturally rich and geographically diverse region. Let us take the stress out of planning so you can focus on soaking in the magic of North India.

                    From the snow-capped Himalayas to the golden sands of Rajasthan, North India is a captivating tapestry of tradition, grandeur, spirituality, and natural beauty. Explore vibrant cities like Delhi, Jaipur, and Varanasi; experience the royal heritage of Rajasthan; find peace in the mountains of Himachal Pradesh and Ladakh; or embark on a spiritual journey to Amritsar, Haridwar, or Bodh Gaya.</p>

                    <h2>🌟 Popular Experiences in North India:</h2>
                    <ol start={1}>
                    <li> Golden Triangle Tour (Delhi, Agra, Jaipur) – history, architecture & cultural vibrance.</li>

                    <li>Himalayan Escapes – Shimla, Manali, Dharamshala, Leh & Ladakh.</li>

                    <li>Spiritual Circuits – Varanasi Ganga Aarti, Amritsar’s Golden Temple, Rishikesh yoga retreats.</li>

                    <li>Royal Rajasthan – forts, palaces, and desert adventures in Jodhpur, Udaipur, and Jaisalmer.</li>

                    <li>Wildlife Safaris – in Corbett, Ranthambore, and Keoladeo National Park.</li>
                    </ol>

                    <p>Whether you're planning a family vacation, a solo expedition, or a romantic honeymoon, North India offers something extraordinary for everyone. Book your North India tour with Tour My India for a truly unforgettable journey filled with stories, colors, and culture.</p>
                    
            </div>
            <div className="imagecontrainer"> 
              <img src="images/OIP.jpeg" alt="Tour" className="responsive-img" />
            </div>

           
        </div>
  
    <div>
        <h2 className='h2'>Tour Packages</h2>
      {selectedPackage ? (
        <BookingForm pkg={selectedPackage} onBack={handleBack} />
      ) : (
        <div className='card-div'>
         
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                
                width:'250px',
                border: '1px solid #ccc',
                borderRadius:'10px',
                padding: '20px',
                marginBottom: '15px',
              }}
            >
              <h4>{pkg.title}</h4>
              <p>{pkg.description}</p>
              <button onClick={() => handleBookNow(pkg)}>Book Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default PackageBooking;
