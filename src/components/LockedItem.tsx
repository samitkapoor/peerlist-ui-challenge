import { Lock } from 'lucide-react';

const LockedItem = () => {
  return (
    <div className="h-full w-full text-black flex items-center justify-center flex-col z-10 relative">
      <div className="flex flex-col items-center gap-2 p-6 rounded-2xl">
        <div
          className="p-3 rounded-full bg-gradient-to-br from-white to-green-50 border border-green-200/30"
          style={{
            boxShadow: '0 4px 12px rgba(0, 200, 83, 0.1)'
          }}
        >
          <Lock className="w-7 h-7 text-green-600/80" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="font-medium text-black/80">Locked</p>
        </div>
      </div>
    </div>
  );
};

export default LockedItem;
