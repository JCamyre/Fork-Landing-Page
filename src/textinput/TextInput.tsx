import type { ChangeEvent, KeyboardEvent } from 'react';
import React, { useState } from 'react';

import styles from './Input.module.css';

interface InputProps {
  locked?: boolean;
  active?: boolean;
  value?: string;
  error?: string;
  label?: string;
  predicted?: string;
  id?: number; // Assuming id should be a prop based on the render usage
}

const Input: React.FC<InputProps> = ({
  locked = false,
  active: initialActive = false,
  value: initialValue = '',
  error: initialError = '',
  label: initialLabel = 'Label',
  predicted,
  id = 1, // Default id value set to 1 if not passed
}) => {
  const [active, setActive] = useState<boolean>(locked && initialActive);
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string>(initialError);
  const [label] = useState<string>(initialLabel);

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError('');
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      // Enter key
      setValue(predicted || '');
    }
  };

  const fieldClassName = `${styles.field} ${
    (locked ? active : active || value) ? styles.active : ''
  } ${locked && !active ? styles.locked : ''}`;

  const labelClassName = error ? styles.error : '';

  return (
    <div className={styles.mainInput}>
      <div className={fieldClassName}>
        {active && value && predicted && predicted.includes(value) && (
          <p className={styles.predicted}>{predicted}</p>
        )}
        <input
          id={id.toString()}
          type="text"
          value={value}
          placeholder={label}
          onChange={changeValue}
          onKeyPress={handleKeyPress}
          onFocus={() => !locked && setActive(true)}
          onBlur={() => !locked && setActive(false)}
          className={styles.input} // Apply the input style
        />
        <label htmlFor={`input-${id}`} className={labelClassName}>
          {error || label}
        </label>
      </div>
    </div>
  );
};

export default Input;
