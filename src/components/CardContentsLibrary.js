import Modal from 'react-modal';
import Image from 'next/image';
import React, { useState } from 'react';

export default function CardContentsLibrary ({ onClick, ...props }) {

    const { Title, Orientation, Image: image, Meaning, Deck } = props;

    const [isOpen, setIsOpen] = useState(false);

    const cleanTitle = (title) => {
        return title.replace(/\s*\(.*\)/, '').trim();
    }

    const reversedCards = Deck.flatMap(card => 
        card.data.filter(item => item.Orientation === 'Reversed')
    );

    let reversedMeaning = '';

    const reversedTitle = reversedCards.find(item => item.Title === `${cleanTitle(Title)} (Reversed)`);

    if (reversedTitle) {
        reversedMeaning = reversedTitle.Meaning;
    } else {
        console.log('No matching object found.');
    }

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
        <div className="card" onClick={onClick}>
            <div key={Title} className="relative">
                <Image
                    src={`/Images/${image}.webp`}
                    alt={`Tarot Card`}
                    layout="responsive"
                    width={250}
                    height={750}
                    onClick={() => setIsOpen(true)}
                    className="object-cover"
                />
                <div className="text-center mt-2 text-black">{cleanTitle(Title)}</div>
            </div>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles}>
                <div className="flex-col justify-center">
                    <div className="flex">
                        <button onClick={() => setIsOpen(false)} className="mr-0 ml-auto p-3">
                            <Image
                                src="/Images/Close.svg"
                                width={30}
                                height={30}
                                alt="Close Modal"
                            />
                        </button>
                    </div>
                    <br />
                    <h1 className="text-4xl text-center justify-center text-white">
                        {cleanTitle(Title)}
                    </h1>
                    <br />
                    <div className="flex justify-center">
                        <Image
                            src={`/Images/${image}.webp`}
                            width={250}
                            height={750}
                            layout="responsive"
                            className={`object-cover h-60 w-auto ${Orientation === "Reversed" ? "reversed" : ""}`}
                            alt={Title}
                        />
                    </div>
                    <br />
                    <h1>Upright Menaing:</h1>
                    <p className="flex text-center text-white pb-10 px-10">
                        {Meaning}
                    </p>
                    <br />
                    <h1>Reversed Meaning:</h1>
                    <p className="flex text-center text-white pb-10 px-10">
                        {reversedMeaning}
                    </p>
                </div>
            </Modal>
        </div>
    );
};