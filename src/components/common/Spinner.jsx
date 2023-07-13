const Spinner = ({ size = "md" }) => {
  return (
    <div className="w-full grid place-items-center p-6">
      {size === "sm" && (
        <span className="loading loading-spinner loading-sm"></span>
      )}
      {size === "md" && (
        <span className="loading loading-spinner loading-md"></span>
      )}
      {size === "lg" && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </div>
  );
};

export default Spinner;
