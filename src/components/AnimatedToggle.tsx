import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const RadioButton = ({
  children,
  isSelected,
  onClick,
  reverseColors,
  className
}: {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  reverseColors?: boolean;
  className?: string;
}) => {
  return (
    <div
      style={{
        color: isSelected ? (reverseColors ? 'black' : 'white') : reverseColors ? 'white' : 'black'
      }}
      onClick={onClick}
      className={
        'w-full h-full flex flex-col items-center cursor-pointer font-semibold justify-center z-10 transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ' +
        className
      }
    >
      {children}
    </div>
  );
};

const AnimatedToggle = () => {
  const [selected, setSelected] = useState<'free' | 'premium'>('free');
  const [selectedPremiumPlan, setSelectedPremiumPlan] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="z-10 h-full w-full flex items-center justify-center text-black">
      <div className="flex items-center justify-center border border-black/5 shadow-sm shadow-black/10 rounded-full max-w-[315px] w-full p-[2.75px]">
        <div className="grid grid-cols-2 rounded-full w-full h-[45px] relative text-sm">
          <div
            style={{
              left: selected === 'free' ? '0px' : '50%'
            }}
            className={
              'z-0 col-span-1 bg-black rounded-full h-full absolute transition-all duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-1/2'
            }
          ></div>
          <RadioButton
            isSelected={selected === 'free'}
            onClick={() => {
              setSelected('free');
              setSelectedPremiumPlan('monthly');
            }}
          >
            Free
          </RadioButton>

          <AnimatePresence mode="popLayout">
            {selected !== 'premium' ? (
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1]
                }}
                key={'notselectedpremium'}
                className="h-full w-full flex items-center justify-center"
              >
                <RadioButton isSelected={false} onClick={() => setSelected('premium')}>
                  <motion.p
                    style={{
                      opacity: 1,
                      scale: 1
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      y: 10
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    key={'premiumheading'}
                    className="font-semibold text-black/75"
                  >
                    Premium
                  </motion.p>
                  <motion.p
                    initial={{
                      opacity: 0,
                      scale: 1.2,
                      y: -4
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.2,
                      y: -4
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.05
                    }}
                    key={'optionslabel'}
                    className="text-[10px] font-normal"
                  >
                    Monthly • Annual
                  </motion.p>
                </RadioButton>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.3, y: 13, opacity: 0 }}
                animate={{
                  scale: 1,
                  y: 0,
                  opacity: 1
                }}
                exit={{
                  scale: 0.3,
                  y: 13,
                  opacity: 0
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1]
                }}
                key={'selectedpremium'}
                className="p-[2.75px] h-full w-full flex items-center justify-center"
              >
                <div
                  style={{
                    color: 'white'
                  }}
                  className="rounded-full h-full w-full grid grid-cols-2 cursor-pointer z-10 relative"
                >
                  <div
                    style={{
                      left: selectedPremiumPlan === 'monthly' ? '0px' : '50%'
                    }}
                    className={
                      'z-0 col-span-1 bg-white rounded-full h-full absolute transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-1/2'
                    }
                  ></div>
                  <RadioButton
                    isSelected={selectedPremiumPlan === 'monthly'}
                    onClick={() => setSelectedPremiumPlan('monthly')}
                    reverseColors={true}
                    className="!duration-[450ms] !ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <p className="text-xs">Monthly</p>
                  </RadioButton>
                  <RadioButton
                    isSelected={selectedPremiumPlan === 'annual'}
                    onClick={() => setSelectedPremiumPlan('annual')}
                    reverseColors={true}
                    className="!duration-[450ms] !ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <p className="text-xs">Annual</p>
                  </RadioButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AnimatedToggle;
