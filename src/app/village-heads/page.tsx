import React from "react";

type VillageHead = {
  id: number;
  name: string;
  village: string;
  panchayat: string;
  district: string;
};

const SAMPLE_DATA: VillageHead[] = [
  { id: 1, name: "Selvam", village: "Kumbakonam", panchayat: "Kumbakonam North", district: "Thanjavur" },
  { id: 2, name: "Meena", village: "Periyakulam", panchayat: "Periyakulam Panchayat", district: "Theni" },
  { id: 3, name: "Raju", village: "Nagercoil", panchayat: "Ramanathapuram", district: "Kanniyakumari" },
];

export default function VillageHeadsPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-4">Village Heads — Tamil Nadu</h1>

      <p className="mb-6 text-gray-700">Below is a sample list of village heads (Panchayat leaders) in Tamil Nadu. Replace with real data as needed.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Village</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Panchayat</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">District</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {SAMPLE_DATA.map((h) => (
              <tr key={h.id}>
                <td className="px-4 py-3 text-sm text-gray-800">{h.name}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{h.village}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{h.panchayat}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{h.district}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
