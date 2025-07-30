import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/createpackage.css';
import axios from 'axios';

const CreatePackage = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(_id);

  const [formData, setFormData] = useState({
    packagename: '',
    destination: '',
    location: '',
    description: '',
    duration: '',
    pricePerPerson: '',
    category: '',
    isFeatured: false,
    status: 'active',
  });

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      axios
        .get(`https://tour-and-travel-api.onrender.com/package/select/${_id}`)
        .then((res) => {
          const pkg = res.data;
          setFormData({
            packagename: pkg.packagename || '',
            destination: pkg.destination || '',
            location: pkg.location || '',
            description: pkg.description || '',
            duration: pkg.duration || '',
            pricePerPerson: pkg.pricePerPerson || '',
            category: pkg.category || '',
            isFeatured: pkg.isFeatured || false,
            status: pkg.status || 'active',
          });
          setExistingImages(pkg.images || []);
        })
        .catch((err) => console.error('Failed to load package data:', err))
        .finally(() => setLoading(false));
    }
  }, [_id, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      Array.from(images).forEach((file) => {
        data.append('images', file);
      });

      if (isEditMode) {
        await axios.put(
          `https://tour-and-travel-api.onrender.com/package/update/${_id}`,
          data,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        alert('Package updated successfully!');
      } else {
        await axios.post(
          'https://tour-and-travel-api.onrender.com/package/create',
          data,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        alert('Package created successfully!');
      }

      navigate('/northindia');
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-body">
      <div className="package-form">
        <form onSubmit={handleSubmit}>
          <h2>{isEditMode ? 'Update Package' : 'Create New Package'}</h2>

          <input name="packagename" placeholder="Name" value={formData.packagename} onChange={handleChange} required />
          <input name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} required />
          
          <select name="location" value={formData.location} onChange={handleChange} required>
            <option value="">Select Location</option>
            <option value="North India">North India</option>
            <option value="South India">South India</option>
            <option value="East India">East India</option>
            <option value="West India">West India</option>
            <option value="West India">Central India</option>
          </select>

          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

          <input name="duration" type="text" placeholder="Duration" value={formData.duration} onChange={handleChange} required />
          <input name="pricePerPerson" type="text" placeholder="Price" value={formData.pricePerPerson} onChange={handleChange} required />
          
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Adventure">Adventure</option>
            <option value="Romantic Getaways">Honeymoon</option>
            <option value="Family Vacations">Trakking </option>
            <option value="Beach Trips">Beach </option>
            <option value="Beach Trips">Heritage </option>
            <option value="Beach Trips">Pilgrimage </option>
            <option value="Beach Trips">Wildlife </option>
          </select>

          <label>
            Featured:
            <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} />
          </label>

          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <label>Upload Images:</label>
          <input type="file" multiple accept="image/*" onChange={handleImageChange} />

          {isEditMode && existingImages.length > 0 && (
            <div className="existing-images">
              <p>Existing Images:</p>
              {existingImages.map((img, index) => (
                <img
                  key={index}
                  src={img.startsWith('http') ? img : `https://tour-and-travel-api.onrender.com/uploads/${img}`}
                  alt={`img-${index}`}
                  style={{ width: '100px', marginRight: '10px', marginBottom: '10px' }}
                />
              ))}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? 'Please wait...' : isEditMode ? 'Update Package' : 'Create Package'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePackage;
