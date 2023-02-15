import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
        "In my previous roles, I have had the opportunity to work on some amazing projects, 
        including building a full-stack web application that allows users to order food deliver
        y from multiple restaurants, and creating a housing listing and searching application. 
        I am particularly skilled in Java, Python, SQL, and JavaScript, and proficient in using 
        various frameworks such as React, Node.js, and Redux.
</p>
            <br />
            <p> "I don't know enough about this to have an opinion"
            </p>
        </div>
    </div> 
  )
}

export default About 