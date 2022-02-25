import { bgImages } from '../../static/images/backgrounds-compressed';

export function get() {
  const randomImageIndex = Math.floor(bgImages.length * Math.random())
  return {
    status: 200,
    body: {
      bgImage: bgImages[randomImageIndex]
    }
  }
}
