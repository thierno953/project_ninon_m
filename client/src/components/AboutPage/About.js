import React, { useEffect } from 'react';
import './About.css';
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAbout } from '../../redux/actions/aboutAction';
import AboutInfo from './AboutInfo';
import Loader from '../HomePage/Loader';

const About = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { abouts, loading, error } = useSelector((state) => state.abouts);

    useEffect(() => { 
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }

    
        dispatch(getAbout());
      }, [dispatch, error, alert]);

  return (
    <div className="about"> 
    {loading ? (
      <Loader />
    ) : (
      <>
        <div className="about_1">
          {abouts &&
            abouts.map((about) => (
              <AboutInfo key={about._id} about={about} />
            ))}
        </div>
      </>
    )}
  </div>
  )
};

export default About;
