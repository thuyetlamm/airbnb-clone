function CustomNextArrows(props) {
  const { onClick, className, style } = props;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      data-role="none"
      style={{ ...style, display: 'block' }}
    >
      <ion-icon
        name="chevron-forward-outline"
        className="slick-next-icon"
      ></ion-icon>
    </button>
  );
}

export default CustomNextArrows;
