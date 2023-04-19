import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
    const [store, setStore] = useState(
        () => window.JSON.parse(localStorage.getItem(key)) ?? defaultValue
    );
    
    useEffect(() => { 
        window.localStorage.setItem(key, JSON.stringify(store))
    }, [store, key]);

    return [store, setStore];
};

export { useLocalStorage }