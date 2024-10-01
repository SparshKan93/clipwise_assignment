import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
    const [activeDot, setActiveDot] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleArrowClick = (direction) => {
        setIsVisible(false);

        setTimeout(() => {
            setIsVisible(true);

            if (direction === 'left') {
                setActiveDot(activeDot === 0 ? 0 : activeDot - 1);
            } else {
                setActiveDot(activeDot === 0 ? 0 : activeDot + 1);
            }
        }, 500);
    };
    const handleClick = () => {
        navigate('/thanks'); 
      };

    return (
        <div style={{ alignContent: "center" }}>
            <div
                style={{
                    height: '800px',
                    backgroundImage: 'url(./Frame.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                <nav
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '1%',
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        zIndex: 100,
                    }}
                >
                    <div style={{ paddingLeft: '3%' }}>
                        <img
                            src="./poprockcrystal.png"
                            alt="Pop Rock Crystal Logo"
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '30px', fontSize: '18px', paddingLeft: '20%' }}>
                        <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
                        <a href="#shop" style={{ color: '#fff', textDecoration: 'none' }}>Shop</a>
                        <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
                        <a href="#help" style={{ color: '#fff', textDecoration: 'none' }}>Help</a>
                    </div>

                    <div style={{ paddingRight: '20px' }}>
                        <img
                            src="./bag.png"
                            alt="Shopping Bag"
                        />
                    </div>
                </nav>

                <div style={{ justifyContent: 'left', position: 'absolute', top: '30%', left: '3%', width: '569px' }}>
                    <img
                        src="./Welcome.png"
                        alt="Welcome"
                        style={{ width: '100%' }}
                    />
                    <p className='text'>Here you will find unique phone accessories, crystals, </p>
                    <p className='text'>jewelry and more. Free shipping inside the U.S. and our </p>
                    <p className='text'>phone grips come with a limited warranty. Enjoy! </p>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '250px', justifyContent: 'space-between', marginTop: '30px' }}>
                        <button className="shop-button" onClick={handleClick}>SHOP NOW</button>
                        <div style={{ marginLeft: '10px' }}>about us</div>
                    </div>
                </div>

                <img
                    src="./Vector.png"
                    alt="Vector Decoration"
                    style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                    }}
                />
                <div
                    style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '15%',
                        left: '56%',
                        width: '569px',
                        height: '554px',
                        borderRadius: '35px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden', 
                    }}
                >
                    <span style={{
                        marginTop: '10px',
                        padding: '10px 30px', 
                        backgroundColor: '#8A93E5',
                        border: '2px solid #8A93E5', 
                        borderRadius: '0 15px 15px 0',
                        color: 'white',
                        fontSize: '14px',
                        left: '0',
                        position: 'absolute',
                        bottom: '80%'
                    }}>New lot</span>
                    {/* Sliding Image */}
                    <img
                        src="./Crystal.png"
                        alt="Crystal"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            opacity: isVisible ? 1 : 0, 
                            transition: 'opacity 0.5s ease-in-out', 
                        }}
                    />
                    {/* Scroll Controls */}
                </div>
                <div className="scroll-container" style={{ position: 'absolute', bottom: '5%', left: '68%' }}>
                    <button className="scroll-button left" onClick={() => handleArrowClick('left')}>
                        &#9664;
                    </button>

                    <div className="dots-container">
                        <span className={`dot ${activeDot === 0 ? 'active' : ''}`}></span>
                        
                    </div>

                    <button className="scroll-button right" onClick={() => handleArrowClick('right')}>
                        &#9654;
                    </button>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    <img src="scrolldown.png" alt="scrolldown" />
                </div>
            </div>

            {/* All Products Section */}
            <div style={{ width: '100%', padding: '50px 0' }}>
                <h2 style={{
                    fontFamily: 'Google Sans, sans-serif',
                    fontSize: '46px',
                    fontWeight: '700',
                    lineHeight: '50px',
                    textAlign: 'center',
                    marginBottom: '5%'
                }}>
                    All products
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', marginBottom: '3%', marginInlineStart: '5%' }}>
                    <div style={{ flexDirection: 'row' }}>
                        <label htmlFor="dropdown1" style={{
                            fontFamily: 'Google Sans',
                            fontSize: '16px',
                            fontWeight: 700,
                            lineHeight: '30px',
                            textAlign: 'left',
                            color: 'rgba(154, 176, 192, 1)'

                        }}>Filter:</label>
                        <select id="dropdown1" name="dropdown1" style={{
                            border: 'none',
                            fontFamily: 'Google Sans',
                            fontSize: '16px',
                            fontWeight: 700,
                            lineHeight: '30px',
                            textAlign: 'left',
                            color: 'rgba(49, 84, 109, 1)'
                        }} >
                            <option value="option1">All Products</option>
                            <option value="option2">All Products</option>
                            <option value="option3">All Products</option>
                        </select>
                    </div>

                    <div style={{ flexDirection: 'row' }}>
                        <label htmlFor="dropdown2" style={{
                            fontFamily: 'Google Sans',
                            fontSize: '16px',
                            fontWeight: 700,
                            lineHeight: '30px',
                            textAlign: 'left',
                            color: 'rgba(154, 176, 192, 1)'
                        }}>Sort:</label>
                        <select id="dropdown2" name="dropdown2" style={{
                            border: 'none',
                            fontFamily: 'Google Sans', 
                            fontSize: '16px',
                            fontWeight: 700,
                            lineHeight: '30px',
                            textAlign: 'left',
                            color: 'rgba(49, 84, 109, 1)'
                        }}>
                            <option value="option1">Best Selling</option>
                            <option value="option2">Best Selling</option>
                            <option value="option3">Best Selling</option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridGap: '20px',
                    padding: '0 5%',
                    borderColor: 'black',
                    borderWidth: '2px',
                    alignItems: 'center'
                }}>
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="product-card" style={{ textAlign: 'center' }}>
                            <img
                                src="./Crystal.png"
                                alt={`Product ${index + 1}`}
                                style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
                            />
                            <button className="buy-now-button" onClick={handleClick}>BUY NOW</button>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
                    <button className="buy-now-button" onClick={handleClick}>View All</button>
                </div>
            </div>

            <div style={{
                width: '100%',
                height: '700px',
                background: 'linear-gradient(90deg, #75CCEB 0%, #6FB4FF 100%)',
                position: 'relative', 
                overflow: 'clip'
            }}>
                <img
                    src="./whitescreen.png"
                    alt="Vector Decoration"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',  
                        objectPosition: 'bottom'  
                    }}
                />
                <div className="text-container">
                    <p className="best-price">BEST PRICE</p>
                    <p className="phone-grip">Agate Phone Grip</p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'end',
                        gap: '20px',
                        marginTop: '10px'
                    }}>
                        <p className="price">$44.50</p>
                        <p className="discounted-price">$19.50</p>
                    </div>
                    <p className="description-text">These Pop Rock Crystals grip tops can be swapped with</p>
                    <p className="description-text">other tops depending on your mood, outfit, nails,</p>
                    <p className="description-text">phone case, holiday, etc.! Just gently squeeze the sides</p>
                    <p className="description-text">to remove and swap out with another color of design!</p>
                    <button className="buy-now-button1" style={{ marginRight: '10%' }} onClick={handleClick}>BUY NOW</button>
                </div>

                <div className="semicircle-container">
                    <div className="semicircle"></div>
                    <div className="bigcircle">
                        <div className="smallcircle">
                            <img src="phonegrip.png" alt="Crystal Agate" className="phonegrip-image" />
                        </div>
                    </div>

                </div>
            </div>


            <div style={{ width: '100%', height: '260px', background: 'rgba(10, 41, 77, 0.8)' }}></div>


        </div>
    )
}

export default Home