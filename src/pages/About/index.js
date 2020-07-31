import React from 'react';
import './About.css';

import Title from '../../components/Title';
import ImageFade from '../../components/ImageFade';

const About  = (props) => {


    return (
        <div className="About">
            <Title textTransform='uppercase' fontSize = '38px' margin='50px 0'>
                Sobre nosotros
            </Title>

            <div className="content">
                <div className="image-wrapper">
                    <ImageFade 
                        timeInterval={8}
                        width='100%'
                        height='100%'
                        backgroundSize='cover'
                        backgroundColor='whitesmoke'
                        slides={[
                            { id: 1, url: '/about1.jpg' },
                            { id: 2, url: '/about2.jpg' },
                            // { id: 3, url: '/img/ImageFade/img3.jpg' },
                            // { id: 4, url: '/img/ImageFade/img4.jpg' }
                        ]}
                    />
                </div>

                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin diam lectus, non venenatis ligula lacinia vel. Pellentesque auctor, sem ac ornare sodales, urna ipsum interdum nulla, eget mattis purus enim quis enim. Integer blandit ultrices dolor ut sollicitudin. Morbi dictum mattis cursus. Fusce sodales imperdiet iaculis. Cras elit sapien, tristique at elit nec, vehicula laoreet turpis. Fusce a lacus dignissim, ullamcorper neque sed, accumsan neque. 
                    <br /> <br /> <br />        
                    Aenean ipsum neque, molestie sit amet neque sed, auctor interdum elit. Aliquam fermentum, metus vitae interdum scelerisque, leo sem commodo lacus, vitae dignissim eros massa nec mi. Sed ultricies at mi id imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum fringilla orci, eu ultrices sapien lobortis ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean pretium felis odio. 
                </div>
            </div>
        </div>
    );
}

export default About;   