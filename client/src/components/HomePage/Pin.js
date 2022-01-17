import React, { useEffect, useState } from "react";
import "./Pin.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getPin } from "../../redux/actions/pinAction";
import { useAlert } from "react-alert";
import PinCard from "./PinCard";
import Loader from "./Loader";
import Pagination from "react-js-pagination";

const Pin = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { pins, loading, error, pinsCount, resultPerPage } = useSelector(
    (state) => state.pins
  );

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getPin(currentPage));
  }, [dispatch, error, alert, currentPage]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="home">
            <div className="home_pin">
              {pins && pins.map((pin) => <PinCard key={pin._id} pin={pin} />)}
            </div>
          </div>

          <div className="container">
            {resultPerPage < pinsCount && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={pinsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Pin;
