import { useEffect, useState } from "react";
import { PATIENTS } from "./data/mockPatients.js";
import "./App.css";

function App() {
  const allPatients = PATIENTS;
  console.log("All patients: ", allPatients);
  const [patients, setPatients] = useState(PATIENTS);
  const [note , setNote] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  // --- DERIVED STATE ---
  // Find the full patient object based on the selectedPatientId.
  let [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    if (selectedPatientId) {
      console.log("setting selected patient")
      setSelectedPatient(
        allPatients.filter((patient) => patient.id === selectedPatientId)
      );
    }
  }, [selectedPatientId , allPatients , note , setNote]);
  console.log("Selected patient ", selectedPatient);

  const handleSelectPatient = (patientId) => {
    if (patientId) setSelectedPatientId(patientId);
  };

  console.log("patients useState: ", patients);

  const handleAddNote = (noteText) => {
    if (!noteText || !selectedPatient) {
      console.log("not patiend and notetext from handleAddNote");
      return;
    }
    const today = new Date();
    const newVisit = {
      date: today.toLocaleDateString(),
      notes: noteText,
      diagnosis: "test",
    };

    for (let i = 0; i < allPatients.length; i++) {
      if (PATIENTS[i].id == selectedPatientId) {
        PATIENTS[i].visits.push(newVisit);
      }
    }
    console.log("all patients: ", allPatients);

    console.log("selected patients ", selectedPatient);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <header className="sidebar-header">
          <h1>Patients</h1>
        </header>
        <ul className="patient-list">
          {patients.map((patient) => {
            return (
              <li
                onClick={() => handleSelectPatient(patient.id)}
                className={`patient-item ${
                  patient.id == selectedPatientId ? "active" : ""
                }`}
                key={patient.id}
              >
                <span>{patient.name}</span>
                <br />
                <span>{patient.dob}</span>
                <br />
              </li>
            );
          })}
        </ul>
      </aside>

      <main className="main-content">
        {selectedPatient ? (
          <PatientDetails note={note} setNote={setNote} patient={selectedPatient} onAddNote={handleAddNote} />
        ) : (
          <div className="placeholder">
            <p>Select a patient to view their details</p>
          </div>
        )}
      </main>
    </div>
  );
}

const PatientDetails = ({note , setNote, patient, onAddNote }) => {
  console.log(
    "patient visit details after adding note radhe radhe: ",
    patient[0].visits
  );

  return (
    <div className="patient-details">
      <h2>{patient.name}</h2>
      <p>Date of Birth: {patient.dob}</p>

      <section className="visits-section">
        <h3>Visit History</h3>
        {patient[0].visits.map((visit, index) => (
          <div key={index} className="visit-card">
            <p className="visit-date">Date: {visit.date}</p>
            <div className="visit-info">
              <p>
                <strong>Notes:</strong> {visit.notes}
              </p>
              <p>
                <strong>Diagnosis:</strong> {visit.diagnosis}
              </p>
            </div>
          </div>
        ))}
      </section>

      <AddNoteForm note={note} setNote={setNote} onAddNote={onAddNote} />
    </div>
  );
};

const AddNoteForm = ({note , setNote, onAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    setNote(noteText)
    console.log("handling submit with note : ", noteText);
    onAddNote(noteText);
    setNoteText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <h4>Add New Visit Note</h4>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Enter doctor's notes..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default App;
