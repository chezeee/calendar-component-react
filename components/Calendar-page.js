import { useState } from 'react';
import Calendar from './Calendar';
import { LocaleContext } from './LocaleContext';
import css from './Calendar-page.module.css';
import CalendarDisplay from './CalendarDisplay';

export default function CalendarPage() {
  const [month, setMonth] = useState(new Date()),
    [open, setOpen] = useState(false),
    [locale, setLocale] = useState('ru-RU');

  return (
    <div className={css.container}>
      <div className={css.calendarPage}>
        <div class={css.flexWrap}>
          <h1>Calendar</h1>

          <label>
            {' '}
            locale:
            <select
              value={locale}
              onChange={(evt) => setLocale(evt.target.value)}
            >
              {['ru-RU', 'en-US', 'ar', 'zh', 'ko', 'ja'].map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </label>
        </div>
        <LocaleContext.Provider value={locale}>
          <div class={css.flexWrap}>
            <input
              type="month"
              value={
                month.getFullYear() +
                '-' +
                (1 + month.getMonth()).toString().padStart(2, '0')
              }
              onChange={(evt) =>
                setMonth(
                  new Date(
                    evt.target.value.slice(0, 4),
                    evt.target.value.slice(5, 7) - 1
                  )
                )
              }
            />
            <button className={css.openBtn} onClick={(_) => setOpen(true)}>
              Open Calendar
            </button>
          </div>
          {open && (
            <CalendarDisplay>
              <button class={css.closeBtn} onClick={(_) => setOpen(false)}>
                ❌
              </button>
              <section class={css.calendarWrap}>
                <Calendar date={month} />
              </section>
            </CalendarDisplay>
          )}
        </LocaleContext.Provider>
      </div>
    </div>
  );
}
