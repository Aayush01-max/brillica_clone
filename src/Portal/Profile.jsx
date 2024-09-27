import style from "./profile.module.css";
import Portal from "./portal";
function Profile({ show }) {
  return (
    <>
      <Portal show={show}>
        <div className={style.box}>
          <h1>A</h1>
          <h2>Aayush</h2>
          <p>iamaayush2@gmail.com</p>
          <p>7738217382</p>
        </div>
        <div className={style.box2}>
          <li>
            <i class="fa-regular fa-comments"></i> <span>Chat Support</span>
          </li>
          <li>
            <i class="fa-solid fa-clipboard-question"></i>
            <span>Help Desk</span>
          </li>
          <li>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Logout</span>
          </li>
        </div>
      </Portal>
    </>
  );
}

export default Profile;
