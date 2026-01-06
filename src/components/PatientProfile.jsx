import { useContext } from "react";
import { PatientsContext } from "../context/PatientContext";
import BirthIcon from "../assets/BirthIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";




export default function PatientProfile() {
  const { patients, loading, error } = useContext(PatientsContext);
  if (loading) return <p>Loading patients...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div className="space-y-8 py-8">
        <div className="flex flex-col justify-center items-center w-full gap-6">
          <img src={patients[3].profile_picture} alt="PatientProfile" className=" mx-auto size-50" />
          <h3 className="text-[#072635] text-[24px] font-extrabold">{patients[3].name}</h3>
        </div>
        <div className="flex flex-col px-5 gap-3">
            <div className="flex items-center gap-4">
                <img src={BirthIcon} alt="BirthIcon" className="rounded-full bg-[#F6F7F8]"/>
                <p className="flex flex-col gap-1 text-[14px]">
                    <span className="text-[#072635] capitalize  ">Date Of Birth</span>
                    <span className="font-manrope font-bold">{patients[3].date_of_birth}</span>
                </p>
            </div>
            <div className="flex items-center gap-5">
                <img src={FemaleIcon} alt="FemaleIcon" className="rounded-full bg-[#F6F7F8]"/>
                <p className="flex flex-col gap-0.5 text-[14px]">
                    <span className="text-[#072635] capitalize  ">Gender</span>
                    <span className="font-manrope font-bold capitalize">{patients[3].gender}</span>
                </p>
            </div>
            <div className="flex items-center gap-5">
                <img src={PhoneIcon} alt="PhoneIcon" className="rounded-full bg-[#F6F7F8]" />
                <p className="flex flex-col gap-0.5 text-[14px]">
                    <span className="text-[#072635] capitalize  ">Contact Info</span>
                    <span className="font-manrope font-bold">{patients[3].phone_number}</span>
                </p>
            </div>
            <div className="flex items-center gap-5">
                <img src={PhoneIcon} alt="PhoneIcon" className="rounded-full bg-[#F6F7F8]"/>
                <p className="flex flex-col gap-0.5 text-[14px]">
                    <span className="text-[#072635] capitalize ">Emergency Contacts</span>
                    <span className="font-manrope font-bold">{patients[3].emergency_contact}</span>
                </p>
            </div>
            <div className="flex items-center gap-5">
                <img src={InsuranceIcon} alt="BirthIcon" className="rounded-full bg-[#F6F7F8]"/>
                <p className="flex flex-col gap-0.5 text-[14px]">
                    <span className="text-[#072635] capitalize  ">Insurance Provider</span>
                    <span className="font-manrope font-bold">{patients[3].insurance_type}</span>
                </p>
            </div>
        </div>
        <div className=" flex justify-center mt-2">
            <button className="max-w-max bg-[#01F0D0] rounded-[41px] py-2.75 px-10 text-[#072635] font-manrope font-bold text-[14px]">Show All Information</button>
        </div>
      </div>
    </>
  );
}
