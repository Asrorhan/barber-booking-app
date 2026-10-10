import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { servicesList } from '../data/initialData'
import { useApp } from '../context/AppContext';

function BookingModal({ barber, onClose }) {
    const { t } = useLanguage();
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [customerName, setCustomerName] = useState("");
    const { bookings, addBooking } = useApp();

    const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

    const toggleService = (serviceId) => {
        if (selectedServices.includes(serviceId)) {
            setSelectedServices(selectedServices.filter(id => id !== serviceId));
        } else {
            setSelectedServices([...selectedServices, serviceId]);
        }
    };

    const totalPrice = servicesList
        .filter(s => selectedServices.includes(s.id))
        .reduce((sum, s) => sum + parseInt(s.price.replace('$', '')), 0);

    const handleConfirm = (e) => {
        e.preventDefault();

        addBooking({
            barberId: barber.id,
            barberName: barber.name,
            service: selectedServices,
            time: selectedTime,
            totalPrice: totalPrice,
            customerName: customerName,
        })
        onClose();
    };

    const bookedTimes = bookings
        .filter((b) => b.barberId === barber.id)
        .map((b) => b.time);

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm'>
            <div className='bg-slate-800 w-full max-w-md rounded-2xl p-6 border border-slate-700 shadow-xl flex flex-col gap-5'>

                <div className='flex justify-between items-center border-b border-slate-700 pb-3'>
                    <h2 className='text-lg font-bold text-white'>
                        {barber.name} - {t('bookNow')}
                    </h2>
                    <button
                        onClick={onClose}
                        className='text-slate-400 hover:text-white text-xl font-bold px-2'
                    >
                        ✕
                    </button>
                </div>

                <div className="bg-slate-700/30 p-3 rounded-xl border border-slate-600">
                    <label className="text-xs font-semibold text-indigo-400 block mb-1">
                        {t('yourName') || "Ismingizni kiriting"} *
                    </label>
                    <input type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder='Enter your name.'
                        className='bg-slate-700 border-slate-600 text-white rounded-xl p-2.5  w-full outline-none'
                    />
                </div>

                <div>
                    <h3 className='text-sm font-semibold text-slate-300 mb-2'>
                        {t('selectServices')}
                    </h3>

                    <div className='flex flex-col gap-2'>

                        {servicesList.map((service) => {
                            const isSelected = selectedServices.includes(service.id);
                            return (
                                <div
                                    key={service.id}
                                    onClick={() => toggleService(service.id)}
                                    className={`flex justify-between items-center p-3 rounded-xl border cursor-pointer transition ${isSelected
                                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                                        : 'bg-slate-700/50 border-slate-600 text-slate-300 hover:border-slate-500'
                                        }`}
                                >
                                    <div>
                                        <p className='font-medium text-sm'>{t(service.nameKey)}</p>
                                        <p className='text-xs text-slate-400'>{service.duration}</p>
                                    </div>
                                    <span className='font-bold text-indigo-400'>{service.price}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h3 className='text-sm font-semibold text-slate-300 mb-2'>
                        {t('selectTime')}
                    </h3>
                    <div className='grid grid-cols-4 gap-2'>
                        {timeSlots.map((time) => {
                            const isSelected = selectedTime === time;
                            const isBooked = bookedTimes.includes(time);
                            return (
                                <button
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    className={`py-2 text-xs rounded-lg font-medium border transition ${isBooked
                                        ? 'bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed opacity-40 line-through'
                                        : isSelected
                                            ? 'bg-indigo-600 text-white border-indigo-500'
                                            : 'bg-slate-700/50 text-slate-300 border-slate-600 hover:border-slate-500'
                                        }`}
                                >
                                    {time}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className='pt-3 border-t border-slate-700 flex justify-between items-center'>
                    <div>
                        <p className='text-xs text-slate-400'>{t('totalPrice')}</p>
                        <p className='text-xl font-bold text-indigo-400'>${totalPrice}</p>
                    </div>
                    <button
                        onClick={handleConfirm}
                        disabled={selectedServices.length === 0 || !selectedTime || !customerName.trim()}
                        className={`px-5 py-2.5 rounded-xl font-medium transition ${selectedServices.length > 0 && selectedTime && customerName.trim()
                            ? 'bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer'
                            : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                            }`}
                    >
                        {t('bookNow')}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default BookingModal;