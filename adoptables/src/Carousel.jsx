import { Component } from "react";

// class components cannont use hooks technically but they can use the useQuery hook from react-query through the useQueryClient hook from react-query
class Carousel extends Component {
    state = {
        active: 0,
    }

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    };

    handleIndexClick = (e) => {
        this.setState({
            active: +e.target.dataset.index,
        });
    };

    render () {
        const { active } = this.state;
        const { images } = this.props;   

        return (
            <div className='carousel'>
                <img src={images[active]} alt="animal" />
                <div className='carousel-smaller'>
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            onClick={this.handleIndexClick}
                            data-index={index}
                            key={photo}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        );
    }
} // end of Carousel class component that takes in images and returns a div with a img tag and a div with a img tag

export default Carousel;