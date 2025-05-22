import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="z-50 flex items-center justify-center w-full h-full fixed top-0 left-0 right-0 bg-dark-1/10" onClick={onClose}>
            <div className="bg-stone-50 text-stone-900 rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;