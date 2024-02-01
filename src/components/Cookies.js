import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookies = () => {
  return (
    <div>
      {/* Your component content here */}
      <CookieConsent
          location="bottom"
          buttonText="I understand"
          cookieName="myCookieConsent"
          style={{
            background: 'white',
            color: 'black',
            fontSize: '18px',
          }}
          buttonStyle={{
            background: 'blue',
            color: 'white',
            fontSize: '18px',
            borderRadius: '4px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
          expires={365}
        >
          We use cookies on our website to enhance your experience and ensure security. By continuing to use this site, you consent to the use of cookies.
        </CookieConsent>
    </div>
  );
};

export default Cookies;