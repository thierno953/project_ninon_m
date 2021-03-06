import React, { useEffect } from "react";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import HeaderInfo from "./HeaderInfo";
import Loader from "./Loader";
import { clearErrors, getHome } from "../../redux/actions/homeAction";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { homes, loading, error } = useSelector((state) => state.homes);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getHome());
  }, [dispatch, error, alert]);

  return (
 
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            {homes &&
              homes.map((item) => <HeaderInfo key={item._id} item={item} />)}
          </>
        )}
      </>
   
  );
};

export default Header;
