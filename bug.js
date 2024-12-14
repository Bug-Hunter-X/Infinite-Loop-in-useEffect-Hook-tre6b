```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic. This will cause an infinite loop
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default MyComponent;
```