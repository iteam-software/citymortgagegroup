// Tailwind
import "./src/css/global.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faTimes,
  faChevronUp,
  faBars,
  faPhone,
  faSearch,
  faFax,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faTimes,
  faChevronUp,
  faBars,
  faPhone,
  faFax,
  faQuoteLeft,
  faFacebookF,
  faTwitter,
  faInstagram,
  faSearch
  );
  export const registerServiceWorker = () => true
  