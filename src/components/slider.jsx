// SliderComponent.jsx
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/slider.css';

const Slider = () => {
const navigate=useNavigate();
const slides = [
    {
      background: '/images/tourismtype/luxury-train-sec.webp',
      foreground: '/images/tourismtype/shape-img.png',
      title: 'Luxury Trains',
      description: 'LUXURIOUS RAIL ESCAPADE',
      line:"",
      tilte1:"Experience the epitome of luxury while traversing India's stunning landscapes.",
      btn:"Learn More"
      
    },
    {
      background: '/images/tourismtype/ayurveda-tourism-sec.webp',
      foreground: '/images/tourismtype/shape-img.png',
      title: 'Ayurveda Tourism',
      description: 'Embrace Holistic Wellness',
      line:"",
      tilte1:"Find the top Ayurveda retreats in India. ",
      btn:"Learn More"
    },
    {
      background: '/images/tourismtype/medical-tourism.webp',
      foreground: '/images/tourismtype/shape-img.png',
      title: 'Medical  Tourism',
      description: 'Best Medicare Solution',
      line:"",
      tilte1:"Discover Top-Tier, Cost-Effective Medical Services in India.",
      btn:"Learn More"
    },
    {
        background: '/images/tourismtype/wedding-sec.webp',
        foreground: '/images/tourismtype/shape-img.png',
        title: 'Destination  Weddings',
      description: 'India Wedding Planner',
      line:"",
      tilte1:"Design your fairy-tale wedding in dreamlike locations. ",
      btn:  "Learn More"
      }
  ];
  // slides.js
  // slides.js
const cardsilde = [
    {
        id: 1,
        image: '/images/tourismtype/train.png',
        title: 'LUXERY TRAIN'
    },
    {
      id: 2,
      image: '/images/tourismtype/ayurveda.svg',
      title: 'AYURVEDA TOURISM'
    },
    {
        id: 3,
        image: '/images/tourismtype/luxury-1.svg',
        title: 'MEDICAL TOURISM'
    },
    {
        id: 4,
      image: '/images/tourismtype/luxury-2.svg',
      title: 'DESINATION WEDDINGS'
    },
    
  ];

  const [index, setIndex] = useState(0);

  const visibleCardCount = 3;

  const getLoopedIndex = (index) => {
    const total = cardsilde.length;
    return (index + total) % total;
  };

  const visibleCards = [];
  for (let i = 0; i < visibleCardCount; i++) {
    visibleCards.push(cardsilde[getLoopedIndex(index + i)]);
  }
  const handleCardPrev = () => {
    setIndex((prevIndex) => getLoopedIndex(prevIndex - 1));
  };
  
  const handleNext = () => {
    setIndex((prevIndex) => getLoopedIndex(prevIndex + 1));
  };
  
  // const handleclick = (luxury) => {
  //   navigate(`/luxurytrains/${luxury.toLowerCase().replace(/\s+/g, '-')}`);
  // };
  
  

  const slide = slides[index];

  return (
    <div
      className="tourism-slider"
      style={{ backgroundImage: `url(${slide.background})` }}
    >
      <div className="foreground-section">
        <img src={slide.foreground} alt="Foreground" className="foreground-image" />
        <div className="tourism-content">
          <h2>{slide.title}</h2>
          <strong><p>{slide.description}</p></strong>
          <div className='small-line'>{slide.line}</div><br></br>
          <p>{slide.tilte1}</p>
          <button className='shape-btn' ><a >{slide.btn}</a></button>
        </div>
      </div>

      <div className="tourism-card-slider">
      <button className="tourism-slider-btn" onClick={handleCardPrev}>❮</button>

      <div className="card-slider-window">
  <div className="card-slider-track">
      {visibleCards.map((card, i) => {
      const isActive = i === 0;
      return (
        <div
          className={`tourism-card ${isActive ? 'active-card' : ''}`}
          key={card.id}
          // onClick={() => handleclick(card.title)}
          style={{ cursor: 'pointer' }}
        >
          <img src={card.image} alt={card.title} />
          <h5>{card.title}</h5>
        </div>
      );
    })}

  </div>
</div>



      <button className="tourism-slider-btn" onClick={handleNext}>❯</button>
    </div>
    </div>
  );
};

export default Slider;
