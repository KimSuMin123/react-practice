import React, { useState, useEffect } from "react";

function UserStatusWithCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    // ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      // ServerAPI.unsubscribellserStatus(props.user.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
}

export default UserStatusWithCounter;
