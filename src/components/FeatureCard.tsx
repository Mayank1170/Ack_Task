import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    imageUrl: string;
    imagePosition: 'top' | 'bottom';
    customWidthClass?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl, imagePosition, customWidthClass }) => {
    return (
        <div className={` bg-[#171717] text-white flex flex-col justify-between shadow-lg rounded-[24px] ${customWidthClass}`}>
            {imagePosition === 'top' && (
                // <img src={imageUrl} alt={title} className="mb-4 rounded-md" />
                <div className='p-[32px] flex justify-center items-center'>
                    <div className='w-full h-[204px] bg-[#2D2B2B] rounded-tl-[18px] rounded-br-[18px]' />
                </div>
            )}
            <div className='px-[32px] pb-[32px]'>
                <h3 className="text-[20px] font-bold mb-2 mt-[18px]">{title}</h3>
                <p className='text-[16px] text-[#E1E1E199]'>{description}</p>
            </div>
            {imagePosition === 'bottom' && (
                <div className='flex justify-end items-end'>
                    <div className='w-[80%] h-[204px] bg-[#2D2B2B] rounded-tl-[18px] rounded-br-[18px]' />
                </div>
            )}
        </div>
    );
}

export default FeatureCard;
