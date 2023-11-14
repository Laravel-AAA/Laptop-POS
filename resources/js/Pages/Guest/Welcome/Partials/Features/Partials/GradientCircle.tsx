
export default function GradientCircle() {
  return (
    <div className="pointer-events-none absolute inset-0 mt-24 min-w-[500px] -scale-x-100 opacity-75  md:mt-0">
      <svg viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="b" cx="50%" cy="50%" r="50%" fx="43%" fy="42%">
            <stop offset="0%" stopColor="#26a69a" />
            <stop offset="100%" stopColor="rgba(38,82,166,0.2)" />
          </radialGradient>
          <filter
            id="a"
            x="-600"
            y="-337.5"
            width="2400"
            height="1350"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="72" />
          </filter>
        </defs>
        <g filter="url(#a)">
          <svg
            width="600"
            height="650"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            transform="translate(250.627 7.677)"
          >
            <path
              fill="url(#b)"
              d="M407.5 358q-32.5 108-135 69T93 319q-77-69-3-143t156-67.5q82 6.5 138 74T407.5 358Z"
            />
          </svg>
        </g>
      </svg>
    </div>
  );
}
