'use client'
import React, { useState } from 'react'
import AnimatedText from '../common/AnimatedText';
import Image from 'next/image';
import CustomLightbox from '../gallery/CustomeLightBox';

const ImageGallery = () => {

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const images = [
        '/assets/img/gallery/1.png',
        '/assets/img/gallery/2.png',
        '/assets/img/gallery/3.png',
        '/assets/img/gallery/4.png',
        '/assets/img/gallery/5.png',
        '/assets/img/gallery/6.png',
        '/assets/img/gallery/7.png',
        '/assets/img/gallery/8.png',
        '/assets/img/gallery/9.png',
        '/assets/img/gallery/10.png',
        '/assets/img/gallery/12.png',
        '/assets/img/gallery/projectImages.webp',
    ];


    return (
        <>
            <section id='image-gallery'>
                <div className="section-title text-center mb-2 breadcrumb-title">
                    <h2 className="splt-txt wow" style={{ color: '#ffcd1f' }}>
                        <AnimatedText text="gallery" /> <br />
                    </h2>
                </div>
                <div className="container">
                    <div className="row text-center">
                        <h3 className="splt-txt wow fs-2" style={{ color: '#ffcd1f' }}>
                            <AnimatedText text=" image gallery" />
                        </h3>
                    </div>
                    <div className="row">
                        {images.map((image, index) => (
                            <div key={index} className="col-lg-4 mt-3" onClick={() => openLightbox(0)}>
                                <Image
                                    src={image}
                                    alt="img"
                                    width={485}
                                    height={492}
                                    className="wow fadeInLeft"
                                    data-wow-delay=".2s"
                                    style={{
                                        height: 'auto',
                                        width: '100%',
                                        maxHeight: '350px'
                                    }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Render CustomLightbox */}
                <CustomLightbox
                    isOpen={isLightboxOpen}
                    onClose={closeLightbox}
                    images={images}
                    initialIndex={currentImageIndex}
                />
            </section>

        </>
    )
}

export default ImageGallery