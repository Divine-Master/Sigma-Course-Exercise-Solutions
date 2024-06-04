import React from 'react'

const Card = ({content}) => {
  return (
    <div>
      <div className="card border-4 border-black rounded-xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-center align-middle m-5 gap-1.5 bg-gray-800">
        <h2 className="title text-2xl md:text-3xl font-bold m-auto underline">{content.title}</h2>
        <p className="md:text-2xl font-mono m-auto">{content.body}</p>
        <div className="other flex justify-between">
          <span>{content.id}</span><span>{content.userId}</span>
        </div>
      </div>
    </div>
  )
}

export default Card