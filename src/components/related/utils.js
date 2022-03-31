const scrollCarousel = (ref, distance) => {
  ref.current.scrollBy({
    left: distance,
    behavior: "smooth"
  });
};

export default scrollCarousel;