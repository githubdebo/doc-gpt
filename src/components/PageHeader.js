import React from "react";

const PageHeader = ({ heading, boldText, description }) => {
  return (
    <>
      <h1 className='mb-10 text-6xl uppercase'>
        {heading}
      </h1>
      <p className='mb-10'>
        <strong>{boldText}</strong> {description}
      </p>{" "}
    </>
  );
};

export default PageHeader;