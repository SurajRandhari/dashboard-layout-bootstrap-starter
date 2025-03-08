import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';


const CarouselComponent = () => {
    return (
        <div>
            <Carousel className="carousel-height">
                <Carousel.Item>
                    <ExampleCarouselImage 
                        text="First slide" 
                        imageSrc="https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage 
                        text="Second slide" 
                        imageSrc="https://images.pexels.com/photos/12827259/pexels-photo-12827259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage 
                        text="Third slide" 
                        imageSrc="https://images.pexels.com/photos/6534386/pexels-photo-6534386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;