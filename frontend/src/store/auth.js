import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth',{
    state: () => ({
        isAuth: localStorage.getItem('isAuth') === 'true' || false,
        isReader: localStorage.getItem('isReader') === 'true' || false,
        user: {
            AdminName: "John Doe",
            ReaderName:"Tom Shaw"
            
        }
    }),
    actions: {
        setIsAuth(value) {
            this.isAuth = value;
        },
        setIsReader(value) {
            this.isReader = value;
        }
    },
    // This will be called automatically after the store is created
    onInit() {
        // Load state from Local Storage
        const storedAuth = JSON.parse(localStorage.getItem('auth'));
        if (storedAuth) {
            this.isAuth = storedAuth.isAuth;
            this.isReader = storedAuth.isReader;
        }
    }
});