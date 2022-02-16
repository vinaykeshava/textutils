import React from 'react'
// import Navbar from './Navbar';

export default function About(props) {

    const toggle11 = {
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid white',
    }

    const toggle12 = {
        color: "black",
        backgroundColor: "white",
    }
    // console.log("about props " + props.mode);
    // const [toggle, setToggle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // });
    // const [btntext, setBtnText] = useState('Dark');

    // const togglechange = () => {
    //     if (props.mode === "white") {
    //         setToggle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "2px solid white"
    //         })
    //         setBtnText("Light");
    //     }
    //     else {
    //         setToggle({
    //             color: "black",
    //             backgroundColor: "white",
    //         })
    //         setBtnText("Dark");
    //     }
    // }
    return (
        <>
            <div className="container my-2" style={props.mode === 'dark' ? toggle11 : toggle12}>
                <h2>About Us</h2>
                <div className="accordion py-3" id="accordionExample" >
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.mode === 'dark' ? toggle11 : toggle12}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div className="accordion-body" style={props.mode === 'dark' ? toggle11 : toggle12}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item " >
                        <h2 className="accordion-header" id="headingTwo" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.mode === 'dark' ? toggle11 : toggle12}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                            <div className="accordion-body" style={props.mode === 'dark' ? toggle11 : toggle12}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.mode === 'dark' ? toggle11 : toggle12}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={props.mode === 'dark' ? toggle11 : toggle12}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button type="button" onClick={togglechange} className="btn btn-dark my-3" style={toggle}>{btntext}</button> */}

            </div>
        </>
    )
}
