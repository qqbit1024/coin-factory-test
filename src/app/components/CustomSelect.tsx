import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/CustomSelect.module.css';

interface Option {
  value: string;
  label: string;
  icon?: any;
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
          {selectedOption?.icon && <div className={styles.optionIcon}>{selectedOption.icon}</div>}
          {selectedOption?.label}
        </span>
        <div className={styles.optionIcon}>{isOpen ? arrowTop : arrowBottom}</div>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map(option => (
            <div
              key={option.value}
              className={`${styles.option} ${option.value === value ? styles.selected : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.icon && <div className={styles.optionIcon}>{option.icon}</div>}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

const arrowTop = <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8L8 1L15 8" stroke="black"/>
</svg>


const arrowBottom = <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L8 8L15 1" stroke="black"/>
</svg>
