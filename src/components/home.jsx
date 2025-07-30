import React, { useEffect, useRef, useState } from 'react';
import '../css/home.css';

const Home = () => {
    // Slideshow images
    const slides = [
        { image: 'images/adi-kailash.webp', text: 'Adi Kailash – Sacred Himalayan Journey' },
        { image: 'images/kashmir-banner.webp', text: 'Kashmir – Heaven on Earth' },
        { image: 'images/kedarnath-mandir.webp', text: 'Kedarnath – Spiritual Pilgrimage' },
        { image: 'images/kerala-banner.webp', text: 'Kerala – God’s Own Country' },
        { image: 'images/leh-ladakh-tour.webp', text: 'Leh Ladakh – High Altitude Adventures' },
        { image: 'images/maharaja1-express.webp', text: 'Maharaja Express – Royal Luxury' },
        { image: 'images/sikkim-banner.webp', text: 'Sikkim – Eastern Himalayan Beauty' },
        { image: 'images/tajmahal.webp', text: 'Taj Mahal – Symbol of Love' },
        { image: 'images/tiger-banner.webp', text: 'Tiger Safari – Into the Wild' }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-change slides every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    // Card slider
    const sliderRef = useRef(null);
    const [index, setIndex] = useState(0);
    const cardWidth = 250; // width of one card + margin

    const cards = [
        { image: 'images/wildlife.webp', title: 'Wildlife', text: '70+ Package' },
        { image: 'images/hill.webp', title: 'Hills Station', text: '65+ Package' },
        { image: 'images/heritage.webp', title: 'Heritages', text: '25+ Package' },
        { image: 'images/pilgrim.webp', title: 'Pilgrims', text: '75+ Package' },
        { image: 'images/trekking.webp', title: 'Trekking', text: '70+ Package' },
        { image: 'images/beach01.webp', title: 'Beach', text: '20+ Package' }
    ];

    const nextSlide = () => {
        const maxIndex = cards.length - 3; // 3 cards visible
        const newIndex = index + 1 > maxIndex ? 0 : index + 1;
        setIndex(newIndex);
        sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
    };

    const prevSlide = () => {
        const maxIndex = cards.length - 3;
        const newIndex = index - 1 < 0 ? maxIndex : index - 1;
        setIndex(newIndex);
        sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
    };

    return (
        <div className="maindiv">
            {/* Slideshow Section */}
            <div className="image-container">
                <div className="inner-slide-container">
                    <div className="image-wrapper">
                        <img
                            src={slides[currentSlide].image}
                            width="500"
                            height="600"
                            alt="slideshow"
                        />
                        <div className="slider-text">{slides[currentSlide].text}</div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <p className="heading">
                    Let us plan you a perfect <span><b>India Holiday</b></span>
                </p>
                <p>Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in India.</p>
                
                {/* Horizontal Cards Slider */}
                <div className="slider-container">
                    <div className="slider-track" ref={sliderRef}>
                        {cards.map((card, i) => (
                            <div className="card" key={i}>
                                <div className="card-title">{card.title}</div>
                                <div className="card-text">{card.text}</div>
                                <img src={card.image} alt={card.title} />
                            </div>
                        ))}
                    </div>
                    <div className="controls">
                        <button onClick={prevSlide}><b>⟵</b></button>
                        <button onClick={nextSlide}><b>⟶</b></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
