import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "../../styles/Bootstrap.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const SlideShow=()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
      
            <Carousel.Item key={1} className={styles.itemP} interval={4000}  >
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/147103-MwFq1R7jphZT.jpg" alt="slides" />
            <Carousel.Caption className={styles.caption}>
                <h3>Image 1</h3>
                <p>This is Image 1</p>
                <button className="btn btn-danger">Visit Docs</button>
            </Carousel.Caption>

            </Carousel.Item>
            
            <Carousel.Item key={2} className={styles.itemP} interval={4000}>
            <img src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/145064-kH9vbOEitIhl.jpg" alt="slides" />
            <Carousel.Caption className={styles.caption}>
                <h3>Image 2</h3>
                <p>This is Image 2</p>
                <button className="btn btn-danger">Visit Docs</button>
            </Carousel.Caption>
            </Carousel.Item>
     
        </Carousel>
    )
}

