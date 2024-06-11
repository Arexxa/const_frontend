import React from "react";
import { useNavigate } from "react-router-dom";

function UnauthorizedPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step in history
  };

  return (
    <div className="flex flex-col items-center h-[100vh]">
      <div className="flex flex-col items-center justify-center mt-10 h-full gap-10">
        <div className="text-6xl">403</div>
        <div className="text-4xl">Unauthorized Access!</div>
        <button
          onClick={goBack}
          className="px-6 py-3 rounded-md text-white hover:shadow-xl bg-primary"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
