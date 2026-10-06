import React from 'react'
import { useApp } from '../context/AppContext'
import { useLanguage } from '../context/LanguageContext'
import BarberCard from '../components/BarberCard'

function BarberList() {
    const { barbers } = useApp();
    const { t } = useLanguage();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
            {barbers.map((barber) => {
                return <BarberCard barber={barber} key={barber.id} />
            })}
        </div>
    )
}

export default BarberList