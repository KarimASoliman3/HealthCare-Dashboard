// import Chart from "./Chart";
import expand from "../assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg";
import ArrowUp from "../assets/ArrowUp.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import respiratory from "../assets/respiratory rate.svg";
import temperature from "../assets/temperature.svg";
import HeartBPM from "../assets/HeartBPM.svg";

import { PatientsContext } from "../context/PatientContext";
import { useContext } from "react";
import Chart from "./Chart";

export default function DiagnosisHistory() {
  const { patients, loading, error } = useContext(PatientsContext);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className=" bg-white rounded-2xl p-5 space-y-10">
      <h3 className="text-[#072635] text-[24px] font-extrabold mb-8">
        Diagnosis History{" "}
      </h3>

      <div className="space-y-5">
        <div className="w-full flex gap-9 bg-[#F4F0FE] rounded-xl p-4">

          <div className="flex flex-col w-2/3 font-manrope space-y-5">
            <div className="flex justify-between items-center text-[#072635]">
              <h3 className="text-[18px] font-bold">Blood Pressure</h3>
              <button
              type="button"
              className="font-normal text-[14px] flex items-center gap-4"
              >
                Last 6 months
                <img src={expand} alt='showAll'/>
              </button>
            </div>
            <div className="">
              <Chart />
            </div>
          </div>

          <div className="w-1/3 flex flex-col gap-1">
            <div className="space-y-2 border-b-2 border-gray-300 py-4">
              <p className="flex items-center gap-2">
                <span
                  className="inline-block w-3 h-3 rounded-full bg-pink-400"
                  aria-hidden="true"
                />
                Systolic
              </p>
              <h2 className="text-[18px] font-bold text-[#072635]">
                {patients[3].diagnosis_history[0].blood_pressure.systolic
                  .value ?? "—"}
              </h2>
              <p className="flex text-nowrap items-center font-normal gap-2 text-[14px]">
                {patients[3].diagnosis_history[0].blood_pressure.systolic
                  .levels === "Higher than Average" ? (
                  <img src={ArrowUp} alt="ArrowUp" />
                ) : (
                  <img src={ArrowDown} alt="ArrowDown" />
                )}

                {patients[3].diagnosis_history[0].blood_pressure.systolic
                  .levels ?? "—"}
              </p>
            </div>
            <div className="space-y-2 py-4">
              <p className="flex items-center gap-2">
                <span
                  className="inline-block w-3 h-3 rounded-full bg-purple-500"
                  aria-hidden="true"
                />
                Diastolic
              </p>
              <h2 className="text-[18px] font-bold text-[#072635]">
                {patients[3].diagnosis_history[0].blood_pressure.diastolic
                  .value ?? "—"}
              </h2>
              <p className="flex text-nowrap items-center font-normal gap-2 text-[14px]">
                {patients[3].diagnosis_history[0].blood_pressure.diastolic
                  .levels === "Higher than Average" ? (
                  <img src={ArrowUp} alt="ArrowUp" />
                ) : (
                  <img src={ArrowDown} alt="ArrowDown" />
                )}

                {patients[3].diagnosis_history[0].blood_pressure.systolic
                  .levels ?? "—"}
              </p>
            </div>
          </div>
        </div>



        <div className="w-full flex gap-5.25">
          <div className="w-1/3 bg-[#E0F3FA] rounded-xl p-4 space-y-4 text-[#072635] font-manrope">
            <img src={respiratory} alt="respiratory" className="" />
            <div className="flex flex-col">
              <p className="text-[16px]">Respiratory Rate</p>
              <p className="font-extrabold text-[30px]">
                {patients[3].diagnosis_history[0].respiratory_rate.value} bpm
              </p>
              <p className="mt-4.25 text-[14px]">
                {patients[3].diagnosis_history[0].respiratory_rate.levels}
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-[#E0F3FA] rounded-xl p-4 space-y-4 text-[#072635] font-manrope">
            <img src={temperature} alt="temperature" className="" />
            <div className="flex flex-col">
              <p className="text-[16px]">Temperature</p>
              <p className="font-extrabold text-[30px]">
                {patients[3].diagnosis_history[0].temperature.value}°F
              </p>
              <p className="mt-4.25 text-[14px]">
                {patients[3].diagnosis_history[0].temperature.levels}
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-[#E0F3FA] rounded-xl p-4 space-y-4 text-[#072635] font-manrope">
            <img src={HeartBPM} alt="respiraHeartBPMtory" className="" />
            <div className="flex flex-col">
              <p className="text-[16px]">Heart Rate</p>
              <p className="font-extrabold text-[30px]">
                {patients[3].diagnosis_history[0].heart_rate.value} bpm
              </p>
              <p className="flex gap-2 items-center mt-4.25 text-[14px]">
                <span>
                  <img src={ArrowDown} alt="ArrowDown" />
                </span>
                {patients[3].diagnosis_history[0].heart_rate.levels}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
