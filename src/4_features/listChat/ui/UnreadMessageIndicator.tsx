const UnreadMessageIndicator = ({ value }: { value: number }) => {
  return <div className="w-6 h-6 inline-flex items-center justify-center bg-red text-white rounded-full">{value}</div>;
};

export default UnreadMessageIndicator;
