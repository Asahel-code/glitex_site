import React, {useState} from 'react'
import {animated, to as interpolate, useSprings} from 'react-spring'
import {useDrag} from 'react-use-gesture'
import styles from './css/gallery.module.scss';
import bootstrapStyles from "../../../css/bootstrap-grid.module.css";


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100
})
const from = () => ({
    x: 0,
    rot: 0,
    scale: 1.5,
    y: -1000
})
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function GalleryCards({galleryItem}) {
    const cards = galleryItem?.images ?? [];
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, set] = useSprings(cards.length, (i) => ({
        ...to(i),
        from: from(i)
    })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({
                              args: [index],
                              down,
                              movement: [mx],
                              direction: [xDir],
                              velocity
                          }) => {
        const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
        const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
        if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        set((i) => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 1.1 : 1 // Active cards lift up a bit
            return {
                x,
                rot,
                scale,
                delay: undefined,
                config: {
                    friction: 50,
                    tension: down ? 800 : isGone ? 200 : 500
                }
            }
        })
        if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10rem",
                width: "100%",
                backgroundColor: "var(--primary)"
            }}>
                <h2 style={{margin: 0}} className="display-2">
                    {galleryItem?.name}
                </h2>
                <p style={{fontSize: "1.4rem"}}>
                    (Drag the images left/right to view more)
                </p>
            </div>
            <div className={styles.root}>
                {
                    props.map(({
                                   x,
                                   y,
                                   rot,
                                   scale
                               }, i) => (
                        <animated.div key={i}
                                      style={{transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)}}>
                            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
                            <animated.div {...bind(i)} style={{
                                transform: interpolate([rot, scale], trans),
                                backgroundImage: `url(${cards[i]})`,
                            }}/>
                        </animated.div>
                    ))
                }
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "5rem",
                width: "100%",
                backgroundColor: "var(--primary)"
            }}>
                <a href={"/demo/project-name"}
                   style={{
                       backgroundColor: "white",
                       color: "black"
                   }}
                   className="btn btn--large btn--primary ">
                    Try It Out
                </a>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "3rem",
                width: "100%",
                backgroundColor: "var(--primary)"
            }}>
                <h2 style={{margin: 0}} className="display-2">
                    Gallery
                </h2>
            </div>
            <div style={{
                backgroundColor: "var(--primary)",
                paddingTop: "4rem",
                paddingBottom: "4rem",
                paddingRight: "2rem",
                paddingLeft: "2rem",
                margin: "auto"
            }} className={`${bootstrapStyles.row}`}>
                {
                    cards?.map((card, index) => <SingleGalleryCard key={index} card={card}/>)
                }
            </div>
        </>
    )
}

function SingleGalleryCard({
                               card
                           }) {
    return (
        <div style={{
            paddingBottom: "3rem",
        }}
             className={`${bootstrapStyles['col-lg-4']} ${bootstrapStyles['col-md-6']}`}>
            <div
                className={styles.container}>
                <img className={styles.container_img}
                     alt={"gallery"}
                     src={card}
                />
            </div>
        </div>
    )
}


export default GalleryCards;