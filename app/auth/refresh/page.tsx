'use client';
import { useEffect } from 'react';

const AuthRefreshPage = () => {
  useEffect(() => {
    window.location.href = '/';
  }, []);
  return (
    <section>
      <div className="max-w-[1200px] mx-4 md:mx-8 xl:mx-auto">
        <div className="w-full h-full text-center flex justify-center items-center">
          <p>Redirecting...</p>
        </div>
      </div>
    </section>
  );
};

export default AuthRefreshPage;
