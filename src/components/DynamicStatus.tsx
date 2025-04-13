import { Check, TriangleAlertIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const DynamicStatus = ({ status = 'loading' }: { status: 'loading' | 'success' | 'error' }) => {
  return (
    <div
      style={{
        backgroundColor:
          status === 'success' ? '#DCF5E1' : status === 'loading' ? '#E6F2FF' : '#FFE6E6'
      }}
      className="px-3.5 py-2 rounded-full text-black w-min whitespace-nowrap flex items-center overflow-hidden transition-all duration-300"
    >
      <AnimatePresence mode="wait">
        {status === 'error' && (
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              x: [0, -3, 3, 0, -3, 3, 0],
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: 0.25,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
            key="erroricon"
            className="rounded-full text-[#FD403C]  "
          >
            <TriangleAlertIcon className="h-5 w-5" />
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: 0.25,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
            key="successicon"
            className="rounded-full bg-[#52C26C] text-white p-1 "
          >
            <Check className="h-3 w-3" />
          </motion.div>
        )}

        {status === 'loading' && (
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: 0.25,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
            key="loadingicon"
          >
            <div
              style={{
                animationDuration: '300ms'
              }}
              className="animate-spin h-4.5 w-4.5 border-t-3 border-l-3 rounded-full border-[#54B2FE] my-1"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="ml-1.5">
        <AnimatePresence mode="wait">
          {status === 'loading' && (
            <motion.div
              initial={{
                x: '-10%',
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              exit={{
                x: '10%',
                opacity: 0,
                transition: {
                  duration: 0.2
                }
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              key="loadingtext"
              className="text-[#239bfc] font-medium"
            >
              Analyzing Transaction
            </motion.div>
          )}
          {status === 'success' && (
            <motion.div
              initial={{
                x: '-10%',
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              exit={{
                x: '10%',
                opacity: 0,
                transition: {
                  duration: 0.2
                }
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              key="successtext"
              className="text-[#52C26C] font-medium mb-0.5"
            >
              Transaction Safe
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{
                x: '-10%',
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              exit={{
                x: '10%',
                opacity: 0,
                transition: {
                  duration: 0.2
                }
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              key="errortext"
              className="text-[#FD403C] font-medium mb-0.5"
            >
              Transaction Warning
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DynamicStatus;
