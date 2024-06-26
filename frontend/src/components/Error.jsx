const Error = ({ message }) => {
  return (
    <div className="mt-[300px] text-center text-2xl">
      <p>Sorry. An error occured.</p>
      <p className="bg-red-500 rounded text-white mt-10 ">{message}</p>
    </div>
  );
};

export default Error;
