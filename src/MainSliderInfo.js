
// big screen images
import bigAutumn from './assets/up-to-1900px/autumn.webp'
import bigSpring from './assets/up-to-1900px/spring.webp'
import bigSummer from './assets/up-to-1900px/summer.webp'
import bigWinter from './assets/up-to-1900px/winter.webp'

// medium screen images
import mediumAutumn from './assets/up-to-1200px/autumn.webp'
import mediumSpring from './assets/up-to-1200px/spring.webp'
import mediumSummer from './assets/up-to-1200px/summer.webp'
import mediumWinter from './assets/up-to-1200px/winter.webp'

// small images for thumnail
import smallAutumn from './assets/under-300px/autumn.webp'
import smallSpring from './assets/under-300px/spring.webp'
import smallSummer from './assets/under-300px/summer.webp'
import smallWinter from './assets/under-300px/winter.webp'






const Seasons =  [
    {
        id: 0,
        title: "Spring",
        bigScreenImg: bigSpring,
        mediumScreenImg: mediumSpring,
        smallImage: smallSpring,
        intro: "Spring flight is radically different from winter, and we can cover more time and altitude because at this time warm air masses are formed which helps us overcome higher altitude."
    },
    {
        id: 1,
        title: "Summer",
        bigScreenImg: bigSummer,
        mediumScreenImg: mediumSummer,
        smallImage: smallSummer,
        intro: "Summer flight is radically different from winter, and we can cover more time and altitude because at this time warm air masses are formed which helps us overcome higher altitude."
    },
    {
        id: 2,
        title: "Autumn",
        bigScreenImg: bigAutumn,
        mediumScreenImg: mediumAutumn,
        smallImage: smallAutumn,
        intro: "During the winter, the flight is carried out by climbing to a height and is completed only by descending, because at this time the cold air masses do not allow it to fly higher."
    },
    {
        id: 3,
        title: "Winter",
        bigScreenImg: bigWinter,
        mediumScreenImg: mediumWinter,
        smallImage: smallWinter,
        intro: "During the winter, the flight is carried out by climbing to a height and is completed only by descending, because at this time the cold air masses do not allow it to fly higher."
    }
]

export default Seasons