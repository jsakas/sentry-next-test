import React from 'react';

export const getServerSideProps = () => {
  // @ts-ignore
  undefinedServerFunction();
};

export default function Throw500() {
  return (
    <>
      This page only exists to verify our error telemetry is working by purposely throwing an error.
    </>
  );
}
