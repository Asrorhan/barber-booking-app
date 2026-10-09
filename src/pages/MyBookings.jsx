import React from 'react'
import { useApp } from '../context/AppContext'
import { useLanguage } from '../context/LanguageContext';


function MyBookings() {
    const { bookings, cancelBooking } = useApp();
    const { t } = useLanguage();
    return (
        <div>
            {bookings.length === 0 ? <p>{t('noBookings')}</p> :
                bookings.map((booking) => {
                    return (
                        <div key={booking.id} className='p-4 border rounded-xl mb-3'>
                            <h2>{booking.barberName}</h2>
                            <p>{booking.time}</p>
                            <span>${booking.totalPrice}</span>
                            <button onClick={() => cancelBooking(booking.id)}>{t('cancelBooking')}</button>
                        </div>
                    )
                })}
        </div>
    )
}

export default MyBookings