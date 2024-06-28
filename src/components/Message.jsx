export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          <img src="emoji.png" alt="" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-green-500">Hi! What's up?</div>
      <div className="chat-footer text-xs text-white opacity-50 flex gap-1 items-center">
        10:47
      </div>
    </div>
  );
}
