
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
      
    </div>
  );
};

export default UserImageUpload;
