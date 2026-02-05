import { useState, useEffect } from "react";

const groups = ["RISHIKESH", "MANIPUR", "MIZORAM", "PATNA", "JAMMU"];

export default function GroupCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % groups.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-800 text-white py-16 px-4">
      <div className="text-center mb-8">
        <p className="text-sm uppercase">ELNEC INDIA</p>
        <h2 className="text-3xl font-bold">ELNEC GROUPS IN INDIA</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-2"></div>
      </div>

      <div className="flex justify-center gap-4 overflow-hidden">
        <div className="border border-white p-6 w-40 text-center">
          <div className="text-3xl mb-2">🏥</div>
          {groups[currentIndex]}
        </div>
      </div>
    </div>
  );
}
