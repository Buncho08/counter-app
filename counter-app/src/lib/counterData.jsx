let listeners = new Set();

function getCount() {
  if (typeof window !== "undefined") {
    return parseInt(localStorage.getItem("count") || "0", 10);
  } else {
    return 0;
  }

}

export const openLinkInNewTab = (href) => {
  const $a = document.createElement('a');

  $a.setAttribute('href', href);
  $a.setAttribute('target', '_blank');
  $a.setAttribute('rel', 'noopener noreferrer');

  document.body.appendChild($a);

  $a.click();

  document.body.removeChild($a);
};

function setCount(newCount) {
  typeof window !== "undefined" ? localStorage.setItem("count", newCount) : newCount;
  notify(newCount);
}

export function increment() {
  const newCount = getCount() + 1;
  setCount(newCount);
}

export function decrement() {
  let newCount = getCount() - 1;
  if (newCount < 0) {
    newCount = 0;
  }
  setCount(newCount);
}

export function onChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function notify(count) {
  listeners.forEach((cb) => cb(count));
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === "count") {
      notify(parseInt(e.newValue || "0", 10));
    }
  });
}

export function getCountSync() {
  return getCount();
}