import styled from "styled-components";

export const PopNewCardCalendar = styled.div`
  width: 100%;
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  /* padding: 0; */
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavActionSvg = styled.svg`
  fill: #94a6be;
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarCellCellDay = styled(CalendarCell)`
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;

export const CalendarCellOtherMonth = styled(CalendarCell)`
  opacity: 0;
`;

export const CalendarCellActiveDay = styled(CalendarCell)`
  background-color: #94a6be;
  color: #ffffff;
`;

export const Input = styled.input``;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
`;

export const CalendarPSpan = styled.span`
  color: #000000;
`;

export const CalendarBox = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarPicker = styled.div`
  /* padding: 0; */
  width: 182px;
  /* height: 126px; */
  /* height: 86px; */
  border-radius: 50%;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  --rdp-cell-size: 22px;
  /* --rdp-caption-font-size: 10px; */
  /* --rdp-accent-color: #0000ff; */
  /* --rdp-accent-color: #0000ff; */
  /* --rdp-background-color: #e7edff; */
  /* --rdp-accent-color-dark: #3003e1; */
  /* --rdp-background-color-dark: #180270; */
  /* --rdp-outline: 2px solid var(--rdp-accent-color); */
  /* --rdp-outline-selected: 3px solid var(--rdp-accent-color); */
  /* --rdp-selected-color: #fff; */
  /* --rdp-accent-color: indigo; */
  /* --rdp-background-color: gray; */
  /* --rdp-cell-size: 20px; */
  /* --rdp-caption-font-size: 10px; */
  /* --rdp-background-color: #94A6BE; */
  /* --rdp-selected-color: #FFFFFF; */
  margin: 2px;

  /* &:hover { */
  /* color: #94a6be; */
  /* background-color: #eaeef6; */
  /* background-color: #546992; */
`;
