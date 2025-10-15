import { useState } from 'react';
import { PATIENTS } from './data/mockPatients.js';
import './App.css';

function App() {
  // --- STATE MANAGEMENT ---
  // TODO: 1. Create a state variable `patients` initialized with the PATIENTS data from mockPatients.js.
  // TODO: 2. Create a state variable `selectedPatientId` initialized to null. This will track which patient is selected.


  // --- DERIVED STATE ---
  // Find the full patient object based on the selectedPatientId.
  const selectedPatient = null; // TODO: 3. Replace `null` with logic to find the selected patient from the `patients` array using `selectedPatientId`.


  //--- EVENT HANDLERS ---
  const handleSelectPatient = (patientId) => {
    // TODO: 4. Set the `selectedPatientId` state to the `patientId` passed to this function.
  };

  const handleAddNote = (noteText) => {
    // This is the most complex part.
    // TODO: 6. Logic to add a new note to the selected patient.
    // 1. Check if a patient is selected and the noteText is not empty.
    // 2. Create a new visit object with the current date and the noteText.
    // 3. Find the patient to update in the `patients` array.
    // 4. Create a new `visits` array for that patient, including the new visit.
    // 5. Create a new `patients` array, with the updated patient object.
    // 6. Update the `patients` state with this new array.
    console.log("Adding note:", noteText); // Placeholder
  };


  return (
    <div className="app-container">
      <aside className="sidebar">
        <header className="sidebar-header">
          <h1>Patients</h1>
        </header>
        <ul className="patient-list">
          {/* TODO: 5. Map over the `patients` state array. For each patient, render a list item.
              - The list item should have a `key` of `patient.id`.
              - It should have an `onClick` that calls `handleSelectPatient` with the patient's ID.
              - Add a conditional `className`: 'patient-item ' + (patient.id === selectedPatientId ? 'active' : '')
              - Inside the list item, display the patient's name and date of birth.
          */}
        </ul>
      </aside>

      <main className="main-content">
        {selectedPatient ? (
          <PatientDetails patient={selectedPatient} onAddNote={handleAddNote} />
        ) : (
          <div className="placeholder">
            <p>Select a patient to view their details</p>
          </div>
        )}
      </main>
    </div>
  );
}

// --- CHILD COMPONENTS ---
// Note: For this exercise, child components are in the same file for simplicity.

const PatientDetails = ({ patient, onAddNote }) => {
  return (
    <div className="patient-details">
      <h2>{patient.name}</h2>
      <p>Date of Birth: {patient.dob}</p>

      <section className="visits-section">
        <h3>Visit History</h3>
        {patient.visits.map((visit, index) => (
          <div key={index} className="visit-card">
            <p className="visit-date">Date: {visit.date}</p>
            <div className="visit-info">
              <p><strong>Notes:</strong> {visit.notes}</p>
              <p><strong>Diagnosis:</strong> {visit.diagnosis}</p>
            </div>
          </div>
        ))}
      </section>
      
      <AddNoteForm onAddNote={onAddNote} />
    </div>
  );
};


const AddNoteForm = ({ onAddNote }) => {
  // TODO: 7. Create a state for the textarea's value.
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    onAddNote(noteText);
    setNoteText(''); // Clear textarea after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <h4>Add New Visit Note</h4>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)} // TODO: 8. Wire up this onChange handler.
        placeholder="Enter doctor's notes..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
}


export default App;