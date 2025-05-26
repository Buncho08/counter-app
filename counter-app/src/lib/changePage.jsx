let listeners = new Set();

export default function onChange(callback) {
    listeners.add(callback);
    return () => listeners.delete(callback);
}

function getKind() {
    if (typeof window !== "undefined") {
        return parseInt(localStorage.getItem("kind") || "0", 10);
    } else {
        return 0;
    }
}
function setKind(newKind) {
    typeof window !== "undefined" ? localStorage.setItem("kind", newKind) : newKind;
    notify(newKind);
}

function notify(count) {
    listeners.forEach((cb) => cb(count));
}
