'use client';

import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import styles from './PurchaseForm.module.css';

const PurchaseForm: React.FC = () => {
  const [platform, setPlatform] = useState<'telegram' | 'twitter'>('telegram');
  const [service, setService] = useState<string>('followers');
  const [link, setLink] = useState<string>('');
  const [subscribers, setSubscribers] = useState<number>(1000);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [linkError, setLinkError] = useState<boolean>(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const platformOptions = [
    { value: 'telegram', label: 'Telegram', icon: '/icons/telegram-icon.svg' },
    { value: 'twitter', label: 'Twitter', icon: '/icons/twitter-icon.svg' },
  ];

  const serviceOptions = platform === 'telegram'
    ? [
        { value: 'followers', label: 'Followers' },
        { value: 'reactions', label: 'Reactions' },
        { value: 'views', label: 'Views' },
      ]
    : [
        { value: 'followers', label: 'Followers' },
        { value: 'likes', label: 'Likes' },
      ];

  const linkPatternTg = /^https:\/\/t\.me\/[a-zA-Z0-9_]+$/;
  const linkPatternX = /^https:\/\/x\.com\/[a-zA-Z0-9_]+$/;
  const linkPattern = platform === 'telegram' ? linkPatternTg : linkPatternX;

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLink(value);

    if (!linkPattern.test(value)) {
      if (touched['link']) {
        setLinkError(true);
      }
    } else {
      setLinkError(false);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const name = event.target.name;
    setTouched({ ...touched, [name]: true });

    if (name === 'link') {
      if (!linkPattern.test(link)) {
        setLinkError(true);
      } else {
        setLinkError(false);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.h2}>Create task</h2>
      <hr className={styles.separator} />

      <div className={styles.formGroup}>
        <label htmlFor="platform" className={styles.label}>Social network</label>
        <CustomSelect
          options={platformOptions}
          value={platform}
          onChange={(value) => setPlatform(value as 'telegram' | 'twitter')}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="service" className={styles.label}>Type of services</label>
        <CustomSelect
          options={serviceOptions}
          value={service}
          onChange={(value) => setService(value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="link" className={styles.label}>Channel<span className={styles.required}>*</span></label>
        <div className={styles.inputWrapper}>
          <input
            id="link"
            name="link"
            type="text"
            value={link}
            onChange={handleLinkChange}
            onBlur={handleBlur}
            placeholder={platform === 'telegram' ? 'https://t.me/channel' : 'https://x.com/channel'}
            className={`${styles.input} ${linkError ? styles.inputError : ''}`}
          />
          {linkError && (
            <span className={styles.errorIcon}>
              <img src="/icons/error-icon.svg" alt="Error" />
            </span>
          )}
        </div>
        <small className={styles.hint}>Provide a link to an open channel or group older than 14 days</small>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subscribers" className={styles.label}>Number of subscribers<span className={styles.required}>*</span></label>
        <input
          id="subscribers"
          name="subscribers"
          type="number"
          value={subscribers}
          onChange={(e) => setSubscribers(Number(e.target.value))}
          min="1"
          max="1000"
          className={styles.input}
        />
        <small className={styles.hint}>Limit 1-1000</small>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Choose your payment method</label>
        <div className={styles.paymentMethods}>
          <div
            className={`${styles.paymentMethod} ${paymentMethod === 'card' ? styles.selected : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            <div className={styles.paymentHeader}>
              <div className={styles.paymentIcon}>
                <div className={styles.iconCircle}>
                  <img src="/icons/card-icon.svg" alt="Card" />
                </div>
              </div>
              <div className={styles.paymentText}>Card</div>
            </div>
            <hr className={styles.separator} />
            <small className={styles.hint}>Visa, Mastercard</small>
          </div>
          <div
            className={`${styles.paymentMethod} ${paymentMethod === 'cash' ? styles.selected : ''}`}
            onClick={() => setPaymentMethod('cash')}
          >
            <div className={styles.paymentHeader}>
              <div className={styles.paymentIcon}>
                <div className={styles.iconCircle}>
                  <img src="/icons/cash-icon.svg" alt="Cash" />
                </div>
              </div>
              <div className={styles.paymentText}>Cash</div>
            </div>
            <hr className={styles.separator} />
            <small className={styles.hint}>USD, EUR, RUB</small>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>Create task</button>
      </div>
    </form>
  );
};

export default PurchaseForm;
