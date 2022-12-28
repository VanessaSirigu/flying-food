import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-regular-svg-icons'
import { faStar as farFaStar, faClock } from '@fortawesome/free-regular-svg-icons'
import { faStar as fasFaStar, faHamburger } from '@fortawesome/free-solid-svg-icons'

export type IconName = keyof typeof iconMap

export const iconMap = {
  fullStar: fasFaStar,
  halfStar: faStarHalfAlt,
  emptyStar: farFaStar,
  burger: faHamburger,
  clock: faClock,
  facebook: faFacebookF,
  instagram: faInstagram,
  googlePlus: faGooglePlusG,
  linkedin: faLinkedinIn,
  twitter: faTwitter
}
