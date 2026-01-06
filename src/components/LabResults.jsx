import { useContext } from "react";
import download from "../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
import { PatientsContext } from "../context/PatientContext";

export default function LabResults() {
  const { patients, loading, error } = useContext(PatientsContext);
  if (loading) return <p>Loading patients...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div className="p-5 space-y-4">
        <h3 className="text-[#072635] text-[24px] font-extrabold">
          Lab Results
        </h3>
        <div className="flex flex-col overflow-hidden scroll-auto">
          <div>
            {(patients[3]?.lab_results || []).map((result, index) => (
              <div
                key={index}
                className={`flex justify-between items-center px-4 py-2.75 ${
                  index === 1 ? "bg-[#F6F7F8]" : ""
                }`}
              >
                <span>{result}</span>
                <img src={download} alt="download" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
