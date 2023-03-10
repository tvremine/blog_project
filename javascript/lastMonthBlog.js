function updateLastMonthLink() {
    const currentPage = window.location.href;
    const currentMonth = currentPage.slice(-6, -4);
    const currentYear = currentPage.slice(-4);
  
    const currentDate = new Date(`${currentYear}-${currentMonth}-01`);
  
    if (isNaN(currentDate.getTime())) {
      console.error(`Error parsing current date from URL: ${currentPage}`);
      return;
    }
  
    const previousDate = new Date(currentDate);
    previousDate.setMonth(currentDate.getMonth() - 1);
    const previousMonth = previousDate.getMonth() + 1;
    const previousYear = previousDate.getFullYear();
  
    if (isNaN(previousMonth) || isNaN(previousYear)) {
      console.error(`Error calculating previous month/year from current date: ${currentDate}`);
      return;
    }
  
    const lastMonthLink = document.getElementById("last-month-link");
  
    if (!lastMonthLink) {
      console.error("Error finding link element with ID 'last-month-link'");
      return;
    }
  
    const lastMonthUrl = `index-${previousMonth}${previousYear}.html`;
    lastMonthLink.href = lastMonthUrl;
  
    console.log(`Last month's post link updated to: ${lastMonthUrl}`);
  }



// This is the second attempt, now as a function.

// function updateLastMonthLink() {
//     const currentPage = window.location.href;
//     const currentMonth = currentPage.slice(-6, -4);
//     const currentYear = currentPage.slice(-4);
  
//     const currentDate = new Date(`${currentYear}-${currentMonth}-01`);
//     const previousDate = new Date(currentDate);
//     previousDate.setMonth(currentDate.getMonth() - 1);
//     const previousMonth = previousDate.getMonth() + 1;
//     const previousYear = previousDate.getFullYear();
  
//     const lastMonthLink = document.getElementById("last-month-link");
//     const lastMonthUrl = `index-${previousMonth}${previousYear}.html`;
//     lastMonthLink.href = lastMonthUrl;
//   }




// This is the first attempt

// let currentDate = new Date(`${currentYear}-${currentMonth}-01`);
// let previousDate = new Date(currentDate);
// previousDate.setMonth(currentDate.getMonth() - 1);
// let previousMonth = previousDate.getMonth() + 1;
// let previousYear = previousDate.getFullYear();

// let lastMonthLink = document.getElementById("last-month-link");
// let lastMonthUrl = `index-${previousMonth}${previousYear}.html`;
// lastMonthLink.href = lastMonthUrl;

// const currentPage = window.location.href;
// const currentMonth = currentPage.slice(-6, -4);
// const currentYear = currentPage.slice(-4);

// const currentDate = new Date(`${currentYear}-${currentMonth}-01`);
// const previousDate = new Date(currentDate);
// previousDate.setMonth(currentDate.getMonth() - 1);
// const previousMonth = previousDate.getMonth() + 1;
// const previousYear = previousDate.getFullYear();

// const lastMonthLink = document.getElementById("last-month-link");
// const lastMonthUrl = `index-${previousMonth}${previousYear}.html`;
// lastMonthLink.href = lastMonthUrl;