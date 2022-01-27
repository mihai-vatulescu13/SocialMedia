import "./usersListModal.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const UsersListModal = ({ heading, setOpenedFollowsModal, followsUsers }) => {
  const modalRef = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpenedFollowsModal();
      }
    };
    document.addEventListener("click", outsideClick);

    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, [setOpenedFollowsModal]);

  return (
    <div className="follow-component-container">
      <div className="follows-list-and-close-btn" ref={modalRef}>
        <h4>{heading}</h4>
        <div className="follows-list">
          {followsUsers.map((user, index) => {
            return (
              <div className="user-follow-card" key={index}>
                <img
                  src={user.profilePicture}
                  alt="user follow"
                  className="follow-user-img"
                />

                <h3>
                  <Link className="user-follow-link" to={`/users/${user._id}`}>
                    {user.name}
                  </Link>
                </h3>
                <button className="unfollow_button">Unfollow</button>
              </div>
            );
          })}
        </div>
        <button
          className="close-follows-modal"
          onClick={() => setOpenedFollowsModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UsersListModal;
