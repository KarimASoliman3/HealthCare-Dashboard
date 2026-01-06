import React, { createContext, useEffect, useState } from "react";
import { getAllPatients } from "../services/api";

export const PatientsContext = createContext([]);
export default function PatientProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getAllPatients();
        setPatients(data);
      } catch (err) {
        setError("Failed to load patients");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);
  return (
    <>
      <PatientsContext.Provider value={{ patients, loading, error }}>
        {children}
      </PatientsContext.Provider>
    </>
  );
}
