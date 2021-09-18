import RecentMessageDetail from "./RecentMessageDetail";

const RecentMessagesList = () => {
  return(
    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
      <h4>Recent Messages</h4>
      <RecentMessageDetail/>
      <RecentMessageDetail/>
      <RecentMessageDetail/>
    </div>
  )
}

export default RecentMessagesList