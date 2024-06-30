import React from 'react'

const About:React.FC = () => {
  return (
    <div className='mt-[170px]'>
        <p className="flex flex-col justify-between items-center">
                <span className="flex justify-between items-center text-center text-gray-100 text-[56px] font-medium">
                Things users love
                </span>
                <span
                  className="text-[56px] mt-[-20px] font-medium"
                  style={{
                    background:
                      "linear-gradient(180deg, #F1F1EF 30%, #000000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  about X-ACK
                </span>
              </p>
      
    </div>
  )
}

export default About
