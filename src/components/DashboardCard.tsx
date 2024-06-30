import React from 'react'
import Image from 'next/image'
const DashboardCard: React.FC = () => {
    return (
        <div>
            <Image className='w-[70vw] h-full' width={200} height={200} src="/images/backgrounds/DashboardCard.svg" alt='' />
        </div>
    )
}

export default DashboardCard
