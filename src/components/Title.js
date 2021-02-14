/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import '../styles/Title.css';

const Title = () => {
  return (
    <div className="Title">
      <h1 className="Title_title">{`Wet 'n' Windy`}</h1>
      <p className="Title_subtitle">A weather app for the UK</p>
    </div>
  );
};

export default Title;
