import styles from './buttonLink.module.css';

type ButtonLinkProps = {
    children: React.ReactNode;
    onClickHandler: () => void
}

const ButtonLink = ({ children, onClickHandler}: ButtonLinkProps) => {
  return (
    <div className={styles['button-link']} onClick={onClickHandler}>{children}</div>
  );
};

export default ButtonLink;