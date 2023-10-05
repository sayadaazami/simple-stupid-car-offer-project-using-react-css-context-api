export function browseCars() {
  return fetch("/mock/cars.json")
    .then((x) => x.json())
    .catch((error) => {
      Promise.reject(error.message || "unknown error");
    });
}
