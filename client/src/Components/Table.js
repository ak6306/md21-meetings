import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DeleteIcon from './../delete-icon.svg'
import SearchIcon from './../search-icon.svg'
function Table() {
    const [data, setData] = useState([])
    const [MeetingName, setMeetingName] = useState("");
    const [NumberPeople, setNumberPeople] = useState("");
    const [Date, setDate] = useState(""); 
    const [StartTime, setStartTime] = useState("");
    const [EndTime, setEndTime] = useState("");
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [StartDate, setStartDate] = useState();
    const [EndDate, setEndDate] = useState();
    useEffect(() => {
        const timeOutId = setTimeout(() => findData(query), 500);
        return () => clearTimeout(timeOutId);
        }, [query, StartDate, EndDate]);

    function fetchData(){
        axios.get('https://meetings2021.herokuapp.com/meets/')
            .then(res=>setData([...res.data]));
    }
    function AddData() {
        let payload = 
            {
                MeetingName : MeetingName,
                NumberPeople : NumberPeople,
                Date: Date,
                StartTime: StartTime.toString(),
                EndTime: EndTime.toString()
            }
        
       // setData([ ...data, ...payload]);
        console.log(payload);
        axios.post('https://meetings2021.herokuapp.com/meets/add', payload)
             .then(res=>{console.log(res.data)
                setMeetingName("");
                setNumberPeople("");
                setDate("");
                setStartDate("");
                setEndDate("");
            })
             .catch(err=>console.log(err));
    

    }
    function DeleteData(id){
        axios.delete('https://meetings2021.herokuapp.com/meets/'+id)
            .then(console.log("Deleted!"));
    }
    function findData(query1){
        // axios.get('http://localhost:5000/meets/search/'+query1)
        //     .then(res=>setResult([...res.data]));
        // if(query.length === 0){
        //     setResult([]);
        // }
        let resData;
        if(query1 && !StartDate && !EndDate){
             resData = data.filter((item)=>{
                return item['MeetingName'].includes(query1)
            });
        }else{
             resData = data.filter((item)=>{
                return item['MeetingName'].includes(query1) && item.DateCreated >= StartDate && item.DateCreated <= EndDate
            });
        }
        setResult([...resData]);
    }
    useEffect(()=>{
        fetchData();
    })
    function tConvert (time) {
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { 
          time = time.slice (1); 
          time[5] = +time[0] < 12 ? ' AM' : ' PM'; 
          time[0] = +time[0] % 12 || 12; 
        }
        return time.join (''); 
      }
    let finalData = result.length>0 || EndDate  ? result : data;
    return (
        <>
        <div className = "search-area" style = {{marginTop: '40px'}}>
            <br/>
                <div style = {{display: 'flex', justifyContent: 'flex-start', padding: "0px", width: '95%', height: '20vh', backgroundColor: '#fff',alignItems: 'center'}}>
                <div style = {{margin: '0 50px'}}>
                <img src = {SearchIcon} style = {{float: 'left', borderBottom: '1px solid black'}}/>
                <input className= "text-input" type="text" placeholder="Search" onChange = {e => setQuery(e.target.value)}/> 
                </div>
                From:<input className= "date-input" type="date" onChange = {e => setStartDate(e.target.value)}/>
                <div style = {{margin :'0 50px'}}>To:<input className= "date-input" type="date" onChange = {e => setEndDate(e.target.value)}/>  </div>
                </div>
        </div>
        <div className = 'table-area' style = {{display: 'flex', padding: '50px', backgroundColor: '#fff', marginTop: '40px', width: '95%', overflowY: 'auto', height: "50vh"}}>
            <table data-testid = "table" className="main-table"  style= {{width: '100%'}}>
                <thead>
                <tr>
                    <th>Serial</th>
                    <th>Meeting Name</th>
                    <th>Number of People</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {finalData.map((item,index)=>{
                    let datec = new window.Date(item.DateCreated).toLocaleDateString();
                    return(
                        <tr key = {index}>
                            <td>{index+1}</td>
                            <td>{item.MeetingName}</td>
                            <td>{item.NumberPeople}</td>
                            <td>{datec}</td>
                            <td>{tConvert(item.StartTime)}</td>
                            <td>{tConvert(item.EndTime)}</td>
                            <td><a className = "delete-link" onClick={() => DeleteData(item._id)}><img src ={DeleteIcon}/></a></td>
                        </tr>
                    )
                })}
                <tr>
                    <td></td>
                    <td><input className = "text-input" type = "text" value = {MeetingName} onChange = {e => setMeetingName(e.target.value)}/></td>
                    <td><input className = "text-input" type = "text" value = {NumberPeople} onChange = {e => setNumberPeople(e.target.value)}/></td>
                    <td><input className = "date-input" type = "date" value = {Date} onChange = {e => setDate(e.target.value)}/></td>
                    <td><input className = "date-input" type = "time" value = {StartDate} onChange = {e => setStartTime(e.target.value)}/></td>
                    <td><input className = "date-input" type = "time" value = {EndDate} onChange = {e => setEndTime(e.target.value)}/></td>
                    <td><input className = "text-input" type = "button" className="add-button" value= "Add" onClick= {AddData}/></td>
                </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Table
