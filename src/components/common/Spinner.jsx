const Spinner = ({ size = "md", title = "" }) => {
  return (
    <div className="w-full grid place-items-center p-6 mt-8">
      <div className="w-fit flex items-center gap-2">
        {size === "sm" && (
          <span className="loading loading-spinner loading-sm"></span>
        )}
        {size === "md" && (
          <span className="loading loading-spinner loading-md"></span>
        )}
        {size === "lg" && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        <h4 className="font-semibold text-sm">{title}</h4>
      </div>
    </div>
  );
};

export default Spinner;
