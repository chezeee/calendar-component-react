import css from './CalendarDisplay.module.css';

export default function CalendarDisplay({ children }) {
  return <div className={css['pop-window']}>{children}</div>;
}
