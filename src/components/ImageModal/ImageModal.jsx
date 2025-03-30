import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  const { urls, alt_description, user, likes, description } = image;
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        X
      </button>
      <img
        src={urls.regular}
        alt={alt_description || "Image"}
        className={styles.image}
      />
      <div className={styles.info}>
        {user && <p>Author: {user.name}</p>}
        {likes && <p>Likes: {likes}</p>}
        {description && <p>Description: {description}</p>}
      </div>
    </ReactModal>
  );
}
