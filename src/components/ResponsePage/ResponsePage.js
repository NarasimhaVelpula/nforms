import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ServerUrl from '../../ServerUrl'
import Loader from '../body/Loader/Loader';
import { Tab } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {

  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ResponsePage() {
  const classes = useStyles();
  const formId=useSelector((state)=>{return state.form.id})
  const arr=["c","python"]
  const [response,setResponse]=useState()
  useEffect(()=>{
      const url=ServerUrl+'getResponses'
      axios.post(url,{authToken:localStorage.getItem('auth-token'),formId:formId})
      .then((response)=>{
          setResponse(response.data)
      })
  },[])
    

  return (
      <>
      {response?
    <TableContainer component={Paper}>
        <h1>{response.title}</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
              {response.questions.map(question=>{
                  return(
                      <TableCell align="right">
                          {question.question}
                      </TableCell>
                  )
              })}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {response.responses.map((response,id) => (
            <TableRow key={id}>
              {
                  
                  response.map((res,id1)=>{
                      
                    return(
                        <TableCell align="right">
                            {res}
                        </TableCell>
                    )  
                  })
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>:<Loader />}
    </>
  );
}
