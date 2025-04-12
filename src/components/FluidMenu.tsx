import { AnimatePresence, motion } from 'framer-motion';
import { Home, Mail, Menu, Settings, User, X } from 'lucide-react';
import { useState } from 'react';

interface Option {
  name: string;
  icon: React.ReactNode;
}

const options: Option[] = [
  {
    name: 'Home',
    icon: <Home />
  },
  {
    name: 'Message',
    icon: <Mail />
  },
  {
    name: 'Profile',
    icon: <User />
  },
  {
    name: 'Settings',
    icon: <Settings />
  }
];

const MenuButton = ({
  option,
  onClick,
  className
}: {
  option: Option;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-[52px] w-[52px] group !p-4 !rounded-full text-black/50 hover:text-black !outline-none !border-none !bg-[#EEECEE] flex items-center justify-center ${className} relative overflow-visible`}
    >
      {option.icon}
    </button>
  );
};

const FluidMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div style={{ filter: 'url(#goo)' }} className="flex flex-col gap-0 relative">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ filter: 'blur(2px)' }}
            animate={{ filter: 'blur(0px)' }}
            className="z-10"
            key="menu"
          >
            <MenuButton
              onClick={() => setIsOpen(!isOpen)}
              option={{
                name: 'Menu',
                icon: <Menu />
              }}
            />
          </motion.div>
        )}
        {isOpen && (
          <motion.div
            initial={{ filter: 'blur(2px)' }}
            animate={{ filter: 'blur(0px)' }}
            className="z-10"
            key="close"
          >
            <MenuButton
              onClick={() => setIsOpen(!isOpen)}
              option={{
                name: 'X',
                icon: <X />
              }}
              className="z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen &&
          options.map((option, index) => {
            const calculatePosition = 48 * (index + 1);

            return (
              <motion.div
                key={index}
                animate={{
                  top: calculatePosition + 'px',
                  opacity: 1
                }}
                exit={{
                  top: '0px',
                  opacity: 0.2
                }}
                className="h-[52px] w-[52px] absolute "
              >
                <MenuButton option={option} key={option.name} />
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default FluidMenu;
