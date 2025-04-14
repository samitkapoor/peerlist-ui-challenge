import FluidMenu from '../components/FluidMenu';

const FluidMenuPage = () => {
  return (
    <div className="h-full w-full p-5 relative">
      <FluidMenu />
      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  
            0 1 0 0 0  
            0 0 1 0 0  
            0 0 0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>
    </div>
  );
};

export default FluidMenuPage;
