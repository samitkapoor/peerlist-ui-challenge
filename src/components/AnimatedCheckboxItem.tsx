import { AnimatePresence, motion } from 'framer-motion';

interface Option {
  id: number;
  label: string;
  completed: boolean;
}

const Label = ({ label, completed }: { label: string; completed: boolean }) => {
  return (
    <div
      className={`text-sm relative flex items-center justify-center overflow-hidden text-[#848282] select-none`}
    >
      <p>{label}</p>
      <motion.div
        initial={{
          x: '-100%'
        }}
        animate={{
          x: completed ? '0%' : '-100%'
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className="absolute w-full h-[2px] rounded-full bg-[#848282]"
      ></motion.div>
    </div>
  );
};

const AnimatedCheckbox = ({ completed }: { completed: boolean }) => {
  return (
    <div className="relative w-5 h-5">
      <AnimatePresence mode="wait">
        {!completed && (
          <svg
            viewBox="0 0 24 24"
            className="absolute top-0 left-0 w-full h-full"
            fill="none"
            stroke="#848282DD"
            strokeWidth="2"
            key={'checkbox-border'}
          >
            <motion.rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              strokeDasharray="80"
              initial={{
                strokeDashoffset: 80
              }}
              animate={{
                strokeDashoffset: 0
              }}
              exit={{
                strokeDashoffset: 80
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </svg>
        )}
        {completed && (
          <motion.div
            key={'checkbox-check'}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2, ease: 'backOut' }}
            className="absolute top-[2px] left-[2px] w-[18px] h-[18px] bg-[#0B88FFCF] rounded flex items-center justify-center"
          >
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              <motion.path
                d="M5 13 L9 17 L19 7"
                strokeDasharray="30"
                initial={{
                  strokeDashoffset: 30
                }}
                animate={{
                  strokeDashoffset: 0
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                  delay: 0.2
                }}
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AnimatedCheckboxItem = ({
  item,
  handleSelectItem
}: {
  item: Option;
  handleSelectItem: (item: Option) => void;
}) => {
  return (
    <div
      onClick={() => handleSelectItem(item)}
      className={`flex items-center justify-center gap-2 text-black rounded-lg p-2 hover:bg-[#E3E1E279] cursor-pointer transition-all duration-300 ${
        item.completed ? 'bg-[#E3E1E279]' : ''
      }`}
    >
      <AnimatedCheckbox completed={item.completed} />
      <Label label={item.label} completed={item.completed} />
    </div>
  );
};

export default AnimatedCheckboxItem;
