import React from 'react';
import {useNavigate} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import {useTranslate} from '../hooks/useTranslate.ts';
import '../styles/app.css';

interface ReturnButtonProps {
    fallback?: string;
    label?: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({fallback = '/projects', label}) => {
    const navigate = useNavigate();
    const {t} = useTranslate();

    const handleBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate(fallback);
        }
    };

    return (
        <button
            onClick={handleBack}
            className="return-btn"
        >
            <FaArrowLeft className="return-btn-icon"/>
            {label || t('app.buttons.back')}
        </button>
    );
};

export default ReturnButton;