import React from "react";

type MsgNotificationProps = {
  msg: string | undefined;
};

export const MsgNotification = ({ msg }: MsgNotificationProps) => {
  return (
    <div
      style={{ height: `16px` }}
      className="flex items-center justify-center rounded mx-0.5 cursor-pointer border Notification-text"
    >{msg === undefined ? "" : msg}</div>
  );
};
