import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import BarberCard from '../components/BarberCard'
import BookingModal from '../components/BookingModal'
import { useLanguage } from '../context/LanguageContext';

function BarberList() {
    const { barbers, role, addBarber, updateBarber } = useApp();
    const { t } = useLanguage();
    const [selectedBarber, setSelectedBarber] = useState(null);
    const [isAddModal, setIsAddModal] = useState(false);
    const [editingBarber, setEditingBarber] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        avatar: '',
        age: '',
        experience: '',
        language: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleEdit = (barber) => {
        setEditingBarber(barber);
        setFormData({
            name: barber.name || '',
            avatar: barber.avatar || 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500',
            age: Number(barber.age) || 23,
            experience: barber.experience || '10 year',
            languages: barber.languages ? barber.languages.join(', ') : (barber.language || ''),
            rating: "5.0",
            phone: "+37125442055"
        });
        setIsAddModal(true);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const languagesArray = formData.language
            ? formData.language.split(',').map(l => l.trim())
            : ["EN"];

        if (editingBarber) {
            updateBarber({
                id: editingBarber.id,
                name: formData.name,
                avatar: formData.avatar || editingBarber.avatar,
                age: Number(formData.age),
                experience: formData.experience,
                languages: languagesArray,
                rating: editingBarber.rating || "5.0",
                phone: editingBarber.phone || "+37125442055"
            });
        }
        else {
            addBarber({
                name: formData.name,
                avatar: formData.avatar || 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500',
                age: Number(formData.age) || 23,
                experience: formData.experience || '10 year',
                languages: languagesArray,
                rating: "5.0",
                phone: "+37125442055"
            });
        }

        setFormData({ name: '', avatar: '', age: '', experience: '', language: '' });
        setEditingBarber(null);
        setIsAddModal(false);


    }



    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                {barbers.map((barber) => {
                    return <BarberCard
                        key={barber.id}
                        barber={barber}
                        onSelect={() => setSelectedBarber(barber)}
                        onEdit={handleEdit} />
                })}

                <div>
                    {role === 'admin' &&
                        <button
                            onClick={() => setIsAddModal(true)}
                            className="px-4 py-2 bg-indigo-600 text-white 
                        rounded-xl hover:bg-indigo-500 transition font-medium"
                        >{t('addNewBarberTitle')} </button>}
                </div>
            </div>
            {selectedBarber && (
                <BookingModal
                    barber={selectedBarber}
                    onClose={() => setSelectedBarber(null)}
                />
            )}
            {isAddModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl w-full max-w-md shadow-2xl">
                        <h2 className="text-xl font-bold text-white mb-4">
                            {editingBarber ? t('editBarberTitle') : t('addNewBarberTitle')}
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="name"
                                placeholder={t('barberNamePlaceholder')}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="p-3 bg-slate-700 text-white rounded-xl border border-slate-600 focus:outline-none focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                name="avatar"
                                placeholder={t('avatarUrlPlaceholder')}
                                value={formData.avatar}
                                onChange={handleChange}
                                className="p-3 bg-slate-700 text-white rounded-xl border border-slate-600 focus:outline-none focus:border-indigo-500"
                            />
                            <input
                                type="number"
                                name="age"
                                placeholder={t('agePlaceholder')}
                                value={formData.age}
                                onChange={handleChange}
                                required
                                className="p-3 bg-slate-700 text-white rounded-xl border border-slate-600 focus:outline-none focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                name="experience"
                                placeholder={t('experiencePlaceholder')}
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                className="p-3 bg-slate-700 text-white rounded-xl border border-slate-600 focus:outline-none focus:border-indigo-500"
                            />
                            <input
                                type="text"
                                name="language"
                                placeholder={t('languagesPlaceholder')}
                                value={formData.language}
                                onChange={handleChange}
                                className="p-3 bg-slate-700 text-white rounded-xl border border-slate-600 focus:outline-none focus:border-indigo-500"
                            />

                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsAddModal(false);
                                        setEditingBarber(null);
                                        setFormData({ name: '', avatar: '', age: '', experience: '', language: '' });
                                    }}
                                    className="px-4 py-2 bg-slate-700 text-slate-300 rounded-xl hover:bg-slate-600 transition"
                                >
                                    {t('cancel')}
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition font-medium"
                                >
                                    {t('save')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            )
            }
        </div >
    )

}

export default BarberList