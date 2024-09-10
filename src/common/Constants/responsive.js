export const responsive = {
  desktop: {
    breakpoint: { max: 1550, min: 1415 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1415, min: 1120 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1120, min: 430 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  smallerThanMobile: {
    breakpoint: { max: 750, min: 430 },
    items: 2,
    slidesToSlide: 1,
  },
};
