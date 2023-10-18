import React, { useState } from 'react';

function users() {
    const [userData, setUserData] = useState(null);
    return { userData , setUserData};
  }

export { users }