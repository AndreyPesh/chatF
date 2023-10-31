
const SendMessageField = () => {
  return (
    <div className="bg-white border border-light rounded-[20px] overflow-hidden">
      <form>
        <div className="max-h-[96px]">
          <textarea name="message" className="p-5 inline-flex w-full min-h-[96px] resize-none caret-nephritis border-b-2 border-b-grayish focus:outline-none"></textarea>
        </div>
        <div className="py-3 px-5 flex justify-between">
          <div>

          </div>
          <button className="w-5 h-5 bg-send bg-no-repeat bg-center"></button>
        </div>
      </form>
    </div>
  );
};

export default SendMessageField;