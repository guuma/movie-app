import React, { useContext } from 'react';
// import { useLocation } from 'react-router-dom';
// import { fetchSelectedData } from '../../apis';
import { Store } from '../../store/index';
import VideoPlay from '../VideoPlay/VideoPlay';
import Style from './VideoDetail.module.scss';
import Linkfy from 'react-linkify';

const VideoDetail = () => {
  const { globalState } = useContext(Store);
  // const location = useLocation();
  // const setSelectedVideo = async () => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const id = searchParams.get('v');
  //   await fetchSelectedData(id).then((res) => {
  //     const item = res.data.items.shift();
  //     console.log('res', res);
  //     setGlobalState({
  //       type: 'SET_SELECTED',
  //       payload: {
  //         selected: item,
  //       },
  //     });
  //   });
  // };
  // useEffect(() => {
  //   setSelectedVideo();
  // }, []);
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkfy>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkfy>
    </div>
  ) : (
    <span>No Data！！</span>
  );
};

export default VideoDetail;
