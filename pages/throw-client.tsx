import React, { useEffect } from 'react';

export default function Throw500() {
  useEffect(() => {
    // @ts-ignore
    undefinedClientFunction();
  }, []);

  return (
    <>
      This page only exists to verify our error telemetry is working by purposely throwing an error.
    </>
  );
}
