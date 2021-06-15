import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

const UserList = () => {

    const { users, removeUser } = useContext(GlobalContext)

    return (

        
        <ListGroup style={{maxWidth:"30rem", margin: "4px auto"}}>
            {users.length > 0 ? (
                <>
                    {
                        users.map( user => {
                            return <ListGroupItem key={user.id} className="d-flex" style={{ justifyContent: "space-between" }}>
                                <strong>{user.name}</strong>
                                <div className="ml-auto">
                                    <Link className="btn btn-warning" style={{ marginRight: "10px" }} to={`/edit/${user.id}`}>Edit</Link>
                                    <Button onClick={ () => removeUser(user.id) } color="danger">Delete</Button>
                                </div>
                            </ListGroupItem>
                        } )
                    }
                </>
            ) : (
                <h4 className="text-center">No User</h4>
            )}
        </ListGroup>
    )
}

export default UserList
