import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: { text: string; colorClass: string }[]; // Each word has text and a CSS color class
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setText(text.slice(0, -1));
        }
      } else {
        const currentWord = words[wordIndex].text;
        if (text === currentWord) {
          setIsWaiting(true);
        } else {
          setText(currentWord.slice(0, text.length + 1));
        }
      }
    }, isWaiting ? delayBetweenWords : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, isWaiting, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  const currentColorClass = words[wordIndex]?.colorClass || '';

  return (
    <span className={`inline-block ${currentColorClass}`}>
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypeWriter;
