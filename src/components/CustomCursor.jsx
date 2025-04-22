import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('customCursor');

    const onMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div className="custom-cursor" id="customCursor" />;
};

export default CustomCursor; 