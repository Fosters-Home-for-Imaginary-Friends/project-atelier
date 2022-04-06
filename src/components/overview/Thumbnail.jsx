import React, {useContext} from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Thumbnail = ({thumbnail}) => {

  const { currentStyle, loading } = useContext(OverviewContext);

  if (loading) {
    return <div></div>;
  }

  if (!currentStyle.photos[0].url) {
    return <div className="thumbnail no-images"></div>
  }

  return (
    <li>
      <img src={thumbnail.thumbnail_url} className="thumbnail"/>
    </li>
  )
}

Thumbnail.propTypes = {
  thumbnail: PropTypes.object.isRequired
}

export default Thumbnail;