import React from 'react'
import { useApp } from '../context/AppContext'
import { useLanguage } from '../context/LanguageContext';

function Analytics() {
    const { barbers, bookings } = useApp();
    const { t } = useLanguage();

    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce((sum, item) => {
        return sum + (Number(item.totalPrice) || 0)
    }, 0)

    const barberStats = barbers.map((barber) => {
        const count = bookings.filter(b => b.barberId === barber.id || b.barberName === barber.name).length
        return { ...barber, bookingCount: count }
    })

    const topBarber = barberStats.reduce((max, b) => {
        return b.bookingCount >= (max?.bookingCount || 0) ? b : max
    }, null)
    return (
        <div className="p-6 max-w-6xl mx-auto flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white">Analytics & Statistics</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
                    <p className="text-slate-400 text-sm font-medium">Total Bookings</p>
                    <h3 className="text-3xl font-extrabold text-indigo-400 mt-2">{totalBookings}</h3>
                </div>

                <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
                    <p className="text-slate-400 text-sm font-medium">Total Revenue</p>
                    <h3 className="text-3xl font-extrabold text-emerald-400 mt-2">${totalRevenue}</h3>
                </div>

                <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
                    <p className="text-slate-400 text-sm font-medium">Top Barber</p>
                    <h3 className="text-xl font-bold text-amber-400 mt-2">
                        {topBarber && topBarber.bookingCount > 0 ? `${topBarber.name} (${topBarber.bookingCount})` : 'N/A'}
                    </h3>
                </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4">Bookings per Barber</h3>
                <div className="flex flex-col gap-3">
                    {barberStats.map(barber => {
                        const percentage = totalBookings > 0 ? Math.round((barber.bookingCount / totalBookings) * 100) : 0
                        return (
                            <div key={barber.id} className="flex flex-col gap-1">
                                <div className="flex justify-between text-sm text-slate-300">
                                    <span>{barber.name}</span>
                                    <span className="font-semibold">{barber.bookingCount} ({percentage}%)</span>
                                </div>
                                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-indigo-500 h-full transition-all duration-300"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Analytics