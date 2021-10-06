const apiUrl = process.env.REACT_APP_API_URL;

const fetchMessagesByDay = async (token) => {
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  let date = new Date()
  let start_date = new Date()
  start_date.setDate(start_date.getDate()-7);

  let dd = date.getDate();
  let mm = date.getMonth()+1;
  let yyyy = date.getFullYear();

  let start_dd = start_date.getDate();
  let start_mm = start_date.getMonth()+1;
  let start_yyyy = start_date.getFullYear();

  if(start_dd<10) start_dd='0'+start_dd;
  if(start_mm<10) start_mm='0'+start_mm;

  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;

  let start = `${start_yyyy}${start_mm}${start_dd}`
  // console.log("START", start)
  let end = `${yyyy}${mm}${dd}`
  // console.log("END", end)

  try {
    let response = await fetch(`${apiUrl}/message_count/?start=${start}&stop=${end}`, options);
    let data = await response.json();
    console.log("Response in Fetch messages by day: ", data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchMessagesByDay };