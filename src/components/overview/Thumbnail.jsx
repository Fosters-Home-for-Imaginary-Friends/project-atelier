import React, {useContext} from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Thumbnail = ({thumbnail, index}) => {

  const { currentStyle, currentPhoto, setCurrentPhoto, setPreviousPhoto, loading } = useContext(OverviewContext);

  if (loading) {
    return <div></div>;
  }

  if (!currentStyle.photos[0].url) {
    return <div className="thumbnail no-images"></div>
  }

  const handleThumbnailClick = (index) => {
    setPreviousPhoto(currentPhoto);
    setCurrentPhoto(index);
  }

  return (
    <li>
      <img src={thumbnail.thumbnail_url} className="thumbnail" onClick={() => handleThumbnailClick(index)}/>
    </li>
  )
}

Thumbnail.propTypes = {
  thumbnail: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default Thumbnail;