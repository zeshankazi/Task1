

const LogoDoted = () => <span className='w-2 h-2 m-[0.3rem] bg-[#045ce2] rounded'></span>;

const DottedGrid = () => {
  const rows = 3;
  const columns = 11;
  const grid = [];

  for (let i = 0; i < columns; i++) {
    grid.push(
      <div key={i} className="flex flex-col">
        {Array.from({ length: rows }).map((_, j) => (
          <LogoDoted key={j} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      {grid}
    </div>
  );
};
export default DottedGrid