import React, {useState} from 'react';
import axios from 'axios';
const PhotoUpload = (props) => {

  const [loading, setLoading] = useState(true);
  const [uploadedImages, setUploadedImages] = useState([]);
  const upload_preset = 'sqayfxfn';
  const cloudName = 'diono1kwq';
  let base64URLs = [];


 let handleFiles = (e) => {
   let files = e.target.files;
   console.log(files);
   let reader = new FileReader();
   reader.readAsDataURL(files[0]);


   reader.onload = (e) => {

     let file = e.target.result;
     base64URLs.push(file);
   }
 }
 let uploadClick = () => {
  let photoPromises = [];
  base64URLs.forEach((file) => {
    let p = axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {upload_preset, file})
    photoPromises.push(p);
  })
  Promise.all(photoPromises).then((values) => {
    values.forEach((v) => {
      uploadedImages.push(v.data.url);
    })
    setUploadedImages(uploadedImages);
    props.setPhotos(uploadedImages);
    setLoading(false);
  }).catch(err => console.log(err));
 }

 let ImageThumbnails = () => {
   if (!loading) {
   return(
    <div className="new-review-images">
      {uploadedImages.map((imageURL, index) => {
        return (
          <div className= "new-review-image-thumbnail" key={`image${index}`}>
            <img src={imageURL} style={{"width" : `${60}px`, "height": `${60}px`, "zIndex" : 30, "objectFit": "cover"}} />
          </div>
        )
      })}
    </div>
  )
 }
}




return (
<div className="new-review-add-photo">

  <div className="new-review-choose-file">
    <input type="file" onChange= {e => handleFiles(e)}></input>
    <button className="upload-photo" onClick={uploadClick}>Upload </button>
  </div>

  <ImageThumbnails class />

</div>


)
}

export default PhotoUpload