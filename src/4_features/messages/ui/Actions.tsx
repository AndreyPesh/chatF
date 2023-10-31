const Actions = () => {
  return (
    <div className="max-w-[212px] flex justify-between">
      <button className="w-5 h-5 bg-video bg-no-repeat bg-center transition-all active:scale-90"></button>
      <button className="w-5 h-5 bg-microphone bg-no-repeat bg-center transition-all active:scale-90"></button>
      <span className="inline-block w-[2px] h-5 bg-grayish"></span>
      <button className="w-5 h-5 bg-smile bg-no-repeat bg-center transition-all active:scale-90"></button>
      <button className="w-5 h-5 bg-attach bg-no-repeat bg-center transition-all active:scale-90"></button>
      <button className="w-5 h-5 bg-note bg-no-repeat bg-center transition-all active:scale-90"></button>
      <span className="inline-block w-[2px] h-5 bg-grayish"></span>
      <button className="w-5 h-5 bg-points bg-no-repeat bg-center transition-all active:scale-90"></button>
    </div>
  );
};

export default Actions;
