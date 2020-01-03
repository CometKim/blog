import React from 'react';

export interface IResumeCardProps {
  title: string;
  time: string;
}

const ResumeCard: React.FC<IResumeCardProps> = React.memo(({ title, time, children }) => {
  return (
    <div>
      <header>
        <h2>{title}</h2>
        <time>{time}</time>
      </header>
      <section>{children}</section>
    </div>
  );
});

ResumeCard.displayName = 'ResumeCard';

export default ResumeCard;
