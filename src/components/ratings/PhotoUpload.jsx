import React, {useState} from 'react';
import axios from 'axios';
const PhotoUpload = () => {


  const upload_preset = 'sqayfxfn';
  const cloudName = 'diono1kwq';
  let uploadedImages = [];


 let handleFiles = (e) => {
   let files = e.target.files;
   let file = e.target.files[0]
  //  console.log(files);
   let reader = new FileReader();
   reader.readAsDataURL(files[0]);

   reader.onload = () => {
    //  console.log(e.target.result);
    axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {upload_preset, file})
    .then((response) => {
      console.log(response.data.url);
    })

   }
 }



return (
<div className="new-review-add-photo">
  <input type="file" onChange= {e => handleFiles(e)}></input>
</div>

)
}

export default PhotoUpload