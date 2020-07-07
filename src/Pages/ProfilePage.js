import React, { useState } from 'react';
import { PageTemplate } from '../components';
import ImageUploading from 'react-images-uploading';

function ProfilePage({ user }) {
  const defaultImage = 'http://placehold.it/380x500';
  const [image, setImage] = useState(defaultImage);
  const onChange = (imageList) => {
    if (imageList.length === 0) {
      return setImage(defaultImage);
    }
    setImage(imageList[0]['dataURL']);
  };

  return (
    <PageTemplate user={user}>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <ImageUploading singleImage={true} onChange={onChange}>
            {({ imageList, onImageUpload }) => (
              <div className="row">
                <img
                  src={image}
                  alt="http://placehold.it/380x500"
                  className="img-thumbnail"
                />
                {imageList.length === 0 ? (
                  <div>
                    <button className="btn btn-success" onClick={onImageUpload}>
                      Upload profile image
                    </button>
                  </div>
                ) : null}

                {imageList.map((image) => (
                  <div key={image.key} className="image-item">
                    <div className="image-item__btn-wrapper">
                      <button
                        className="btn btn-secondary"
                        onClick={image.onUpdate}
                      >
                        Update
                      </button>
                      &nbsp;
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
        </div>
        <div className="col-sm-6 col-md-8">
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <p>Username : {user.username}</p>
        </div>
      </div>
    </PageTemplate>
  );
}

export { ProfilePage };
