const TimeMessage = ({ time }: { time: Date }) => {
  const localTime = new Date(time).toLocaleTimeString();
  return <span className="ml-2 inline-flex text-concrete">{localTime}</span>;
};

export default TimeMessage;
