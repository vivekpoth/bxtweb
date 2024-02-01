import React, { useState, useRef } from 'react';
import '../styles/CaseStudyForm.css';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios'

function CaseStudyForm({ selectedCaseStudy, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [verified, setVerified] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const captchaRef = useRef();

  // Recaptcha function
  function onChange(value) {
    setVerified(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('1.1');

    const formData = {
      name,
      company,
      email,
      caseStudy: selectedCaseStudy.title,
      captchaValue: captchaRef.current.getValue(),
    };

    try {
      // Make a POST request to your backend API
      console.log('Before POST request');
      const response = await axios.post('https://battle-apricot-celery.glitch.me/submit-form', formData);
      console.log('After POST request');
      // Handle the response (e.g., show a success message)
      console.log('2');
      setIsSubmitted(true); // Set the form submission state to true
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.log('3');
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="caseStudyForm">
      <h3>{selectedCaseStudy.title}</h3>
      {isSubmitted ? (
        <div>
          <p>Thank you for submitting! We will contact you soon with the case study.</p>
          <button onClick={onClose}>Close</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Name*</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <ReCAPTCHA
            sitekey="6Lfh2lsoAAAAAIhoEMSnw4KEvNR8nyiCRUJ8j1qw"
            onChange={onChange}
            ref={captchaRef}
          />
          <br></br>
          <button type="submit" disabled={!verified}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}


export default CaseStudyForm;