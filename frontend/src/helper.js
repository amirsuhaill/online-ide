export const toggleClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.toggle(className);
};

export const removeClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};


// Read backend base URL from Vite env variable `VITE_BACKEND_BASE_URL`.
// Fallback to the previously used hosted URL if the env var is not set.
export const api_base_url = import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:3000";