import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Home () {
    return (
    <>
        <center><h1>Welcome to the AWS Cloud Practitioner Tutorial!</h1></center>
        <ImageSlider slides={SliderData} />
    </>
    );
}

export default Home;
