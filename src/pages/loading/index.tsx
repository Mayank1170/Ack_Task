import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Index: React.FC = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(0);
    3000
    useEffect(() => {
        const targetPercentage = 100;
        const intervalTime = 20;
        const increment = targetPercentage / (3000 / intervalTime);
        const interval = setInterval(() => {
            setLoadingPercentage(prev => {
                if (prev < targetPercentage) {
                    return prev + increment;
                } else {
                    clearInterval(interval);
                    return targetPercentage;
                }
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[100vh] flex items-center relative">
            <Image className="absolute top-[100px] w-[80vw] h-[80%]" width={200} height={200} src="/images/backgrounds/LoadingLineSvg.svg" alt='' />
            <div className="w-full h-[100vh] flex flex-col justify-center items-center relative">
                <Image className="" width={200} height={200} src="/images/backgrounds/LoadingGridSvg.svg" alt='' />
                <div className="flex flex-col justify-center items-center text-[40px] absolute bg-[#090909] rounded-[60px] h-[110px] w-[130px]">
                    <p>{`${Math.round(loadingPercentage)}%`}</p>
                    <div className='w-[70%] rounded bg-gray-600'>
                        <div
                            className="h-[5px] bg-[#DA91EF] rounded"
                            style={{ width: `${loadingPercentage}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
