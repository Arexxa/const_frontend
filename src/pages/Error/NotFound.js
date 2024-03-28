import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <div className="flex flex-col items-center justify-center mt-10 h-full gap-10">
        <div className="text-6xl">404</div>
        <div className="text-4xl">Page Not Found!</div>
        <a
          href="/"
          className="px-6 py-3 rounded-md text-white hover:shadow-xl bg-primary"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
