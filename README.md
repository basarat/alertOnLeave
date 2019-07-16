# Install

[![Greenkeeper badge](https://badges.greenkeeper.io/basarat/alertOnLeave.svg)](https://greenkeeper.io/)

```
npm install alertonleave --save
```

# Use
```ts
import {alertOnLeave} from "alertonleave";

const dispose = alertOnLeave(()=>{
  if (someCondition) {
    return "Are you sure you want to leave?"
  }
});

// When you don't want to check anymore
dispose();
```

Build with TypeScript 🌹