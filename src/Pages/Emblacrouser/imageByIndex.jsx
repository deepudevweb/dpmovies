import image1 from '../Emblacrouser/image/asha.jpg'
import image2 from '../Emblacrouser/image/deadpool.jpg'
import image3 from '../Emblacrouser/image/frozen.jpg'
import image4 from '../Emblacrouser/image/loki.jpg'
import image5 from '../Emblacrouser/image/venom.jpg'
import image6 from '../Emblacrouser/image/panda.jpg'
import image7 from '../Emblacrouser/image/transformer.jpg'
import image8 from '../Emblacrouser/image/lagacy.jpg'
import image9 from '../Emblacrouser/image/spider-man.jpg'
import image10 from '../Emblacrouser/image/marvels2.jpg'
import image11 from '../Emblacrouser/image/dccomics.jpg'
import image12 from '../Emblacrouser/image/dragonball.jpg'
import image13 from '../Emblacrouser/image/marvels2.jpg'


export const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
