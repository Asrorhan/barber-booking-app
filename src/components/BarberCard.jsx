import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useApp } from '../context/AppContext';

function BarberCard({ barber, onSelect, onEdit }) {
    const { t } = useLanguage();
    const { deleteBarber, role } = useApp();

    return (
        <div className='bg-slate-800 p-5 rounded-2xl 
        border border-slate-700 shadow-lg 
        hover:-translate-y-1 transition-transform duration-200'>
            <header className='flex items-center gap-4'>
                <img src={barber.avatar} alt={barber.name}
                    className='w-16 h-16 rounded-full object-cover
                    border-2 border-indigo-500' />
                <h3 className='text-lg font-bold text-white'>{barber.name}</h3>
                <span className='text-yellow-400 font-semibold flex items-center gap-1'>{barber.rating}</span>
            </header>
            <div className='my-4 flex flex-col gap-2 text-slate-300 text-sm'>
                <p>{barber.age} {t('age')}</p>
                <p>{barber.experience} {t('experience')}</p>
                <div className='flex flex-wrap gap-1 mt-2'>
                    {barber.languages && barber.languages.map((language) => {
                        return <span key={language}
                            className='bg-indigo-900/50 text-indigo-300 text-xs 
                        px-2 py-0.5 rounded-full border border-indigo-700/50'>
                            {language}
                        </span>
                    })}
                </div>
            </div>

            <footer className='flex flex-col gap-3 mt-4 pt-3 border-t border-slate-700'>

                <div className='flex gap-3'>
                    <a href={`tel:${barber.phone}`} className='flex-1 text-center
                     bg-slate-700 text-white py-2 rounded-xl text-sm font-medium
                      hover:bg-slate-600 transition'>{t('callNow')}</a>
                    <button className='flex-1 bg-indigo-600 text-white 
                    py-2 rounded-xl text-sm font-medium
                     hover:bg-indigo-500 transition' onClick={onSelect}>{t('bookNow')}</button>
                </div>

                {role === "admin" && (
                    <div className="flex gap-2 pt-2 border-t border-slate-700/50">
                        <button
                            onClick={() => onEdit(barber)}
                            className="flex-1 px-3 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl hover:bg-amber-500 hover:text-white transition text-xs font-medium text-center"
                        >
                            {t('edit') || 'Edit'}
                        </button>
                        <button
                            onClick={() => deleteBarber(barber.id)}
                            className="flex-1 px-3 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition text-xs font-medium text-center"
                        >
                            {t('delete') || 'Delete'}
                        </button>
                    </div>
                )}
            </footer>
        </div>
    )
}

export default BarberCard