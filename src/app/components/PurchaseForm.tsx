'use client';

import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import styles from '../styles/PurchaseForm.module.css';

const PurchaseForm: React.FC = () => {
  const [platform, setPlatform] = useState<'telegram' | 'twitter'>('telegram');
  const [service, setService] = useState<string>('followers');
  const [link, setLink] = useState<string>('');
  const [subscribers, setSubscribers] = useState<number>();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [linkError, setLinkError] = useState<boolean>(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const platformOptions = [
    { value: 'telegram', label: 'Telegram', icon: tgIcon
  },
    { value: 'twitter', label: 'Twitter', icon: xIcon
  },
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
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9 6C9 5.44772 9.44771 5 10 5C10.5523 5 11 5.44772 11 6V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V6ZM10 13C9.44771 13 9 13.4477 9 14C9 14.5523 9.44771 15 10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13Z" fill="#FF5C1F"/>
              </svg>
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
          placeholder='1000'
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
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5V11.2857C19 12.2325 18.1942 13 17.2 13H2.8C1.80584 13 1 12.2325 1 11.2857V2.71427C1 1.76754 1.80584 1 2.8 1H17.2C18.1942 1 19 1.76754 19 2.71427V5ZM19 5H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.paymentText}>Card</div>
            </div>
            <hr className={styles.separatorPayment} />
            <small className={styles.hintPayment}>Visa, Mastercard</small>
          </div>
          <div
            className={`${styles.paymentMethod} ${paymentMethod === 'cash' ? styles.selected : ''}`}
            onClick={() => setPaymentMethod('cash')}
          >
            <div className={styles.paymentHeader}>
              <div className={styles.paymentIcon}>
                <div className={styles.iconCircle}>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3.76926C6.31497 3.13692 5.10872 2.69713 4 2.66962M4 2.66962C2.68095 2.6368 1.50001 3.18763 1.50001 4.69229C1.50001 7.46156 7 6.07688 7 8.84615C7 10.4256 5.53615 11.1042 4 11.0532M4 2.66962V1M1 9.76926C1.64454 10.5624 2.84283 11.0148 4 11.0532M4 11.0532V13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.paymentText}>Cash</div>
            </div>
            <hr className={styles.separatorPayment} />
            <small className={styles.hintPayment}>USD, EUR, RUB</small>
          </div>
        </div>
      </div>
      <button type="submit" className={styles.button}>Create task</button>
    </form>
  );
};

export default PurchaseForm;

const tgIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_156)">
<circle cx="10" cy="10" r="10" fill="#0098EA"/>
<g clip-path="url(#clip1_5_156)">
<path d="M4.03198 9.63821C5.29109 8.93301 6.6966 8.34445 8.00983 7.75287C10.2691 6.78392 12.5374 5.83176 14.8285 4.94531C15.2742 4.79427 16.0752 4.6466 16.1538 5.31831C16.1108 6.2691 15.9339 7.21432 15.8125 8.15955C15.5045 10.2382 15.1485 12.3097 14.8014 14.3815C14.6817 15.0715 13.8316 15.4288 13.2875 14.9872C11.9801 14.0893 10.6627 13.2001 9.37198 12.2813C8.94914 11.8444 9.34129 11.2172 9.71881 10.9052C10.7956 9.82613 11.9376 8.90947 12.9581 7.77469C13.2334 7.09869 12.42 7.66836 12.1518 7.84295C10.6776 8.87588 9.2395 9.97187 7.68527 10.8797C6.89137 11.324 5.96606 10.9443 5.17252 10.6963C4.46102 10.3968 3.4184 10.095 4.03189 9.6383L4.03198 9.63821Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_5_156">
<rect width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip1_5_156">
<rect width="12.3077" height="12.3077" fill="white" transform="translate(3.84607 3.84604)"/>
</clipPath>
</defs>
</svg>

const xIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_180)">
<circle cx="10" cy="10" r="10" fill="black"/>
<g clip-path="url(#clip1_5_180)">
<path d="M7.71807 15C12.3613 15 14.9017 11.1522 14.9017 7.81635C14.9017 7.70818 14.8993 7.5976 14.8945 7.48943C15.3887 7.13204 15.8152 6.68937 16.1539 6.18221C15.6936 6.38698 15.205 6.52072 14.7046 6.57885C15.2315 6.26304 15.626 5.76692 15.8149 5.18245C15.3193 5.47619 14.7773 5.6834 14.2121 5.79519C13.8312 5.39055 13.3277 5.12263 12.7794 5.03286C12.231 4.94308 11.6683 5.03645 11.1784 5.29852C10.6884 5.5606 10.2984 5.97678 10.0687 6.48273C9.83896 6.98869 9.78231 7.55622 9.90749 8.0976C8.90388 8.04724 7.92206 7.78652 7.02567 7.33237C6.12928 6.87821 5.33834 6.24075 4.70412 5.4613C4.38178 6.01706 4.28314 6.6747 4.42826 7.30057C4.57337 7.92644 4.95135 8.47357 5.48537 8.83077C5.08446 8.81804 4.69233 8.7101 4.34138 8.51587V8.54712C4.34102 9.13034 4.54265 9.6957 4.91199 10.1471C5.28133 10.5984 5.79559 10.908 6.36735 11.0231C5.99596 11.1247 5.60618 11.1395 5.22816 11.0663C5.3895 11.5679 5.70341 12.0066 6.12607 12.3212C6.54874 12.6358 7.05907 12.8106 7.58586 12.8212C6.69154 13.5237 5.58679 13.9047 4.44956 13.9029C4.24788 13.9026 4.0464 13.8902 3.84619 13.8659C5.0015 14.6071 6.34544 15.0007 7.71807 15Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_5_180">
<rect width="20" height="20" fill="white"/>
</clipPath>
<clipPath id="clip1_5_180">
<rect width="12.3077" height="12.3077" fill="white" transform="translate(3.84619 3.84613)"/>
</clipPath>
</defs>
</svg>
