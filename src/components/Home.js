import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

const Home = () => {
    const vantaRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadVanta = () => {
            if (window.VANTA) {
                window.VANTA.BIRDS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 500.00,
                    minWidth: 500.00,
                    scale: 0.00,
                    scaleMobile: 0.00,
                });
            }
        };

        if (!window.VANTA) {
            const script1 = document.createElement('script');
            script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
            script1.onload = loadVanta;
            document.body.appendChild(script1);

            const script2 = document.createElement('script');
            script2.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";
            script2.onload = loadVanta;
            document.body.appendChild(script2);
        } else {
            loadVanta();
        }

        return () => {
            if (window.VANTA && window.VANTA.current) {
                window.VANTA.current.destroy();
            }
        };
    }, []);

    const handleButtonClick = () => {
        navigate('/page1'); 
    };

    return (
        <div ref={vantaRef} style={{ height: '100vh', width: '100%', position: 'relative' }}>
            <Card
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#07192f',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    maxWidth: '500px',
                }}
            >
                <CardContent style={{ color: "white" }}>
                    <Typography variant="h1" component="h2" gutterBottom>
                        InnoScribe
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleButtonClick} style={{fontSize:"30px",fontFamily:"unset"}}>
                        Get Started
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Home;
