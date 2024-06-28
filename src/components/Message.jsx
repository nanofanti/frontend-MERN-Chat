export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          <img src="emoji.png" alt="" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-green-500">Hi! What's up?</div>
      <div className="chat-footer text-xs opacity-50 flex gap-1 items-center">
        Hi! What's up?
      </div>
    </div>
  );
}
