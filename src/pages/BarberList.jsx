import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import BarberCard from '../components/BarberCard'
import BookingModal from '../components/BookingModal'

function BarberList() {
    const { barbers } = useApp();
    const [selectedBarber, setSelectedBarber] = useState(null);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                {barbers.map((barber) => {
                    return <BarberCard barber={barber}
                        onSelect={() => setSelectedBarber(barber)} key={barber.id} />
                })}
            </div>
            {selectedBarber && (
                <BookingModal
                    barber={selectedBarber}
                    onClose={() => setSelectedBarber(null)}
                />
            )}
        </div>
    )

}

export default BarberList