import React, { useContext, useEffect } from 'react'
import { useLocation }from 'react-router-dom'
import { fetchSelectedData } from '../../apis'
import { Store } from '../../store/index'

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store)
  const location = useLocation()
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('v');
    await fetchSelectedData(id).then((res) => {
      const item =  res.data.items.shift()
      console.log('res', res)
      setGlobalState({
        type: 'SET_SELECTED',
        payload:  {
          selected: item,
        }
      })
    })
  }
  useEffect(() => {
    setSelectedVideo()
  }, [])
  return (
    <div>

    </div>
  )
}

export default VideoDetail
