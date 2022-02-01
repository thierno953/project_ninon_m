import React, { useEffect } from "react";
import "./DetailAbout.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, getAboutDetail } from "../../redux/actions/aboutAction";
import Loader from "../HomePage/Loader";

const DetailAbout = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { about, loading, error } = useSelector((state) => state.aboutDetail);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAboutDetail(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  return (
    <div className="container_detail">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container_detail_info">
            <div className="content">
              <div className="content_flexis">
                <div className="content_detail">
                  <img src={about.images} alt={about.title} />
                </div>
                <h2>{about.title}</h2>
                <p>{about.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailAbout;
