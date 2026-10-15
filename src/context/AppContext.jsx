import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialBarbers } from '../data/initialData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [barbers, setBarbers] = useState(() => {
        const saved = localStorage.getItem('barbers');
        return saved ? JSON.parse(saved) : initialBarbers;
    });

    const [bookings, setBookings] = useState(() => {
        const saved = localStorage.getItem('bookings');
        return saved ? JSON.parse(saved) : [];
    });

    const [role, setRole] = useState(() => {
        return localStorage.getItem('role') || 'customer';
    });

    useEffect(() => {
        localStorage.setItem('barbers', JSON.stringify(barbers));
    }, [barbers]);

    useEffect(() => {
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }, [bookings]);
    useEffect(() => {
        localStorage.setItem('role', role)
    }, [role]);

    const addBarber = (newBarber) => {
        setBarbers((prev) => [...prev, { ...newBarber, id: `b_${Date.now()}` }]);
    };
    const deleteBarber = (id) => {
        setBarbers((prev) => prev.filter((barber) => barber.id !== id))
    };
    const updateBarber = (updateBarber) => {
        setBarbers((prev) =>
            prev.map((barber) => barber.id === updateBarber.id ? updateBarber : barber)
        );
    };

    const addBooking = (bookingData) => {
        setBookings((prev) => [...prev, { ...bookingData, id: `book_${Date.now()}` }]);
    };

    const cancelBooking = (id) => {
        setBookings((prev) => prev.filter((b) => b.id !== id));
    };

    return (
        <AppContext.Provider
            value={{
                barbers,
                addBarber,
                deleteBarber,
                updateBarber,
                bookings,
                addBooking,
                cancelBooking,
                role,
                setRole
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);