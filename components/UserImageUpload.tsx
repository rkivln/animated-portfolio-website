
import React, { useRef } from 'react';

interface UserImageUploadProps {
  onImageSelect: (file: File) => void;
  isProcessing: boolean;
}

const UserImageUpload: React.FC<UserImageUploadProps> = ({ onImageSelect, isProcessing }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
      // Reset file input value to allow re-uploading the same file
      event.target.value = '';
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        disabled={isProcessing}
      />
      <button
        onClick={handleClick}
        disabled={isProcessing}
        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 disabled:bg-gray-500/50 disabled:cursor-not-allowed shadow-lg"
      >
        {isProcessing ? 'Processing...' : 'Change Photo'}
      </button>
    </div>
  );
};

export default UserImageUpload;
