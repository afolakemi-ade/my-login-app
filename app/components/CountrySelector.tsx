'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './CountrySelector.module.css';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    code: 'EN',
    flag: '/flagpack.svg',
    name: 'English',
  });

  const countries = [
    { code: 'EN', flag: '/flagpack.svg', name: 'English' },
    { code: 'FR', flag: '/fr.svg', name: 'French' },
    { code: 'NG', flag: '/ng.svg', name: 'Nigerian' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCountry = (country: any) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.toggle}>
        <div className={styles.flagContainer}>
          <Image src={selected.flag} alt={selected.name} width={24} height={18} />
          <span className={styles.code}>{selected.code}</span>
        </div>

        <div className={styles.icons}>
          <ChevronUp size={14} className={styles.icon} />
          <ChevronDown size={14} className={styles.icon} />
        </div>
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          {countries.map((country) => (
            <li
              key={country.code}
              onClick={() => selectCountry(country)}
              className={styles.menuItem}
            >
              <Image src={country.flag} alt={country.name} width={24} height={18} />
              <span>{country.code}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
