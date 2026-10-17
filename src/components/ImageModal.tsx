import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

export interface ImageModalProps {
    isOpen: boolean;
    src: string;
    title: string;
    desc?: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, src, title, desc, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="image-modal-backdrop"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <div
                className="image-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="image-modal-header">
                    <h3 className="image-modal-title">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="image-modal-close-btn"
                        aria-label="Fermer la vue agrandie"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="image-modal-body">
                    <img
                        src={src}
                        alt={title}
                        className="image-modal-img"
                    />
                    {desc && (
                        <p className="image-modal-desc">
                            {desc}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
