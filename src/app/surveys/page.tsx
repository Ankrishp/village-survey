import React from "react";

type Survey = {
  id: string;
  title: string;
  village: string;
  date: string; // ISO date string
  status: "draft" | "in-progress" | "completed";
};

const SAMPLE_SURVEYS: Survey[] = [
  { id: "s1", title: "Household Amenities - Kumbakonam", village: "Kumbakonam", date: "2025-09-12", status: "completed" },
  { id: "s2", title: "Agriculture Practices - Periyakulam", village: "Periyakulam", date: "2025-10-01", status: "in-progress" },
  { id: "s3", title: "Sanitation Audit - Nagercoil", village: "Nagercoil", date: "2025-08-20", status: "draft" },
];

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString();
  } catch {
    return iso;
  }
}

export default function SurveysPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">Surveys</h1>
        <a href="#" className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">Create Survey</a>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Title</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Village</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {SAMPLE_SURVEYS.map((s) => (
              <tr key={s.id}>
                <td className="px-4 py-3 text-sm text-gray-800">{s.title}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{s.village}</td>
                <td className="px-4 py-3 text-sm text-gray-800">{formatDate(s.date)}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    s.status === 'completed' ? 'bg-green-100 text-green-800' : s.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
