import { useState, useEffect, useRef } from 'react';

export default function ResultsNumber() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const results = [
    { number: 1000, suffix: '+', label: 'Bitiruvchilar soni' },
    { number: 100, suffix: '%', label: 'Mamnun o\'quvchilar' },
    { number: 100, suffix: '+', label: 'Yakunlangan loyihalar' },
    { number: 50, suffix: '+', label: 'Ish beruvchi hamkorlar' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.10 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-6">
      <div className="text-start mb-6">
        <h2 className="text-[48px] font-bold font-sans text-[#FFC107]
          max-[1150px]:text-[30px]
          max-[800px]:text-[20px]
          max-[525px]:text-[15px]
          max-[200px]:text-[10px]">
          Natijalarimiz raqamlarda
        </h2>
      </div>
      
      <div className="flex items-center justify-between bg-[#1a1a1a] p-[30px] rounded-[10px]
        max-[525px]:flex-wrap max-[525px]:justify-center max-[525px]:gap-[10px]">
        {results.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-center">
              <AnimatedNumber value={item.number} isVisible={isVisible} />
              {item.suffix && (
                <span className="text-[48px] font-bold font-sans text-[#FFC107]
                  max-[1150px]:text-[30px]
                  max-[800px]:text-[20px]
                  max-[200px]:text-[15px]">
                  {item.suffix}
                </span>
              )}
            </div>
            <h3 className="text-[24px] font-bold font-sans text-[#999]
              max-[1150px]:text-[16px]
              max-[800px]:text-[10px]
              max-[200px]:text-[7px]">
              {item.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ value, isVisible }) {
  const [displayValue, setDisplayValue] = useState(0);
  const duration = 1500;
  const startTimeRef = useRef(null);
  
  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      return;
    }
    
    let animationFrameId;
    
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * value);
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, isVisible]);
  
  return (
    <span className="text-[48px] font-bold font-sans text-[#FFC107]
      max-[1150px]:text-[30px]
      max-[800px]:text-[20px]
      max-[200px]:text-[15px]">
      {displayValue.toLocaleString()}
    </span>
  );
}
