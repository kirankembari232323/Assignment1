import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function UsersDetails(props) {
  const { id } = useParams();
  const[user, setUser] = useState([])
  useEffect(()=>{
    axios.get(`https://reqres.in/api/users/${id}`).then((response)=>{
        setUser(response?.data?.data)
    })
},[id])
  return (
    <div style={{ backgroundColor: '#9de2ff', height: "100vh"  }}>
      <div className="justify-content-center">
      <div className="d-flex text-black card-cont">
                <div className="flex-shrink-0">
                <img style={{ width: '180px', borderRadius: '10px' }} src={user?.avatar} alt={user?.first_name}/>
                </div>
                <div className="flex-grow-1 ms-3">
                  <div>{user?.first_name} </div>
                  <div>{user?.email} </div>

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="small text-muted mb-1">Id</p>
                      <p className="mb-0">{user?.id} </p>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">First Name</p>
                      <p className="mb-0">{user?.first_name} </p>
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Last Name</p>
                      <p className="mb-0">{user?.last_name} </p>
                    </div>
                  </div>
                  </div>
                  </div>
      </div>
  </div>

  );
}

export default UsersDetails;
