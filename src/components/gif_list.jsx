import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectGif }) => {
  return (
    // we use {} because we return some JS code
    <div className="gif-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={selectGif} />)}
    </div>
  );
};

export default GifList;
