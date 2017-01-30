# Install
```
npm install alertonleave --save-dev
```

# Use
```ts
import {alertOnLeave} from "alertonleave";

alertOnLeave(()=>{
  if (someCondition) {
    return "Are you sure you want to leave?"
  }
})
```

Build with TypeScript 🌹