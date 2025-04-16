import { LayoutGrid, List } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  {
    label: 'List view',
    value: 'list',
    icon: () => <List size={16} />
  },
  {
    label: 'Card view',
    value: 'card',
    icon: () => <LayoutGrid size={16} />
  },
  {
    label: 'Pack view',
    value: 'pack',
    icon: (isActive?: boolean) => (
      <div className="h-4 w-4 flex items-center  justify-center relative mb-0.5">
        <div
          className={`h-3.5 w-3 rounded-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] border-[1.5px] absolute top-0 left-0 rotate-12 z-10 ml-0.5 ${
            isActive ? 'bg-[#27B3FF] border-white' : 'bg-[#F0F0F0] border-[#747474]'
          }`}
        />
        <div
          className={`h-3.5 w-3 rounded-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] border-[1.5px] absolute top-0 left-0 -rotate-12 -translate-x-1 ml-0.5 translate-y-0.5 ${
            isActive ? 'border-white' : 'border-[#747474]'
          }`}
        />
      </div>
    )
  }
];

const listItems = [
  {
    img: '/skilledfingerseries.svg',
    label: 'Skilled Fingers Series',
    eth: 0.855,
    rank: 209
  },
  {
    img: '/vibrantvibesseries.svg',
    label: 'Vibrant Vibes Series',
    eth: 0.209,
    rank: 808
  }
];

const Tabs = ({
  activeTab,
  setActiveTab
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="flex items-center w-full gap-2 mt-4">
      {tabs.map((tab) => {
        return (
          <div
            key={tab.value}
            style={{
              backgroundColor: tab.value !== activeTab ? '#F0F0F0' : '#27B3FF',
              color: tab.value !== activeTab ? '#747474' : 'white'
            }}
            onClick={() => setActiveTab(tab.value)}
            className="flex items-center text-[#747474] justify-center !border-none !outline-none bg-[#F0F0F0] !rounded-full cursor-pointer py-2 px-4 gap-1 text-sm transition-all duration-100 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
          >
            {tab.icon(tab.value === activeTab)}
            <p>{tab.label}</p>
          </div>
        );
      })}
    </div>
  );
};

const ListItems = ({ activeTab }: { activeTab: string }) => {
  const isList = activeTab === 'list';
  const isGrid = activeTab === 'card';
  const isPack = activeTab === 'pack';

  return (
    <motion.div
      layout
      style={{
        display: 'grid',
        gridTemplateColumns: isList || isPack ? '1fr' : '1fr 1fr',
        gap: isPack ? '0px' : isList ? '12px' : '20px'
      }}
      className={`grid text-sm relative`}
      transition={{
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
    >
      {listItems.map((item, i) => {
        const rotation = i % 2 === 0 ? -15 : 15;

        return (
          <motion.div
            key={item.label}
            style={{
              display: 'flex',
              flexDirection: isList ? 'row' : 'column',
              position: isPack ? 'absolute' : 'relative',
              top: isPack ? '0px' : '0px',
              left: isPack ? '0px' : '0px',
              right: isPack ? '0px' : '0px',
              height: isPack ? '80px' : 'auto'
            }}
            className={`items-center relative gap-2`}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
          >
            {!isPack ? (
              <>
                <motion.img
                  layout
                  layoutId={`item-image-${item.label}`}
                  src={item.img}
                  alt={item.label}
                  width={48}
                  height={48}
                  className={(isList ? `h-[48px] w-[48px]` : `h-full w-full`) + ' z-10'}
                  animate={{ rotate: 0, borderRadius: '0px' }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                />
                <AnimatePresence>
                  <motion.div
                    layout="position"
                    layoutId={`item-info-${item.label}`}
                    key={`item-information-${item.label}`}
                    initial={{
                      opacity: 0
                    }}
                    whileInView={{
                      opacity: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    className="flex items-center justify-between w-full relative"
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1.0]
                    }}
                  >
                    <div className="flex flex-col items-start justify-start w-full relative">
                      <p className="whitespace-nowrap">{item.label}</p>
                      <div className="flex items-center justify-between w-full">
                        <p>
                          {item.eth} <span className="text-[#747474]">ETH</span>
                        </p>
                        {isGrid && (
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
                              duration: 0.4,
                              ease: [0.25, 0.1, 0.25, 1.0]
                            }}
                            key="centeredrank"
                            className="flex items-center justify-center gap-1 text-sm"
                          >
                            <div className="h-2.5 w-2.5 rounded-sm rotate-45 bg-[#F4E5A9]"></div>
                            <p className="text-[#747474]">#{item.rank}</p>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {isList && (
                      <motion.div
                        key="endrank"
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
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1.0]
                        }}
                        className="flex items-center justify-center gap-1 text-sm"
                      >
                        <div className="h-2.5 w-2.5 rounded-sm rotate-45 bg-[#F4E5A9]"></div>
                        <p className="text-[#747474]">#{item.rank}</p>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <motion.img
                layout
                layoutId={`item-image-${item.label}`}
                src={item.img}
                alt={item.label}
                width={64}
                height={64}
                className={`h-[64px] w-[64px] mx-auto`}
                animate={{ rotate: rotation, borderRadius: '16px' }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
              />
            )}
          </motion.div>
        );
      })}
      {isPack && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.35,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
          className="flex flex-col w-full items-center justify-center mt-[80px]"
        >
          <p>{listItems.length} Collectibles</p>
          <p>
            {listItems.reduce((l, item) => (l += item.eth), 0)}{' '}
            <span className="text-[#747474]">ETH</span>
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

const SharedLayoutTabs = () => {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="text-black z-10 flex items-center justify-center w-full">
      <div className="w-[360px] relative flex flex-col">
        <p>Collectibles</p>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div
          className={`h-[2px] w-full bg-[#F0F0F0] mt-4 transition-all ${
            activeTab === 'list' || activeTab === 'pack' ? 'mb-6' : 'mb-3'
          }`}
        />
        <ListItems activeTab={activeTab} />
      </div>
    </div>
  );
};

export default SharedLayoutTabs;
