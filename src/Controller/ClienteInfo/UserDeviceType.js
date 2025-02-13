import React, { useState, useEffect } from 'react';

const UseDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobile = /android|iPad|iPhone|iPod/i.test(userAgent);
      setIsMobile(mobile);
    }, []);
  
    return isMobile;
  };

  
export default UseDeviceType;