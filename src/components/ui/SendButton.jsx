function SendButton({ loading, sent, inputsDisabled }) {
  return (
    <button
      className="group relative mx-auto flex h-11 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-white/30 px-0.5"
      type="submit"
      disabled={inputsDisabled}
    >
      <Box loading={loading} sent={sent} />
      <div
        className={`absolute inset-0 rounded-md bg-white/10 transition-[clip-path] duration-500 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]`}
      />
      <span
        className={`z-10 flex items-center justify-center ${loading ? "animate-pulse" : ""} pl-6 font-mono transition-transform duration-500 group-hover:-translate-x-8`}
      >
        {loading ? (
          "Pushing to remote..."
        ) : sent ? (
          "Push successful!"
        ) : (
          <>
            Git push origin{" "}
            <span className="ml-2 font-bold">
              {"<"}
              <span className="underline decoration-neutral-600 decoration-wavy">
                Contact
              </span>
              {" />"}
            </span>
          </>
        )}
      </span>
    </button>
  );
}

export default SendButton;

const Box = ({ loading, sent }) => {
  let schema = [
    0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
  ];
  if (sent) {
    schema = [
      1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
      1, 1, 1, 1, 1,
    ];
  }

  const getAnimationState = () => {
    if (loading) {
      return "translate-x-0 rotate-180 transition-[translate] duration-1000 ease-in-out";
    }
    if (sent) {
      return "translate-x-69 rotate-180 duration-500 ease-out transition-all";
    }
    return "transition-all duration-500 ease-out group-hover:translate-x-69 group-hover:rotate-180";
  };

  return (
    <div
      className={`absolute left-0.5 z-20 flex size-9 items-center justify-center rounded-lg border border-neutral-500 bg-neutral-600 ${getAnimationState()}`}
    >
      <div className="grid grid-cols-5 gap-px">
        {schema.map((active, i) => (
          <span
            key={i}
            className={`inline-block size-1 rounded-full ${
              active ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
