import React from 'react'

const Team = (props) => {
  return (
      <>
          
   
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
        <div className="h-full flex items-center bg-primary text-white border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex-grow">
                      <h2 className=" title-font font-medium">{ props.name }</h2>
                      <p className="">{ props.role }</p>
          </div>
        </div>
      </div>
      </>
  )
}

export default Team