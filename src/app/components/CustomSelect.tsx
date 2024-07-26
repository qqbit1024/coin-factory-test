import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.css';

interface Option {
  value: string;
  label: string;
  icon?: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <div className={styles.selectTrigger} onClick={() => setIsOpen(!isOpen)}>
        <span>
          {selectedOption?.icon && <img src={selectedOption.icon} alt="" className={styles.optionIcon} />}
          {selectedOption?.label}
        </span>
        <img
          src={isOpen ? '/icons/arrow-top-icon.svg' : '/icons/arrow-bottom-icon.svg'}
          alt="Toggle Arrow"
          className={styles.arrowIcon}
        />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map(option => (
            <div
              key={option.value}
              className={`${styles.option} ${option.value === value ? styles.selected : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.icon && <img src={option.icon} alt="" className={styles.optionIcon} />}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
