// Sidebar.js
import React from 'react';
import SidebarItem from './sidebarItem';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white shadow-md">
      <div className="p-5 border-b border-gray-200">
        <div className="text-2xl font-semibold text-gray-700">ZINIO</div>
      </div>
      <div className="flex flex-col p-5">
        {/* Use actual icons in place of the emoji */}
        <SidebarItem icon="🔍" text="Vacancies" />
        <SidebarItem icon="📁" text="Applications" />
        <SidebarItem icon="📅" text="Schedule" />
        <SidebarItem icon="👤" text="Profile" />
        <SidebarItem icon="💬" text="Messages" />
        <SidebarItem icon="💳" text="Payments" />
        <SidebarItem icon="⚙️" text="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
