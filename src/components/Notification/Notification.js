import css from './Notification.module.css';

const Notification = () => {
  return (
    <div className={css.message}>
      <p className={css.text}>YOUR REQUEST FAILED TO FIND A PHOTO</p>
      <img
        src="https://cdn.ren.tv/cache/960x540/media/img/44/08/4408338a66c9a960edd162d5d0ef96e7dbe1873d.jpg"
        alt="Cat"
      />
    </div>
  );
};
export default Notification;
