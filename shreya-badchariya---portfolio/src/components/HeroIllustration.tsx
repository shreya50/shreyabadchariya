import React, { useState, useEffect, useRef } from 'react';
import { Upload, Maximize2, Minimize2 } from 'lucide-react';

export default function HeroIllustration() {
  const [imageSrc, setImageSrc] = useState<string | null>(() => {
    return localStorage.getItem('portfolio_header_img') || null;
  });
  const [imageError, setImageError] = useState(false);
  // Default to 'tight' ("locked in" framing that crops outer white margins)
  const [framingMode, setFramingMode] = useState<'tight' | 'full'>('tight');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Check if /header.png exists in public/
  useEffect(() => {
    if (!imageSrc) {
      const img = new Image();
      img.src = '/header.png';
      img.onload = () => {
        setImageSrc('/header.png');
        setImageError(false);
      };
      img.onerror = () => {
        setImageError(true);
      };
    }
  }, [imageSrc]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImageSrc(result);
          localStorage.setItem('portfolio_header_img', result);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImageSrc(result);
          localStorage.setItem('portfolio_header_img', result);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-full mx-auto select-none pt-0 pb-0">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload exact header image"
      />

      {imageSrc && !imageError ? (
        <div className="relative group w-full">
          {/* Main Display Container */}
          <div
            className={`relative w-full overflow-hidden flex items-center justify-center transition-all duration-300 ${
              framingMode === 'tight'
                ? 'aspect-[1/0.82] sm:aspect-[1/0.80]'
                : 'aspect-square'
            }`}
          >
            <img
              id="hero-header-image"
              src={imageSrc}
              alt="Shreya Badchariya '26"
              className={`w-full h-full transition-all duration-300 ${
                framingMode === 'tight'
                  ? 'object-cover object-center scale-[1.03]'
                  : 'object-contain object-center'
              }`}
              referrerPolicy="no-referrer"
              onError={() => {
                if (imageSrc === '/header.png') {
                  setImageError(true);
                  setImageSrc(null);
                }
              }}
            />
          </div>

          {/* Quick controls on hover: Framing toggle and replace */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-lg text-white text-xs z-10">
            <button
              type="button"
              onClick={() =>
                setFramingMode((prev) => (prev === 'tight' ? 'full' : 'tight'))
              }
              className="px-2 py-1 hover:bg-white/20 rounded flex items-center gap-1 cursor-pointer transition-colors"
              title={
                framingMode === 'tight'
                  ? 'Switch to full uncropped image'
                  : 'Lock in on artwork (trim blank margins)'
              }
            >
              {framingMode === 'tight' ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </>
              ) : (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>Lock In</span>
                </>
              )}
            </button>
            <div className="w-[1px] h-3.5 bg-white/30" />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-2 py-1 hover:bg-white/20 rounded cursor-pointer transition-colors"
              title="Replace header image"
            >
              Change
            </button>
          </div>
        </div>
      ) : (
        /* Dropzone if header.png is not yet loaded */
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="w-full border-2 border-dashed border-[#81B7D2]/60 hover:border-[#81B7D2] bg-stone-50/50 hover:bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all shadow-xs group mb-2"
        >
          <div className="w-11 h-11 rounded-full bg-[#81B7D2]/15 flex items-center justify-center text-[#4A85A3] group-hover:scale-105 transition-transform mb-2.5">
            <Upload className="w-5 h-5" />
          </div>
          <p className="text-[#121214] font-semibold text-sm sm:text-base mb-1">
            Click or drag & drop your exact header image here
          </p>
          <p className="text-stone-500 text-xs max-w-sm">
            Or place as <code className="text-[#356B86] bg-stone-100 px-1 py-0.5 rounded font-mono font-medium">public/header.png</code> in the AI Studio File Explorer
          </p>
        </div>
      )}
    </div>
  );
}
