import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-emerald-500 via-lightwhite to-gray-600 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>I am a full stack Java developer with a strong understanding of both the
                 front-end and back-end development processes. I am proficient in a variety of technologies, 
                 including Java, JavaScript, HTML, CSS, and SQL. I am also familiar with a number of popular 
                 frameworks and libraries, such as Spring Boot, Hibernate, and MySQL</p>

                <br />
                <p className='text-xl'>
                I am a highly motivated and results-oriented individual with a strong work ethic.
                 I am also a team player and I am able to work effectively with others to achieve common goals.
                  I am eager to learn new technologies and to contribute to the success of your team.
                </p>

            </div>
        </div>
    )
}

export default About