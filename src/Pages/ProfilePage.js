import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../components';
import ImageUploading from 'react-images-uploading';

function ProfilePage() {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div style={{ display: 'flex' }}>
      <SideBar user={user} />
      <div className="container">
        <h3>Profile page</h3>
        <ImageUploading singleImage={true}>
          {({ imageList, onImageUpload }) => (
            <div className="row">
              {imageList.length === 0 ? (
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      'images/IMG_20180602_185835_048.jpg'
                    }
                    className="img-thumbnail"
                  />
                  <button className="btn btn-success" onClick={onImageUpload}>
                    Upload profile image
                  </button>
                </div>
              ) : null}

              {imageList.map((image) => (
                <div key={image.key} className="image-item">
                  <img src={image.dataURL} alt="" className="img-thumbnail" />
                  <div className="image-item__btn-wrapper">
                    <button
                      className="btn btn-secondary"
                      onClick={image.onUpdate}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={image.onRemove}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <ul className="list-group">
          <li className="list-group-item">Username : {user.username}</li>
          <li className="list-group-item">First Name : {user.firstName}</li>
          <li className="list-group-item">Last Name : {user.lastName}</li>
        </ul>
      </div>
    </div>
  );
}

export { ProfilePage };
