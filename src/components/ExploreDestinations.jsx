import React, { useState, useRef, useEffect } from 'react';
import '../css/ExploreDestinations.css';

const ExploreDestinations = () => {
  const categories = ['North India', 'South India', 'East India', 'West India', 'Central India'];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const buttonRefs = useRef([]);

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(category);
    const button = buttonRefs.current[index];
    if (button) {
      setUnderlineStyle({
        left: button.offsetLeft,
        width: button.offsetWidth
      });
    }
  };

  useEffect(() => {
    if (buttonRefs.current[0]) {
      setSelectedCategory(categories[0]);
      setUnderlineStyle({
        left: buttonRefs.current[0].offsetLeft,
        width: buttonRefs.current[0].offsetWidth
      });
    }
  }, []);

  const imageData = {
    'North India': {
      big: { src: '/images/uttarakhand01-package.webp', title: 'Uttarakhand', packages: '50+ Packages' },
      small: [
        { src: '/images/rajasthan-package.webp', title: 'Rajasthan', packages: '20+ Packages' },
        { src: '/images/himachal-package.webp', title: 'Himachal', packages: '40+ Packages' },
        { src: '/images/j&k-package.webp', title: 'Jammu & Kashmir', packages: '30+ Packages' },
        { src: '/images/up-package.webp', title: 'Uttar Pradesh', packages: '35+ Packages' },
        { src: '/images/delhi-package.webp', title: 'Delhi', packages: '25+ Packages' },
        { src: '/images/ladakh-trend.webp', title: 'Ladakh', packages: '15+ Packages' },
      ]
    },
    'South India': {
      big: { src: '/images/south-india/kerala-package.webp', title: 'Kerala', packages: '50+ Packages' },
      small: [
        { src: '/images/south-india/karnataka-package.webp', title: 'Karnataka', packages: '20+ Packages' },
        { src: '/images/south-india/tamilnadu-package.webp', title: 'Tamil Nadu', packages: '45+ Packages' },
        { src: '/images/south-india/andaman-package.webp', title: 'Andaman', packages: '10+ Packages' },
        { src: '/images/south-india/puducherry-package.webp', title: 'Puducherry', packages: '12+ Packages' },
        { src: '/images/south-india/andhra-package.webp', title: 'Andhra Pradesh', packages: '18+ Packages' },
        { src: '/images/south-india/telangana-package.webp', title: 'Telangana', packages: '14+ Packages' },
      ]
    },
    'East India': {
      big: { src: '/images/eastIndia/sikkim-package.webp', title: 'Sikkim', packages: '28+ Packages' },
      small: [
        { src: '/images/eastIndia/arunachal-package.webp', title: 'Arunachal Pradesh', packages: '10+ Packages' },
        { src: '/images/eastIndia/meghalaya-package.webp', title: 'Meghalaya', packages: '18+ Packages' },
        { src: '/images/eastIndia/nagaland-package.webp', title: 'Nagaland', packages: '12+ Packages' },
        { src: '/images/eastIndia/assam-package.webp', title: 'Assam', packages: '20+ Packages' },
        { src: '/images/eastIndia/odisha-package.webp', title: 'Odisha', packages: '22+ Packages' },
        { src: '/images/eastIndia/wb-package.webp', title: 'West Bengal', packages: '25+ Packages' },
      ]
    },
    'West India': {
      big: { src: '/images/wastIndia/goa-package.webp', title: 'Goa', packages: '40+ Packages' },
      small: [
        { src: '/images/wastIndia/gujarat-package.webp', title: 'Gujarat', packages: '33+ Packages' },
        { src: '/images/wastIndia/maharashtra-package.webp', title: 'Maharashtra', packages: '36+ Packages' },
        { src: '/images/wastIndia/dadra-package.webp', title: 'Dadra & Nagar Haveli', packages: '8+ Packages' },
        { src: '/images/wastIndia/gir-package.webp', title: 'Gir Forest', packages: '6+ Packages' },
        { src: '/images/wastIndia/pune-package.webp', title: 'Pune', packages: '14+ Packages' },
        { src: '/images/wastIndia/daman&diu-package.webp', title: 'Daman & Diu', packages: '9+ Packages' },
      ]
    },
    'Central India': {
      big: { src: '/images/centralIndia/mp-package.webp', title: 'Madhya Pradesh', packages: '44+ Packages' },
      small: [
        { src: '/images/centralIndia/chattisgarh-package.webp', title: 'Chhattisgarh', packages: '13+ Packages' },
        { src: '/images/centralIndia/kahna-package.webp', title: 'Kanha National Park', packages: '7+ Packages' },
        { src: '/images/centralIndia/khajuraho-package.webp', title: 'Khajuraho', packages: '11+ Packages' },
        { src: '/images/centralIndia/bandhavgarh-package.webp', title: 'Bandhavgarh', packages: '10+ Packages' },
        { src: '/images/centralIndia/bhopal-package.webp', title: 'Bhopal', packages: '14+ Packages' },
        { src: '/images/centralIndia/ujjain-package.webp', title: 'Ujjain', packages: '16+ Packages' },
      ]
    }
  };

  const currentData = imageData[selectedCategory];

  return (
    <div>
      <div className='maindiv2'>
        <p className='heading'><b>Explore Top Destinations by Region</b></p>
        <div className="category-buttons">
          <div className='trand-list'>
            <ul className='nav'>
              {categories.map((category, index) => (
                <button
                  key={category}
                  ref={el => buttonRefs.current[index] = el}
                  onClick={() => handleCategoryClick(category, index)}
                  className={`nav-items ${selectedCategory === category ? 'active' : ''}`}
                >
                  <li>{category}</li>
                </button>
              ))}
            </ul>
            <div className="underline" style={underlineStyle}></div>
          </div>
        </div>
        <div className='line'></div>
      </div>

      {/* Content Rendering */}
      {currentData && (
        <div className="location">
          <section>
            <div className='locations'>
              <div className='imgs'>
                <img src={currentData.big.src} className='big-img' alt={currentData.big.title} />
                <div className='overlay'><p><strong>{currentData.big.title}</strong><br />{currentData.big.packages}</p></div>
              </div>
              <div className='small-class'>
                {currentData.small.map((item, idx) => (
                  <div key={idx} className='img-wrapper'>
                    <img src={item.src} className='multi-img' alt={item.title} />
                    <div className='overlay'><p><strong>{item.title}</strong><br />{item.packages}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ExploreDestinations;
