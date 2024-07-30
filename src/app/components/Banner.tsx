import React from 'react';
import styles from '../styles/Banner.module.css';

const Banner: React.FC = () => {
  return (
      <div className={styles.banner}>
        <svg
          className={styles.bannerImage}
          width="1150"
          height="400"
          viewBox="0 0 755 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M216.928 -70C309.022 67.2359 210.443 95.9945 83.0415 83.829C6.44452 76.5129 -0.924633 169.915 64.0712 203.755C143.216 251.953 230.108 199.897 310.432 185.791C366.585 184.294 392.019 241.495 350.394 279.805C316.917 308.732 286.009 351.765 309.106 396.716C340.941 462.498 428.233 446.474 466.679 394.207C502.977 360.177 524.369 253.64 578.753 267.197C605.177 273.796 602.566 301.269 610.777 321.741C629.642 372.68 703.713 382.358 735 337.955"
            stroke="#FFE600"
            stroke-width="40"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
        <h1 className={styles.bannerText}>
          Buy Followers, Likes and<br /> Reactions on Twitter or<br />  Telegram
        </h1>
      </div>
  );
};

export default Banner;
