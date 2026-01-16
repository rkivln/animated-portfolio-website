
import React, { useState, useEffect } from 'react';
import UserImageUpload from './UserImageUpload';
import { GoogleGenAI } from '@google/genai';

// Helper function to convert a File to a Gemini API Part
const fileToGenerativePart = (file: File): Promise<{mimeType: string, data: string}> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const data = result.split(',')[1];
      resolve({
        mimeType: file.type,
        data
      });
    };
    reader.onerror = (error) => reject(error);
  });
};


const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('portfolioImage');
    if (savedImage) {
      setImageSrc(savedImage);
    } else {
        setImageSrc('/profile-image.png');
    }
  }, []);

  const handleImageUpload = (imageDataUrl: string) => {
    setImageSrc(imageDataUrl);
    localStorage.setItem('portfolioImage', imageDataUrl);
  };

  const removeBackground = async (file: File) => {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      setError("API key not found.");
      console.error("VITE_GEMINI_API_KEY environment variable not set.");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

    try {
      const imagePart = await fileToGenerativePart(file);

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            imagePart,
            { text: 'Remove the background from this image. The subject should be perfectly isolated. The output must be a PNG with a transparent background.' },
          ],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
      
      throw new Error("No image data found in the response.");

    } catch (err) {
      console.error("Error removing background:", err);
      setError("Failed to process image. Please try another one.");
      return null;
    }
  };

  const handleImageSelect = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    const newImageDataUrl = await removeBackground(file);
    if (newImageDataUrl) {
      handleImageUpload(newImageDataUrl);
    }
    setIsProcessing(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-indigo-600 font-medium text-lg md:text-xl tracking-wide">
                Hello, I'm
              </p>
            </div>

            {/* Name */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
                  Gokulan
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  
                </span>
              </h1>
            </div>

            {/* Title */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 leading-tight">
                Creative <span className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Developer</span>
                <br />
                & <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Designer</span>
              </h2>
            </div>

            {/* Description */}
            <div className="animate-slide-in-left max-w-lg mx-auto lg:mx-0" style={{ animationDelay: '0.8s' }}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Passionate about creating beautiful, functional digital experiences that make a difference.
                Specializing in modern web technologies and innovative design solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-slide-in-left flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4" style={{ animationDelay: '1s' }}>
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group relative px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="animate-slide-in-left flex justify-center lg:justify-start gap-6 pt-8" style={{ animationDelay: '1.2s' }}>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.113.5-.454.889-.944 1.003-.19.047-.38.07-.572.07-1.262 0-2.21-.75-2.21-2.112 0-.525.118-1.006.353-1.42.236-.416.564-.747.99-.947.427-.2.896-.3 1.375-.3.45 0 .88.086 1.275.258.395.172.74.42 1.035.74.295.32.525.7.69 1.14.166.44.25.92.25 1.44 0 .66-.16 1.24-.48 1.74-.32.5-.75.89-1.28 1.17-.53.28-1.11.42-1.74.42-.34 0-.67-.04-.99-.12-.32-.08-.61-.2-.87-.35-.26-.15-.49-.33-.7-.54-.21-.21-.39-.45-.54-.72-.15-.27-.27-.57-.36-.9-.09-.33-.14-.68-.14-1.05 0-.8.18-1.51.54-2.13.36-.62.85-1.11 1.47-1.47.62-.36 1.32-.54 2.05-.54.39 0 .76.04 1.11.12.35.08.66.19.93.33.27.14.5.31.69.52.19.21.35.45.46.71.11.26.17.54.17.84 0 .32-.05.62-.15.89-.1.27-.24.51-.42.72-.18.21-.4.38-.65.52-.25.14-.53.25-.82.33-.29.08-.6.12-.92.12-.5 0-.97-.08-1.4-.24-.43-.16-.8-.39-1.1-.68-.3-.29-.53-.64-.69-1.04-.16-.4-.24-.84-.24-1.32 0-.66.16-1.22.48-1.68.32-.46.76-.82 1.32-1.08.56-.26 1.2-.39 1.92-.39.36 0 .71.03 1.05.09.34.06.65.16.93.29.28.13.52.3.72.5.2.2.36.44.48.71.12.27.18.56.18.87z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm4.265 14.438c0 .875-.156 1.656-.467 2.328-.312.672-.765 1.22-1.36 1.64-.594.42-1.343.63-2.25.63-1.297 0-2.328-.375-3.094-1.125-.766-.75-1.14-1.922-1.125-3.516V9.75c-.016-1.594.36-2.766 1.125-3.516.766-.75 1.797-1.125 3.094-1.125.907 0 1.656.21 2.25.63.594.42 1.047.968 1.36 1.64.312.672.467 1.453.467 2.328v4.688zm-1.5-4.688c0-.688-.11-1.203-.328-1.547-.22-.344-.58-.516-1.078-.516-.5 0-.86.172-1.078.516-.22.344-.33.86-.33 1.547v4.688c0 .687.11 1.202.33 1.546.22.344.58.516 1.078.516.5 0 .86-.172 1.078-.516.22-.344.33-.86.33-1.546V9.75z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              {/* Main profile image - Full display without borders */}
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] overflow-hidden shadow-2xl rounded-lg">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Gokulan Profile"
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Subtle overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              {/* Image upload button */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <UserImageUpload onImageSelect={handleImageSelect} isProcessing={isProcessing} />
                {error && <p className="text-red-500 text-xs mt-2 text-center bg-white px-2 py-1 rounded-full shadow-sm">{error}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
