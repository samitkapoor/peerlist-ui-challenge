import { Lock } from 'lucide-react';

const LockedItem = () => {
  return (
    <div className="h-full w-full text-black flex items-center justify-center flex-col z-10">
      <Lock />
      <p>Locked</p>
    </div>
  );
};

export default LockedItem;
