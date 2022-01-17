import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import "./Detail.css";
import Loader from "../HomePage/Loader";
import { clearErrors, getPinDetails } from "../../redux/actions/pinAction";

const Detail = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { pin, loading, error } = useSelector((state) => state.pinDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getPinDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="pinDetails">
              <div className="pin_flex">
               <div className="pin_content">
               {pin.images &&
              pin.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={i}
                  src={item.url}
                  alt={item.title}
                />
              ))}
               </div>
               <div className="pin_info">
               <div className="pin_info_1">
                   <h2>Information Générale sur le bien</h2>
                  <h3>{pin.title}</h3>
                   <p>{pin.description}</p>
                  </div>
                  <hr className="hr"/>
                  <div className="pin_info_2">
                   <h2>Information sur l'occupation du bien</h2>
                   <p><span>Collectif Occupant :</span> {pin.occupation}</p>
                   <p><span>Durée de l'occupation temporaire :</span> {pin.term}</p>
                   <p><span>Date d'entrée dans le bien :</span> {pin.date_of_entry}</p>
                   <p><span>Date de Sortie :</span> {pin.release_date}</p>
                   <p><span>Nombre d'occupants :</span> {pin.number_occupants}</p>
                  </div>
               </div>
              </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
