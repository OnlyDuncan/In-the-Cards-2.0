import Modal from 'react-modal';
import Image from 'next/image';
import React, { useState } from 'react';

export default function CardContents ({ onClick, ...props }) {

    const { Title, Orientation, Image: image, Meaning } = props;

    const [isOpen, setIsOpen] = useState(false);

    const styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            overflowY: 'scroll'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#404355',
            width: '40rem',
            maxWidth: '90%',
            maxHeight: '90vh',
            position: 'relative',
            overflowY: 'scroll'
        }
    }

    return (
        <div className="card" onClick={onClick} style={{ backgroundColor: "#322238" }}>
            <div className="card-back">
                <Image
                    src={`/Images/${image}.webp`}
                    width="0"
                    height="0"
                    sizes="100vh"
                    className={`h-full w-auto ${Orientation === "Reversed" ? "reversed" : ""}`}
                    alt="Tarot Card"
                    onClick={() => setIsOpen(true)}
                />
            </div>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles}>
                <div className="flex-col justify-center">
                    <div className="flex">
                        <button onClick={() => setIsOpen(false)} className="mr-0 ml-auto p-3">
                            <Image
                                src="/Images/Close.svg"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    <br />
                    <h1 className="text-4xl text-center justify-center text-white">
                        {Title}
                    </h1>
                    <br />
                    <div className="flex justify-center">
                        <Image
                            src={`/Images/${image}.webp`}
                            width="0"
                            height="0"
                            sizes="100vh"
                            className={`h-60 w-auto ${Orientation === "Reversed" ? "reversed" : ""}`}
                            alt={Title}
                        />
                    </div>
                    <br />
                    <p className="flex text-center text-white pb-10 px-10">
                        {Meaning}
                    </p>
                </div>
            </Modal>
            <div className="card-front">
                <Image
                    src="/Images/CardBack.webp"
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="h-full w-auto"
                    alt="Back of Card"
                />
            </div>
        </div>
    );
};