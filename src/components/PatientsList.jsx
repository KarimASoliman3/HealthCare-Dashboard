import more from "../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import search from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import { PatientsContext } from "../context/PatientContext";
import { useContext } from "react";

export default function PatientsList() {
  const { patients, loading, error } = useContext(PatientsContext);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-[#072635] text-[24px] font-extrabold px-5 mb-6  flex items-center justify-between">
        Patients{" "}
        <span className="cursor-pointer pr-1.5">
          <img src={search} alt="search" />
        </span>
      </h3>

      <div className="overflow-y-auto flex-1">
        {patients &&
          patients.map((data, index) => (
            <div
              className={`flex items-center justify-between px-3 py-4 ${
                index === 3 ? "bg-[#D8FCF7]" : ""
              }`}
              key={index}
            >
              <div className="flex items-center gap-2">
                <img
                  src={data.profile_picture}
                  alt={data.alt}
                  className="size-11"
                />
                <div className="text-[14px] border-r-2 pr-3 border-[#f3f2f2]">
                  <p className="text-[#072635] font-bold">{data.name}</p>
                  <p className="text-[#707070] space-x-1">
                    <span>{data.gender}</span>
                    <span>{data.age}</span>
                  </p>
                </div>
              </div>
              <div className="cursor-pointer mr-3">
                <img src={more} alt="more" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
