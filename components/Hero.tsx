
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
                  Anbalagan
                </span>
              </h1>
            </div>

            {/* Title */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 leading-tight">
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">MERN Stack Developer</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">UI/UX Designer</span>
                <br />
                <span className="font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Brand Identity</span>
              </h2>
            </div>

            {/* Description */}
            <div className="animate-slide-in-left max-w-lg mx-auto lg:mx-0" style={{ animationDelay: '0.8s' }}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Pursuing B.Tech in Computer Science and Business Systems (2025–2029).
                Founder of <span className="font-semibold text-purple-600">Voltmedia</span>, volting premium Websites and web solutions.
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
              <a href="https://linkedin.com/in/a-gokulan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/rkivln" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:gokulan.rkivln@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
