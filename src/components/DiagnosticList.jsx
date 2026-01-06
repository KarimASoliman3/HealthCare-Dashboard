import React, { useContext } from "react";
import { PatientsContext } from "../context/PatientContext";

export default function DiagnosticList() {
  const { patients = [], loading, error } = useContext(PatientsContext);
  if (loading) return <p>Loading Diagnostic List ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="bg-white rounded-2xl px-4 py-5 shadow-sm space-y-10">
        <h3 className="text-[#072635] font-manrope text-[24px] font-extrabold">Diagnostic List</h3>
        <div className="p-0 overflow-x-auto rounded-3xl overflow-hidden">
          <table className="w-full flex flex-col gap-2">
            <thead className="">
              <tr className="text-left text-sm font-semibold  flex items-center justify-between bg-[#F6F7F8] rounded-3xl px-5 py-3.75 gap-5">
                <th className="w-1/4 ">Problem / Diagnosis</th>
                <th className="w-7/12">Description</th>
                <th className="w-1/6 ">Status</th>
              </tr>
            </thead>

            <tbody className="">
              {((patients[3] && patients[3].diagnostic_list) || []).length >
              0 ? (
                ((patients[3] && patients[3].diagnostic_list) || []).map(
                  (item, index) => (
                    <tr key={item.id ?? index} className="flex items-center justify-between px-5 py-3.75 text-left text-sm gap-5">
                      <td className="w-1/4 ">
                        {item.name || "—"}
                      </td>
                      <td className=" w-7/12 ">
                        {item.description || "—"}
                      </td>
                      <td className=" w-1/6">
                        {item.status || "—"}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-sm text-muted-foreground"
                  >
                    No diagnostics available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
