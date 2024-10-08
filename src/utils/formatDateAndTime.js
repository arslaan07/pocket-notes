export function formatDateAndTime() {
    let date = new Date();
    let day = date.getDate(); // automatically avoids leading zeros
    let month = date.toLocaleString('default', { month: 'short' }); 
    let year = date.getFullYear();
    let formattedDate = `${day} ${month} ${year}`;
  
    let time = new Date();
    let formattedTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  
    return { date: formattedDate, time: formattedTime }; 
  }