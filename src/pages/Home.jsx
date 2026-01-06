import React from "react";
import Navbar from "../components/Navbar";
import PatientsList from "./../components/PatientsList";
import DiagnosisHistory from "../components/DiagnosisHistory";
import DiagnosticList from "../components/DiagnosticList";
import PatientProfile from "../components/PatientProfile";
import LabResults from "../components/LabResults";

export default function Home() {
  return (
    <>
      <div className="bg-[#F6F7F8]  px-5 py-4.5 font-manrope">
        <Navbar />

        <main className="flex flex-row justify-between h-[1040px] overflow-hidden ">
          <div className="w-[23.5%] bg-white rounded-2xl py-5 mt-8 h-full flex flex-col">
            <PatientsList />
          </div>

          <div className="w-[50%] flex flex-col gap-5 mt-8">
            <div className="">
              <DiagnosisHistory />
            </div>
            <div className="">
              <DiagnosticList />
            </div>
          </div>

          <div className="w-[23.5%] flex flex-col gap-8 mt-4.5">
            <div className=" bg-white rounded-2xl">
              <PatientProfile />
            </div>
            <div className=" bg-white rounded-2xl">
              <LabResults />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
