const date = new Date();
const YearNow = date.getFullYear();
const MonthNow = date.getMonth();
const inputdate = document.getElementById("dateIp");
const table = document.getElementById("table");

const setCurrentDate = () => {
  inputdate.value =
    date.getFullYear().toString() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, 0);


};

const Render = (selectedDate) => {
  // to get selected month and year  value
  const [selectedYear, selectedMonth] = selectedDate.split('-')
  //to  get starting  Day in the default or present month
  let persent_month_startday = new Date(selectedYear + "-" + selectedMonth + "-01").getDay();
  // no_of_days_in_month
  const dayCount = new Date(selectedYear, selectedMonth, 0).getDate();
  console.log(dayCount);
  let starting_date_of_month = 1;
  //Looping to Add new cells
  const no_of_days_in_week = 7;
  const calender_matrix = 42;//7*5=35;
  for (let i = 0; i < calender_matrix; i++) {
    if (i % no_of_days_in_week === 0) {
      //adding new row
      var row = table.insertRow();
    }
    //adding cell in row
    let cell = row.insertCell();
    if (Number(persent_month_startday) > 0) {
      cell.innerHTML = " ";

    } else {
      if (starting_date_of_month <= dayCount) {
        cell.innerHTML = starting_date_of_month;
      } else {
        cell.innerHTML = " ";
      }

      starting_date_of_month++;
    }
    persent_month_startday--;
  }
};
//for  clearing the present month table
const clearTable = () => {
  let rowLength = table.rows.length;
  for (let d = 1; d < rowLength; d++) {
    table.deleteRow(1);
  }
};

//setting current date
setCurrentDate();
//On First Render
Render(inputdate.value);
//On Date Change
function onDateChange() {
  clearTable();
  Render(inputdate.value);
}
