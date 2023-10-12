import { useEffect, useState } from "react"

export default function UserPortal(){

    const [loading, setLoading] = useState(true);
    const [requests, setRequests] = useState();

    useEffect(() => {
        fetch(`https://localhost:7200/api/GetByIdFiltered/1`, {
            method: "GET"
        }).then(result => result.json())
        .then(serverResponse => {
            console.log(serverResponse.data);
            setLoading(false);
            setRequests(serverResponse.data)
        }).catch(error => {
            console.log(error);
        })
    },[])

    if(loading){
        return (
            <p>Content Is Loading...</p>
        )
    }
    else {
        return (
            <>
            <div className="container">
            <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {requests.map(item => (
            <tr key={item.id}>
                <td>{item.period.toString()}</td>
                <td>{item.period.toString()}</td>
                <td>{item.period.toString()}</td>
            </tr>
        ))
        }
      </tbody>
    </table>
            </div>
            </>
        )
    }
}