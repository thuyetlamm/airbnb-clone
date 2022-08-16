function CustomPrevArrows(props) {
  const { onClick, className, style } = props;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      style={{ ...style, display: 'block' }}
    >
      <ion-icon
        name="chevron-back-outline"
        className="slick-prev-icon"
      ></ion-icon>
    </button>
  );
}

export default CustomPrevArrows;
