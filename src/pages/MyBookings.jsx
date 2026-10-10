import React from 'react'
import { useApp } from '../context/AppContext'
import { useLanguage } from '../context/LanguageContext';


function MyBookings() {
    const { bookings, cancelBooking, role } = useApp();
    const { t } = useLanguage();

    const currentCustomerName = localStorage.getItem("currentCustomerName") || "";

    const filteredBookings = role === "admin"
        ? bookings
        : bookings.filter(b => b.customerName.toLowerCase() === currentCustomerName.toLowerCase())
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-xl font-bold text-white mb-6">
                {role === "admin" ? t('adminViewTitle') : t('customerViewTitle')}
            </h1>

            {filteredBookings.length === 0 ? (
                <p className="text-center text-slate-400 py-10 text-lg">
                    {t('noBookings')}
                </p>
            ) : (
                <div className="flex flex-col gap-4">
                    {filteredBookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="p-5 bg-slate-800 border border-slate-700 rounded-2xl shadow-lg flex justify-between items-center"
                        >
                            <div className="flex flex-col gap-1">
                                {role === "admin" && (
                                    <p className="text-indigo-400 font-semibold text-sm">
                                        <span className='bg-indigo-500/10 text-indigo-400 px-2.5 py-0.5 
                                        rounded-full text-xs font-medium w-fit mb-1'>
                                            {t('customerLabel')}:</span> {booking.customerName || "Noma'lum"}
                                    </p>
                                )}
                                <h2 className="text-lg font-bold text-white">
                                    <span className="text-slate-400 font-normal">{t('barberLabel')}:</span> {booking.barberName}
                                </h2>
                                <p className="text-sm text-slate-300">
                                    <span className="text-slate-400">{t('bookedTimeLabel')}:</span> {booking.time}
                                </p>
                                <span className="text-indigo-400 font-semibold text-base mt-1">
                                    {t('totalPriceLabel')}: ${booking.totalPrice}
                                </span>
                            </div>

                            <button
                                onClick={() => cancelBooking(booking.id)}
                                className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition cursor-pointer text-sm font-medium"
                            >
                                {t('cancelBooking')}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyBookings