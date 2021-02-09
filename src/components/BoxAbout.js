import React from 'react'


const BoxAbout = ({ data }) => {
    return (
        <>
            <div className='team-section'>
                <div className='team-container'>
                    <div className='team-title'>
                        <h1>Nosso Time</h1>
                    </div>
                    <div className='team-grid'>
                        {data.map((member) => {
                            return (
                                <div className='team-member'>
                                    <div className='member-img-box'>
                                        <img src={member.img} className="memberImg" alt="text" />
                                    </div>
                                    <div className='member-name'>{member.name}</div>
                                    <div className='member-job'>{member.job}</div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxAbout