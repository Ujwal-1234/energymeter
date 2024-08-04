import React, { useState, useRef, useEffect } from 'react';
import Modal from './Modal';

const ExpandableOptions = ({ title, options }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setHeight(contentRef.current.scrollHeight);
  }, [options]);

  const openModal = (option) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOption(null);
  };

  return (
    <div className='expandable-options'>
      <div 
        className='title bg-slate-700 text-white p-2 rounded cursor-pointer flex justify-between items-center' 
        onClick={toggleExpand}
      >
        <span>{title}</span>
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      <div
        className={`options bg-slate-800 text-white p-2 mt-2 rounded transition-max-height duration-300 ease-in-out overflow-hidden`}
        style={{ maxHeight: isExpanded ? `${height}px` : '0px' }}
        ref={contentRef}
      >
        {options.map((option, index) => (
          <div 
            key={index} 
            className='option p-2 hover:bg-slate-600 rounded cursor-pointer'
            onClick={() => openModal(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        content={<p>Details of {selectedOption}</p>}
      />
    </div>
  );
};

export default ExpandableOptions;
