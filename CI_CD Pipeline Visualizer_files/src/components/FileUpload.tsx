import  { useState } from 'react';
import { Upload, File, Check } from 'lucide-react';
import { api } from '../services/api';

export const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    
    setUploading(true);
    try {
      const fileList = new DataTransfer();
      files.forEach(file => fileList.items.add(file));
      await api.uploadFiles(fileList.files);
      setUploaded(true);
      setTimeout(() => setUploaded(false), 3000);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Upload Pipeline Data</h3>
      
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-600 mb-2">Drag and drop files here, or</p>
        <input
          type="file"
          multiple
          onChange={handleChange}
          className="hidden"
          id="fileInput"
          accept=".json,.yml,.yaml,.log"
        />
        <label
          htmlFor="fileInput"
          className="text-blue-600 hover:text-blue-500 cursor-pointer font-medium"
        >
          browse files
        </label>
        <p className="text-xs text-gray-500 mt-2">
          Supports JSON, YAML, and log files
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Selected Files:</h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center text-sm">
                <File className="w-4 h-4 mr-2" />
                <span>{file.name}</span>
                <span className="ml-auto text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </div>
            ))}
          </div>
          
          <button
            onClick={handleUpload}
            disabled={uploading || uploaded}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 flex items-center"
          >
            {uploaded ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Uploaded
              </>
            ) : uploading ? (
              'Uploading...'
            ) : (
              'Upload Files'
            )}
          </button>
        </div>
      )}
    </div>
  );
};
 