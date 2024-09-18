import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center gap-10 my-20">
    <div className="w-1 h-20 bg-neutral-950 dark:bg-white rounded-md animate-infinite"></div>
    <div className="w-1 h-20 bg-neutral-950 dark:bg-white mt-12 rounded-md animate-infinite second-line"></div>
  </div>  )
}

export default Loader