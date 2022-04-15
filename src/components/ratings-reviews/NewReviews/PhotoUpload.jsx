import React, {useState} from 'react';
import axios from 'axios';
const PhotoUpload = (props) => {

  const [loading, setLoading] = useState(true);
  const [uploadedImages, setUploadedImages] = useState([]);
  const upload_preset = 'sqayfxfn';
  const cloudName = 'diono1kwq';
  let base64URLs = [];

  //this function allows the user to select a photo from local and pushes its base64 string to an array
 let handleFiles = (e) => {
   let files = e.target.files;
   let reader = new FileReader();
   reader.readAsDataURL(files[0]);
   reader.onload = (e) => {

     let file = e.target.result;
     if (base64URLs.length < 5) {
       base64URLs.push(file);
     } else {
       alert('You can select a maximum of five images.');
     }
   }
 }
//this function takes all selected photos and sends them to cloudinary to get a readable URL in return
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
      {uploadedImages.map((imageURL, index) => { //maps all photos selected by the user into viewable thumbnails
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
  <ImageThumbnails />
</div>
)
}

export default PhotoUpload;