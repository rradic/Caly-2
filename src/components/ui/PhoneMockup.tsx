import React from 'react';
import { User, Calendar, Bell, Settings, Menu, Search } from 'lucide-react';

interface PhoneMockupProps {
  screen: 'calendar' | 'profile' | 'menu';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ screen }) => {
  return (
    <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] p-3 shadow-2xl ring-8 ring-gray-900/50">
      {/* Frame Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20"></div>
      
      {/* Screen Content */}
      <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative flex flex-col">
        {/* Status Bar Area */}
        <div className="h-12 w-full bg-white border-b border-gray-100 flex items-end justify-between px-6 pb-2">
            <span className="text-[10px] font-bold">9:41</span>
            <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
        </div>

        {/* Render Content Based on Screen Type */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
            {screen === 'calendar' && <CalendarScreen />}
            {screen === 'profile' && <ProfileScreen />}
            {screen === 'menu' && <MenuScreen />}
        </div>

        {/* Bottom Nav Bar */}
        <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4 pb-2">
            <Calendar size={20} className={screen === 'calendar' ? 'text-black' : 'text-gray-300'} />
            <Search size={20} className="text-gray-300" />
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center -mt-6 border-4 border-white shadow-sm">
                <span className="text-xl font-bold">+</span>
            </div>
            <Bell size={20} className="text-gray-300" />
            <Settings size={20} className="text-gray-300" />
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

const CalendarScreen = () => (
    <div className="p-4">
        <h3 className="text-lg font-bold mb-4">When do you want to book?</h3>
        
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
                <div key={d} className={`flex flex-col items-center justify-center w-12 h-16 rounded-xl shrink-0 ${i === 2 ? 'bg-yellow-400 shadow-lg scale-110' : 'bg-gray-50'}`}>
                    <span className="text-[10px] text-gray-500">{d}</span>
                    <span className="text-sm font-bold">{21 + i}</span>
                </div>
            ))}
        </div>

        <div className="space-y-3">
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div className="text-xs text-gray-500 mb-1">5:00 PM</div>
                <div className="font-semibold text-sm">Available</div>
            </div>
            <div className="bg-black text-white p-3 rounded-xl shadow-lg transform scale-105">
                <div className="text-xs text-gray-300 mb-1">5:15 PM</div>
                <div className="font-semibold text-sm">Selected</div>
            </div>
             <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div className="text-xs text-gray-500 mb-1">6:00 PM</div>
                <div className="font-semibold text-sm">Available</div>
            </div>
        </div>
    </div>
);

const ProfileScreen = () => (
    <div className="flex flex-col items-center pt-8 px-4">
        <div className="w-20 h-20 rounded-full bg-yellow-100 border-2 border-yellow-400 p-1 mb-3">
            <img src="https://picsum.photos/seed/profile1/100" className="rounded-full w-full h-full object-cover" />
        </div>
        <h2 className="font-bold text-lg">Client Management</h2>
        <p className="text-xs text-center text-gray-500 mb-6">Easily manage your appointments, track history, and ensure personalized service every time.</p>
        
        <div className="w-full space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">JD</div>
                <div>
                    <div className="text-xs font-bold">Jane Doe</div>
                    <div className="text-[10px] text-gray-500">Next: Tomorrow 2pm</div>
                </div>
            </div>
             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">AM</div>
                <div>
                    <div className="text-xs font-bold">Ann Marie</div>
                    <div className="text-[10px] text-gray-500">Next: Friday 10am</div>
                </div>
            </div>
        </div>
    </div>
);

const MenuScreen = () => (
    <div className="flex flex-col items-center pt-8 px-4">
         <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 text-purple-600">
            <Menu size={32} />
         </div>
         <h2 className="font-bold text-lg">Service Menu</h2>
         <p className="text-xs text-center text-gray-500 mb-6">Customize your service offerings, set prices, and keep your menu up-to-date.</p>

         <div className="w-full grid grid-cols-2 gap-2">
            <div className="bg-gray-50 p-2 rounded-lg text-center">
                <div className="text-xs font-bold">Haircut</div>
                <div className="text-[10px] text-gray-500">$45</div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg text-center">
                <div className="text-xs font-bold">Color</div>
                <div className="text-[10px] text-gray-500">$120</div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg text-center">
                <div className="text-xs font-bold">Styling</div>
                <div className="text-[10px] text-gray-500">$30</div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg text-center">
                <div className="text-xs font-bold">Treatment</div>
                <div className="text-[10px] text-gray-500">$25</div>
            </div>
         </div>
    </div>
);