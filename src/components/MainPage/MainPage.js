import { Button, Card, CardContent, Container } from '@material-ui/core'
import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import ServerUrl from '../../ServerUrl'
import {
    useHistory,Link
  } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateFormId } from '../../redux/actions';

export default function MainPage() {
    let history = useHistory()
    const dispatcher=useDispatch()
    const [forms,setForms]=useState([])
    useEffect(async() => {
        const url=ServerUrl+'getUserForms'
        const response=await axios.post(url,{
            authToken:localStorage.getItem('auth-token')
        })
        console.log(response.data)
        setForms(response.data)
        return () => {
            
        }
    }, [])
    const setForm=(id)=>{
        dispatcher(updateFormId(id))
        history.push('/form')
    }
    const createForm=async()=>{
        const url=ServerUrl+'createForm'
        const response=await axios.post(url,{
            authToken:localStorage.getItem('auth-token')
        })
        dispatcher(updateFormId(response.data.id))
        
        history.push('/form')
        
    }
    return (
        <Container>
            {  console.log(forms)}
            <Card style={{marginTop:"10px"}}>
                <CardContent>Create Document</CardContent>
                <Button color="primary" onClick={createForm} >Create Form</Button>
            </Card>
            {
              

                forms.map(form=>{
                    return(
                    <Card style={{marginTop:"10px"}}>
                        <CardContent>{form.title || "untitled"}</CardContent>
                        <Button color="primary" onClick={()=>{setForm(form.id)}} >Edit</Button>
                    </Card>)
                })
            }
        </Container>
    )
}
