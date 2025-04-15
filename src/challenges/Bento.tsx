import DynamicStatusIndicator from './DynamicStatusIndicator';
import FluidMenuPage from './FluidMenuPage';
import TodoList from './TodoList';
import LockedItem from '../components/LockedItem';
import { ArrowRight } from 'lucide-react';
import AnimatedToggle from '../components/AnimatedToggle';

const Bento = () => {
  const components = [
    {
      id: 1,
      title: 'Day 1 - Fluid Menu',
      children: <FluidMenuPage />,
      className: 'col-span-1 md:col-span-3 row-span-8',
      href: 'https://peerlist.io/challenges/ui-animation-challenge?utm_source=left-panel',
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#ffffffed]"></div>
          <div
            style={{
              background:
                'radial-gradient(circle at bottom left, rgba(0, 200, 83, 0.3), transparent 35%)'
            }}
            className="absolute inset-0"
          ></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Day 2 - Dynamic Status Indicator',
      children: <DynamicStatusIndicator />,
      className: 'col-span-1 md:col-span-5 row-span-1',
      href: 'https://peerlist.io/challenges/ui-animation-challenge?utm_source=left-panel',
      background: (
        <div className="absolute inset-0">
          <div
            style={{
              background:
                'radial-gradient(circle at top left, rgba(0, 200, 83, 0.3), #ffffffED 30%)'
            }}
            className="absolute inset-0"
          ></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Day 3 - Todo List',
      href: 'https://peerlist.io/challenges/ui-animation-challenge?utm_source=left-panel',
      children: <TodoList />,
      className: 'col-span-1 md:col-span-4 row-span-2'
    },
    {
      id: 5,
      title: 'Coming Soon',
      children: <LockedItem />,
      className: 'col-span-1 md:col-span-4 row-span-7',
      background: (
        <div className="absolute inset-0">
          <div
            style={{
              background:
                'radial-gradient(circle at top right, rgba(0, 200, 83, 0.3), #ffffffED 25%)'
            }}
            className="absolute inset-0"
          ></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Day 4 - Animated Toggles',
      children: <AnimatedToggle />,
      className: 'col-span-1 md:col-span-5 row-span-6',
      background: (
        <div className="absolute inset-0">
          <div
            style={{
              background:
                'radial-gradient(circle at top left, rgba(0, 200, 83, 0.3), #ffffffED 25%)'
            }}
            className="absolute inset-0"
          ></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen w-screen flex items-center justify-center flex-col select-none bg-[#eeeeee] p-5 md:p-10">
      <div className="flex flex-row items-center text-3xl md:text-7xl text-black font-extrabold py-2 z-10">
        <div className="flex items-center">
          <div
            style={{
              background: 'linear-gradient(135deg, #ffffff, #f8fdf8)',
              boxShadow: 'inset 0 0 15px rgba(0, 128, 0, 0.35), 0 0 50px rgba(0, 128, 0, 0.25)'
            }}
            className="h-14 w-14 md:h-20 md:w-20 rounded-3xl border border-green-400/30 flex items-center justify-center p-2"
          >
            <img src="/peerlist.svg" className="w-full h-full" />
          </div>
          <p className="text-black/80 font-bold">eerlist</p>
        </div>

        <span className="text-green-600 font-normal">&nbsp;x&nbsp;</span>

        <div className="flex items-center">
          <div
            style={{
              background: 'linear-gradient(135deg, #ffffff, #f8fdf8)',
              boxShadow: 'inset 0 0 15px rgba(0, 128, 0, 0.35), 0 0 50px rgba(0, 128, 0, 0.25)'
            }}
            className="h-14 w-14 md:h-20 md:w-20 rounded-3xl border border-green-400/30 flex items-center justify-center p-2"
          >
            <img src="/aceternity.png" className="w-full h-full object-contain" />
          </div>
          <p className="text-black/80 font-bold">ceternity</p>
        </div>
      </div>

      <p className="text-sm text-black/80 mt-4 text-center">
        Below are my submissions for this UI animation challenge.{' '}
        <a
          href="https://peerlist.io/challenges/ui-animation-challenge?utm_source=left-panel"
          className="!underline"
        >
          Click to know more.
        </a>
      </p>

      <div className="grid md:grid-cols-12 gap-5 mt-12 z-10 max-w-5xl">
        {components.map((component) => {
          return (
            <div
              key={component.id}
              className={`${component.className} min-h-[300px] md:min-h-[200px] rounded-xl overflow-hidden relative transition-all duration-300 hover:translate-y-[-4px] border-[1px] border-green-500/30 group hover:shadow-lg`}
            >
              <div className="pointer-events-none opacity-70 transition-all duration-300">
                {component.background}
              </div>
              {component.title && (
                <div className="absolute bottom-0 left-0 right-0 px-2 py-2 z-20 opacity-0 transform translate-y-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="text-sm font-medium text-black">{component.title}</h3>
                </div>
              )}
              {component.href && (
                <div className="absolute top-2 right-2 p-2 z-20 opacity-0 transform translate-y-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-black/80 shadow-md cursor-pointer rounded-full">
                  <a href={component.href} className="text-sm font-medium text-white">
                    <ArrowRight className="w-5 h-5 -rotate-45 text-white" />
                  </a>
                </div>
              )}
              <div className="z-10 h-full w-full flex items-center justify-center">
                {component.children}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-black/80 mt-12">
        Created with ❤️ by{' '}
        <a href="https://samitkapoor.com" className="!underline !text-green-600">
          Samit Kapoor
        </a>
      </p>
    </div>
  );
};

export default Bento;
