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
      className={`h-[52px] w-[52px] !p-4 !rounded-full !outline-none !border-none !bg-white flex items-center justify-center ${className}`}
    >
      {option.icon}
    </button>
  );
};

const FluidMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="text-black flex flex-col gap-0 relative">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            exit={{ filter: 'blur(10px)' }}
            className="z-10"
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
            initial={{ filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            exit={{ filter: 'blur(10px)' }}
            className="z-10"
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
