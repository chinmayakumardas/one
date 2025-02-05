// /components/Loader.js
const Loader = () => {
  return (
    <>
      <style jsx>{`
        .pulse {
          width: 22.4px;
          height: 22.4px;
          border-radius: 50%;
          background:rgb(204, 221, 118);
          box-shadow: 0 0 0 0 rgba(172, 173, 84, 0.5);
          animation: pulse-kefe91md 1.5s infinite linear;
          position: relative;
        }

        .pulse:before,
        .pulse:after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: 0 0 0 0 rgba(217, 206, 133, 0.5);
          animation: inherit;
          animation-delay: -0.5s;
        }

        .pulse:after {
          animation-delay: -1s;
        }

        @keyframes pulse-kefe91md {
          100% {
            box-shadow: 0 0 0 44.8px #0000;
          }
        }
      `}</style>
      <div className="pulse"></div>
    </>
  );
};

export default Loader;
