import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  const carouselSlidesData = [
    {
      content:
        "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
      author: "Bane",
      source: "facebook"
    }, {
      content:
        "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
      author: "Ra's Al Ghul",
      source: "Snapchat"
    }, {
      content:
        "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
      author: "Joker",
      source: "facebook"
    }, {
      content:
        "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
      author: "Bruce Wayne",
      source: "facebook"
    }, {
      content:
        "But it's not who you are underneath... it's what you do that defines you.",
      author: "Rachel Dawes",
      source: "twitter"
    }, {
      content:
        "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
      author: "John Blake",
      source: "Google+"
    }, {
      content:
        "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
      author: "Alfred Pennyworth",
      source: "twitter"
    }
  ];

  const CarouselLeftArrow = () => {
    return (
      <a href="#" className="absolute top-[50%] block text-color-[#111] cursor-pointer opacity-75 translate-y-1/2      transition-all right-[32px]"><span><ArrowBackIosNewIcon /></span></a>
    )
  }
  const CarouselRightArrow = () => {
    return (
      <a href="#" className="absolute top-[50%] block text-color-[#111] cursor-pointer opacity-75 translate-y-1/2 transition-all left-[32px]"><span><ArrowForwardIosIcon /></span></a>
    )
  }

  const CarouselIndicator = () => {
    return (
      <li>
        <a href=""/>
      </li>
    )
  }
  const CarouselSlide = () => {
    return(
      <li>
        
      </li>
    )
  }


  const goToSlide = (index: number) => {
    return setActiveIndex(index)
  }
  const goToPrevSlide = (e: Event) => {
    e.preventDefault()
    let index: number = activeIndex
    const slides = []
    const slideLength = slides.length
    if (index < 1) {
      index = slideLength
    }
    --index
    setActiveIndex(index)
  }

  const goToNextSlide = (e: Event) => {
    e.preventDefault()
    let index: number = activeIndex
    const slides = []
    const slideLength = slides.length - 1
    if (index === slideLength) {
      index = -1
    }
    ++index
    setActiveIndex(index)
  }
  return (
    <div>
      <CarouselLeftArrow/>
      <ul>

      </ul>
    </div>
  )
}

export default App
