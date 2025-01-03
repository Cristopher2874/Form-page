export const safeLocalStorage = {
    getItem: (key: string) => {
      if (typeof window === "undefined") return null;
      return localStorage.getItem(key);
    },
    setItem: (key: string, value: string) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, value);
      }
    },
    removeItem: (key: string) => {
        if (typeof window !== "undefined") {
            localStorage.removeItem(key);
        }
    }
  };  