import React from "react";
import CancelNoticeBtn from "./CancelNoticeBtn";
import "./ViewNotice.css";

const ViewNoticeModal = ({ persons, closeModal }) => {
  const cancelBtn = () => {
    const modalCard = document.getElementById("modal");
    const contain = document.getElementById("contain");
    modalCard.classList.add("none");
    contain.classList.add("none");
    closeModal(false);
  };

  React.useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        cancelBtn();
      }
    });
  });

  return (
    <div className="contain" id="contain">
      {persons.map((person) => {
        return (
          <div className="modal-card" id="modal" key={person.id}>
            <div className="img-and-name-container">
              <div className="img">
                <img
                  src={person.userImage}
                  alt={person.userName}
                  className="user-picture"
                />
              </div>

              <div className="name-time">
                <h1 className="user-name">{person.userName}</h1>
                <div className="time-stamps">
                  <p className="date-stamp">{person.date}</p>
                  <p className="date-stamp stamp-two">{person.timeStamp}</p>
                </div>
              </div>
            </div>

            <h2 className="modal-title">{person.title}</h2>
            <p className="modal-info">{person.info}</p>
            <div>
              <img
                src="https://res.cloudinary.com/clefayomide/image/upload/v1630517027/dummy-img.svg"
                alt="belle cosmetics"
                className="dummy-img"
              />
              <CancelNoticeBtn onClick={cancelBtn} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewNoticeModal;
