export const PASSWORD_MATCHER = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"; //at least one uppercase, one lowercase, one number and minimum 8 letters
export const URL_MATCHER =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;
export const FACEBOOK_URL_MATCHER =
  /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
export const INSTAGRAM_URL_MATCHER =
  /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;
export const TWITTER_URL_MATCHER =
  /http(?:s)?:\/\/(?:www\.)?twitter|x\.com\/([a-zA-Z0-9_]+)/;
export const AMAZON_WISHLIST_MATCHER =
  /^(https?:\/\/)?(www\.)?amazon\.com\/hz\/wishlist\/[a-zA-Z0-9_-]+\/?/;