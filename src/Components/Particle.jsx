import { useCallback } from "react";
import {Particles} from "react-particles"; 
import { loadFull } from "tsparticles"; 


const Particle = () => {

const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div className="absolute w-full h-full top-0 left-0 z-10">
        <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}   
            options={{
             
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    grab:{
                      distance:500,
                      link_linked:{
                        opacity:0.5
                    }

                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                 
                    color: {
                        value: "#0095B4",
                    },
                    links: {
                        color: "#0095B4",
                        distance: 200,
                        enable: true,
                        opacity: 0.5, 
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {min: 1, max: 5 },
                    },
                    
                },
                detectRetina: true,
            }}
        />
    </div>
  )
}

export default Particle