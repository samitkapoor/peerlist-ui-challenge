import { useEffect, useState } from 'react';
import DynamicStatus from '../components/DynamicStatus';

const statuses: ('loading' | 'success' | 'error')[] = ['loading', 'success', 'error', 'success'];

const DynamicStatusIndicator = () => {
  const [status, setStatus] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((status + 1) % statuses.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [status]);

  return (
    <div className="h-screen w-screen bg-[#FFFDFF] p-5 relative flex flex-col gap-5 items-center justify-center">
      <DynamicStatus status={statuses[status]} />
    </div>
  );
};

export default DynamicStatusIndicator;
