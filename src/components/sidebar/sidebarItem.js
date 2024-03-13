
import React from 'react';

const sidebarItem = ({ icon, text }) => {
  return (
    <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors duration-200 ease-in-out">
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default sidebarItem;
