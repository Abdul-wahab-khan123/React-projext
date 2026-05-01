import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState([1]);
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserdata(response.data)
  }
  useEffect(function(){
    getData()
  },[index])
  let prinetData = <h3 className='text-gray-300 text-base'>No user Available...</h3>
  if(userdata.length>0){
    prinetData = userdata.map(function(elem, idx){
      return <div>
        <a href={elem.url} target="_blank">
          <div className='w-55 h-50'>
            <img className="w-full h-full object-cover rounded-xl" src={elem.download_url} alt="img" />
          </div>
          <h2 className='text-lg font-medium text-white'>{elem.author}</h2>
        </a>
      </div>
    })
  }
  return (
    <div className="bg-black text-white h-lvh p-8">
      <div className="fixed left-2 top-2">
        <h6 className='bg-orange-600 text-white font-medium text-xl h-10 w-10 rounded-xl flex justify-center items-center'>
          {index}
        </h6>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        {prinetData}
      </div>
      <div className='flex justify-center items-center gap-4 mt-10'>
        <button onClick={()=>{ if(index>1){ setIndex(index - 1)} }} className="bg-orange-600 active:scale-95 text-white font-medium py-2 px-8 
        rounded cursor-pointer">
          Prev
        </button>
        <button onClick={()=>{ setIndex(index + 1) }} className="bg-orange-600 active:scale-95 text-white font-medium py-2 px-8 
        rounded cursor-pointer">
          Next
        </button>
      </div>
    </div>
  )
}

export default App
