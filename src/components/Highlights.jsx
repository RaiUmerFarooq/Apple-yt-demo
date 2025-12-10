import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import gsap from "gsap"

const Highlights = () => {
  const isMbile = useMediaQuery({ query : '(max-width: 1024px)'})
  useGSAP(()=>{
    gsap.to(['.left-column', '.right-column'],{
      scrollTrigger:{
        trigger:'#highlights',
        start : isMbile? 'bottom bottom' :'top top'
        
      },
      y:0,
      opacity :1,
      stagger : 0.5,
      duration : 1,
      ease : 'power1.inOut'
    })
  },[])
  return (
    <section id="highlights">
      <h2>
        THere's a never been a better time to upgrade
      </h2>
      <h3>
        Here's what you get with the new MacBook Pro.
      </h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="laptop" />
            <p>Fly through Demanding task up to 9.8x Faster</p>
          </div>

          <div>
            <img src="/sun.png" alt="sun" />
            <p> A stunning <br />
              liquid Retina XDR <br />
              Display
            </p>
          </div>

        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>Build For <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>

          <div>
            <img src="/battery.png" alt="Battery" />
            <p>Up to <span className="green-gradient">{' '} 14 more Hours {' '}</span>  Battery Life. <span className=" text-dark-100"> {' '} (up to 24 hours in total) {' '} </span> </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Highlights