import './Home.css'
import { TypeAnimation } from 'react-type-animation'

function Home(props){
    return (
        <div className='home_container'>
            <div className="main">
                <h1>
                    <TypeAnimation
                        sequence={[
                            'Coming soon.',
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={false}
                        repeat={0}
                        speed={70}
                    />
                </h1>
                <div>
                    <TypeAnimation
                        sequence={[
                            500,
                            'Analyze, compose, and share complex AI models.',
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        cursor={false}
                        repeat={Infinity}
                        speed={70}
                    />
                </div>
                <br/>
                <div>
                    <TypeAnimation
                        sequence={[
                            2500,
                            'Contact team@agrippa.build',
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        cursor={false}
                        repeat={Infinity}
                        speed={70}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;