import type { FormEvent, KeyboardEvent } from 'react';
import React, { useState } from 'react';

import addEmail from '../addEmail';
import styles from './Input.module.css';

interface InputProps {
  locked?: boolean;
  active?: boolean;
  value?: string;
  error?: string;
  label?: string;
  predicted?: string;
  SubmitButton: React.ReactNode;
  SubmittedButton: React.ReactNode;
  id?: number; // Assuming id should be a prop based on the render usage
}

const Input: React.FC<InputProps> = ({
  locked = false,
  active: initialActive = false,
  // value: initialValue = '',
  // error: initialError = '',
  label: initialLabel = 'Label',
  SubmitButton,
  SubmittedButton,
  predicted,
  id = 1, // Default id value set to 1 if not passed
}) => {
  const [active, setActive] = useState<boolean>(locked && initialActive);
  // const [value, setValue] = useState<string>(initialValue);
  // const [error, setError] = useState<string>(initialError);
  const [label] = useState<string>(initialLabel);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      // Enter key
      setEmail(predicted || '');
    }
  };

  const fieldClassName = `${styles.field} ${
    (locked ? active : active || email) ? styles.active : ''
  } ${locked && !active ? styles.locked : ''}`;

  const labelClassName = '';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    const emailValue = target.email.value;
    addEmail(emailValue)
      .then(() => {
        // Handle the success scenario
        setSubmitted(true);
      })
      .catch((error) => {
        // Handle the error scenario
        console.error(error);
      });
    // Clear the email input after form submission
    setEmail('');
  };

  return (
    <div className={styles.mainInput}>
      <div className={fieldClassName}>
        <form onSubmit={handleSubmit}>
          {active && email && predicted && predicted.includes(email) && (
            <p className={styles.predicted}>{predicted}</p>
          )}
          <input
            id={id.toString()}
            name="email"
            type="text"
            value={email}
            placeholder={label}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => !locked && setActive(true)}
            onBlur={() => !locked && setActive(false)}
            className={styles.input} // Apply the input style
          />
          <label htmlFor={`input-${id}`} className={labelClassName}>
            {label}
          </label>
          {submitted ? SubmittedButton : SubmitButton}
        </form>
      </div>
    </div>
  );
};

export default Input;
