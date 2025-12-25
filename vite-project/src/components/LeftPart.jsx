import React from 'react';
import {
    Home, Compass, Layers, Heart, PlayCircle, Clock, Folder, Download, Settings, LogOut
} from 'lucide-react'; 

// Define the menu items (unchanged)
const menuItems = [
    { name: "Home", icon: Home, isActive: true },
    { name: "Explore", icon: Compass },
    { name: "Genres", icon: Layers },
    { name: "Favourites", icon: Heart },
    { type: "divider" }, 
    { name: "Continue Watching", icon: PlayCircle },
    { name: "Recently Added", icon: Clock },
    { name: "My Collections", icon: Folder },
    { name: "Downloads", icon: Download },
    { name: "Settings", icon: Settings },
    { name: "Logout", icon: LogOut },
];

function LeftPart() {
    // Determine the colors based on the image (unchanged)
    const bgColor = 'bg-gray-900'; 
    const hoverColor = 'hover:bg-indigo-900/50'; 
    const activeColor = 'bg-indigo-900'; 
    const iconColor = 'text-indigo-400'; 
    const textColor = 'text-gray-300'; 

    return (
        // Removed 'overflow-x-hidden' and 'no-scrollbar' from the main div 
        // as the scrolling is happening on the <nav>
        <div className={`LeftPart w-[20%] h-[100%] ${bgColor} p-4 flex flex-col rounded-2xl`}> 
            {/* Header/Logo Section (unchanged) */}
            <div className={`flex items-center space-x-2 pb-6 pt-2`}>
                <div className="p-2 bg-indigo-500 rounded-lg">
                    <Home className="w-6 h-6 text-white" />
                </div>
                <h1 className={`text-2xl font-bold ${textColor}`}>
                    Drameeo
                </h1>
                {/* Burger Menu Icon (unchanged) */}
                <div className="absolute top-4 right-4">
                    <div className="space-y-1">
                        <span className={`block w-6 h-0.5 ${textColor} bg-current`}></span>
                        <span className={`block w-6 h-0.5 ${textColor} bg-current`}></span>
                        <span className={`block w-6 h-0.5 ${textColor} bg-current`}></span>
                    </div>
                </div>
            </div>

            {/* Navigation Menu Items */}
            {/* ADD the custom utility class 'hide-scrollbar' here */}
            <nav className="flex flex-col space-y-2 overflow-y-auto hide-scrollbar">
                {menuItems.map((item, index) => {
                    if (item.type === "divider") {
                        return null;
                    }

                    const Icon = item.icon;
                    const isActive = item.isActive;

                    const itemClasses = isActive
                        ? `${activeColor} ${textColor} font-semibold`
                        : `${hoverColor} ${textColor} font-medium`;

                    return (
                        <a
                            key={index}
                            href="#"
                            className={`flex items-center space-x-4 p-3 rounded-lg text-lg transition-colors duration-200 ${itemClasses}`}
                        >
                            <Icon className={`w-6 h-6 ${iconColor}`} />
                            <span>{item.name}</span>
                        </a>
                    );
                })}
            </nav>

            {/* Scrollbar Indicator (The dark purple bar on the right edge) 
                You can REMOVE this div as the actual content is now scrollable 
                but invisible, or keep it if it is part of your fixed design element.
            */}
            <div className={`absolute top-0 right-0 h-full w-2 ${bgColor}`}>
                <div className={`w-full h-1/4 ${iconColor} rounded-full`}></div> 
            </div>
        </div>
    );
}

export default LeftPart;