import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getPin } from "../../redux/actions/pinAction";
import { useAlert } from "react-alert";
import Loader from "./Loader";
import Pagination from "react-js-pagination";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>

          <Section id="blogs">
         
            <div className="blogs">
              {pins &&
                pins.map((pin) => {
                  return (
                    <div className="blog" key={pin._id}>
                       <Link to={`/pin/${pin._id}`}>
                      <img src={pin.images[0].url} alt={pin.title} />
                      <div className="data">
                        <h6>{pin.title}</h6>
                        <h4>{pin.property_address}</h4>
                        <p>{pin.description}</p>
                      </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </Section>

          <Section>
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
          </Section>
        </>
      )}
    </div>
  );
};

const Section = styled.section`
  .container {
    max-width: 1300px;
    margin: auto;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: auto;

    gap: 1rem;

    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 50px;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      img {
        width: 100%;
        object-fit: cover;
        align-self: center;
      }
      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
     
      }
    }
  }

  .paginationBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vmax;
  }

  .pagination {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0px 10px;
  }

  .page-item {
    background-color: rgba(0, 0, 0, 0.85);
    list-style: none;

    padding: 0.3vmax 1.3vmax;
    transition: all 0.3s;
    cursor: pointer;
  }
  .page-item:first-child {
    border-radius: 5px 0 0 5px;
  }

  .page-item:last-child {
    border-radius: 0 5px 5px 0;
  }
  .page-link {
    text-decoration: none;
    font: 500 0.7vmax "Roboto";
    color: #ff4820;
    transition: all 0.3s;
    font-size: 17px;
    color: #fff;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      grid-template-columns: 1fr;
      margin: 0px 10px;
    }
  }
`;

export default Pin;
