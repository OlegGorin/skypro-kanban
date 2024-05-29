import * as C from "./Calendar.styled";

const Calendar = () => {
  return (
    <C.PopNewCardCalendar>
      <C.CalendarTtl>Даты</C.CalendarTtl>
      <C.CalendarBlock>
        <C.CalendarNav>
          <C.CalendarMonth>Сентябрь 2023</C.CalendarMonth>
          <C.NavActions>
            <C.NavAction dataAction="prev">
              <C.NavActionSvg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </C.NavActionSvg>
            </C.NavAction>
            <C.NavAction dataAction="next">
              <C.NavActionSvg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </C.NavActionSvg>
            </C.NavAction>
          </C.NavActions>
        </C.CalendarNav>
        <C.CalendarContent>
          <C.CalendarDaysNames>
            <C.CalendarDayName>пн</C.CalendarDayName>
            <C.CalendarDayName>вт</C.CalendarDayName>
            <C.CalendarDayName>ср</C.CalendarDayName>
            <C.CalendarDayName>чт</C.CalendarDayName>
            <C.CalendarDayName>пт</C.CalendarDayName>
            <C.CalendarDayName>сб</C.CalendarDayName>
            <C.CalendarDayName>вс</C.CalendarDayName>
          </C.CalendarDaysNames>
          <C.CalendarCells>
            <C.CalendarCellOtherMonth>28</C.CalendarCellOtherMonth>
            <C.CalendarCellOtherMonth>29</C.CalendarCellOtherMonth>
            <C.CalendarCellOtherMonth>30</C.CalendarCellOtherMonth>
            <C.CalendarCellCellDay>31</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>1</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>2</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>3</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>4</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>5</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>6</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>7</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>8</C.CalendarCellCellDay>
            <C.CalendarCellActiveDay>9</C.CalendarCellActiveDay>
            <C.CalendarCellCellDay>10</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>11</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>12</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>13</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>14</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>15</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>16</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>17</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>18</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>19</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>20</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>21</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>22</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>23</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>24</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>25</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>26</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>27</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>28</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>29</C.CalendarCellCellDay>
            <C.CalendarCellCellDay>30</C.CalendarCellCellDay>
            <C.CalendarCellOtherMonth>1</C.CalendarCellOtherMonth>
          </C.CalendarCells>
        </C.CalendarContent>

        <C.Input type="hidden" value="08.09.2023"></C.Input>
        <C.CalendarPeriod>
          <C.CalendarP>
            Срок исполнения:
            <C.CalendarPSpan> 09.09.23</C.CalendarPSpan>
          </C.CalendarP>
        </C.CalendarPeriod>
      </C.CalendarBlock>
    </C.PopNewCardCalendar>
  );
};

export default Calendar;
