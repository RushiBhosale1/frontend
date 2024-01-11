/* eslint-disable */

import React from 'react';
import { MessageOutlined } from '@ant-design/icons';

const WhatsAppIcon = () => {
  const openWhatsAppChat = () => {
    // You can customize this function to open your WhatsApp chat
    // Example: window.open('https://wa.me/1234567890');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '25px',
        right: '30px',
        zIndex:"9999",
        backgroundColor: '#25d366',
        color: '#fff',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
      onClick={()=>window.open('https://wa.me/+917042414212')}
    >
      <MessageOutlined style={{ fontSize: '2.5rem' }} />
    </div>
  );
};

export default WhatsAppIcon;
