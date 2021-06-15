import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button, 
} from 'reactstrap'
const AddUser = () => {

    const [name, setName] = useState("")
    
    const { addUser } = useContext(GlobalContext)
    const history = useHistory()

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }

        addUser(newUser)

        history.push('/')
    }

    const onChange = (e) => {
        setName(e.target.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup style={{ marginBottom: "15px" }}>
                <Label style={{ marginBottom: "10px" }}>Name</Label>
                <Input type="text" onChange={onChange} placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</Link>
        </Form>
    )
}

export default AddUser
