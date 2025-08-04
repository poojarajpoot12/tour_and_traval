import React, { useState, useEffect } from 'react';
import axios from 'axios';
 // Use a separate CSS file for central styles

const categories = [
  { name: 'Pilgrim', image: '/images/pilgrimage/south-temple.webp' },
  { name: 'Adventure', image: '/images/south-india/andhra-package.webp' },
  { name: 'Trekking', image: '/images/trekking/green-lake-trek.webp' },
  { name: 'Wildlife', image: '/images/corbet-safari.webp' },
  { name: 'Honeymoon', image: '/images/south-india/andaman-package.webp' },
  { name: 'Beach', image: '/images/hills/darzeeling-hills.webp' },// No beaches? Add substitute image if needed
];

const CentralIndia = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`https://tour-and-travel-api.onrender.com/api/packages/category/${selectedCategory}`)
        .then((res) => setPackages(res.data))
        .catch((err) => console.error(err));
    }
  }, [selectedCategory]);

  return (
    <div className="central-india-page">
      {/* Top Section */}
      <div className="top-section">
        <h1 className="main-heading">Central India</h1>
        <p className="description">
          Explore the heart of India – Madhya Pradesh & Chhattisgarh. Rich heritage, wildlife, temples, and tribal beauty await.
        </p>
      </div>

      {/* Category Cards */}
      <div className="categories">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.name} className="category-image" />
            <div className="category-content">
              <h2>{cat.name} Packages</h2>
              <button className="see-more-button" onClick={() => setSelectedCategory(cat.name)}>
                See More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Packages */}
      {selectedCategory && (
        <div className="packages-section">
          <h2 className="package-title">{selectedCategory} Packages</h2>
          <div className="packages">
            {packages.map((pkg) => (
              <div key={pkg._id} className="package-card">
                <img src={pkg.imageUrl} alt={pkg.name} className="package-image" />
                <h3>{pkg.name}</h3>
                <p className="package-desc">{pkg.description}</p>
                <p className="package-price">₹{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CentralIndia;
