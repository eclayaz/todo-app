import React from 'react';
import { connect } from 'react-redux';
import { PageTemplate } from '../components';
import ImageUploading from 'react-images-uploading';
import { userActions } from '../actions';

function ProfilePage({ user, dispatch, image }) {
  const defaultImage = 'http://placehold.it/380x500';

  const onChange = (imageList) => {
    if (imageList.length === 0) {
      return dispatch(userActions.setProfilePicture(defaultImage));
    }
    dispatch(userActions.setProfilePicture(imageList[0]['dataURL']));
  };

  return (
    <PageTemplate user={user}>
      <div className="col-sm-8">
        <div>
          <h4>{`${user.firstName} ${user.lastName}`}</h4>
          <p>Username : {user.username}</p>
        </div>
        <ImageUploading singleImage={true} onChange={onChange}>
          {({ imageList, onImageUpload }) => (
            <div className="">
              <div className="profile-image">
                <img
                  src={image ? image : defaultImage}
                  alt="http://placehold.it/380x500"
                  className="img-thumbnail"
                />
                {imageList.length === 0 ? (
                  <button
                    className="btn btn-success image-upload-btn"
                    onClick={onImageUpload}
                  >
                    Upload
                  </button>
                ) : null}
              </div>

              {imageList.map((image) => (
                <div key={image.key}>
                  <button
                    className="btn btn-secondary"
                    onClick={image.onUpdate}
                  >
                    Update
                  </button>
                  &nbsp;
                  <button className="btn btn-warning" onClick={image.onRemove}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </PageTemplate>
  );
}

const mapStateToProps = (state) => ({
  image: state.image.picture,
});

export default connect(mapStateToProps)(ProfilePage);
