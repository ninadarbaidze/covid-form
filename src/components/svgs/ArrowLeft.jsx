const ArrowLeft = (props) => {
  return (
    <svg
      width='18'
      height='23'
      className={`w-3 2xl:w-4 ${props.className}`}
      onClick={props.onClick}
      id='left'
      viewBox='0 0 18 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M17 1L3 11.3158L17 21.6316' stroke='#232323' strokeWidth='2.4' />
    </svg>
  );
};

export default ArrowLeft;
