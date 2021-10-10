import React from "react";
import { useHistory } from "react-router";
import { Image, Shimmer } from 'react-shimmer'

const CardPost = ({ post }) => {
  const history = useHistory();

  const { id, title, body } = post
  return (
    <div className="col-md-3 col-12 col-sm-12 mb-4">
      <div class="card p-4" onClick={() => history.push('/blogs/' + id)}>
        <div class="card-body p-0">
          <h5 class="card-title position-relative">{ title }</h5>
          <p class="card-text position-relative">
            { body.slice(0, 60) }...
          </p>
        </div>
        <div className="card-header border-0 p-0 mt-3">
          <Image
            class="card-img-top w-100"
            src="https://picsum.photos/200/150"
            alt="Card image cap"
            fallback={<Shimmer width={"100%"} height={300} />}
          />
        </div>
        <div className="card-footer p-0 py-2 d-flex">
          <p className="m-0"> <i class="far fa-clock mr-2"></i> 2 months ago</p>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
