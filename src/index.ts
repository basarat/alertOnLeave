export interface Check {
  /** If a message is returned it is used to prevent a nav away */
  (): string | null | undefined;
}

/** Checks we need to do before leave */
let checks: Check[] = [];

/** Only alert in browsers */
if (typeof window !== 'undefined') {
  const getMessageIfAny = () => {
    let message = '';
    for (const check of checks) {
      message = check();
      if (message) break;
    }
    return message;
  }
  /** Browser close and reload */
  window.addEventListener('beforeunload', (e) => {
    const message = getMessageIfAny();
    if (!message) return; // Dont alert

    e.preventDefault(); // Without this XHRs get cancelled
    e.returnValue = message; // Gecko, Trident, Chrome 34+
    return message; // Gecko, WebKit, Chrome <34
  });
}

export function alertOnLeave(check: Check) {
  checks.push(check);
  return () => {
    checks = checks.filter(c => c !== check);
  }
}