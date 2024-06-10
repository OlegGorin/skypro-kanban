import * as C from "./Calendar.styled";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../../../app/global.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Calendar = ({ selDate, setDate }) => {

  return (
    <C.PopNewCardCalendar>
      <C.CalendarTtl>Даты</C.CalendarTtl>
      <C.CalendarBlock>
        <C.CalendarContent>
          <C.CalendarPicker>
            <DayPicker
              mode="single"
              selected={selDate}
              onSelect={setDate}
              locale={ru}
            />
          </C.CalendarPicker>
        </C.CalendarContent>

        <C.CalendarPeriod>
          <C.CalendarP>
            {selDate ? (
              <p>
                Срок исполнения <b>{format(selDate, "dd.MM.yy", { locale: ru })}</b>
              </p>
            )
              : (
              <p>Выберите дату исполнения</p>
            )}
          </C.CalendarP>
        </C.CalendarPeriod>
      </C.CalendarBlock>
    </C.PopNewCardCalendar>
  );
};

export default Calendar;
