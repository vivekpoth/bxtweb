import React, { useState } from 'react';
import '../styles/CaseStudyForm.css'

function CaseStudyForm({ selectedCaseStudy, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the user's information and selected case study to the server
    onSubmit({ name, company, email, caseStudy: selectedCaseStudy });
    // Close the form
    onClose();
  };

  return (
    <div className="caseStudyForm">
      <h3>{selectedCaseStudy.title}</h3>
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
          <label>Company Name*:</label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CaseStudyForm;