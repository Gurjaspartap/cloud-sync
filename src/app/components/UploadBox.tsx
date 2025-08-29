"use client";

import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file first!");
    // TODO: Add upload logic (to cloud, backend, S3, etc.)
    alert(`Uploading: ${file.name}`);
  };

  return (
    <section id="upload" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Upload & Share Files</h2>
        <p className="text-gray-600 mb-8">
          Drag and drop your files or choose from your computer.
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 bg-white">
          <input type="file" onChange={handleFileChange} className="mb-4" />
          {file && (
            <p className="text-gray-700 mb-4">Selected: {file.name}</p>
          )}
          <button
            onClick={handleUpload}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Upload
          </button>
        </div>
      </div>
    </section>
  );
}
