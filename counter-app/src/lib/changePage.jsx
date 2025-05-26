let listeners = new Set();
if (typeof window !== "undefined") {
    window.addEventListener("storage", (e) => {
        if (e.key === "kind") {
            notify(parseInt(e.newValue || 0, 10));
        }
    });
}
export function onChange(callback) {
    listeners.add(callback);
    return () => listeners.delete(callback);
}

function getKind() {
    if (typeof window !== "undefined") {
        return parseInt(localStorage.getItem("kind") || 0, 10);
    } else {
        return 0;
    }
}

export function setKind(newKind) {
    typeof window !== "undefined" ? localStorage.setItem("kind", newKind) : newKind;
    notify(newKind);
}

export function notify(count) {
    listeners.forEach((cb) => cb(count));
}
export function getKindSync() {
    return getKind();
}