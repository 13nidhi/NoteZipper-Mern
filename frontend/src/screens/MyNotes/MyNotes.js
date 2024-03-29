import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {Accordion, Button, Card, Badge} from "react-bootstrap";
import MainScreen from '../../components/MainScreen';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { deleteNoteAction, listNotes } from '../../actions/notesActions';
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from 'react-router-dom';

const MyNotes = ({search}) => { 
  const dispatch = useDispatch();
  
  const noteList = useSelector(state => state.noteList);
  const {loading, notes, error} = noteList;

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate  } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {loading: loadingDelete, error: errorDelete, success: successDelete} = noteDelete;

  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")){
      dispatch(deleteNoteAction(id));
    }
  }

  const navigate = useNavigate(); 
 
  console.log(notes);

    useEffect(() => {
     dispatch(listNotes());
     if(!userInfo) {
      navigate('/');
     }
    }, [dispatch, successCreate, navigate, userInfo, successUpdate, successDelete]); 

  return (
    <MainScreen title={`welcome back ${userInfo.name}...`}>
        <Link to="/createnote">
          <Button style={{marginLeft: 10, marginBottom: 6}} size="lg">
            Create new Note
          </Button>
        </Link>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          { notes?.reverse()
          .filter((filteredNote) => 
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          ).map(note=>(
            <Accordion key={note._id} defaultActiveKey="0">
              <Card style={{margin: 10}}>
                <Card.Header style={{display: "flex"}}>
                  <span style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18
                  }}>
                    <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                      {note.title}
                    </Accordion.Toggle>
                  </span>
                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
                  </div>
                </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <h4>
                    <Badge variant="success">
                        category - {note.category}
                    </Badge> 
                  </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created on {" "}
                        <cite title="Source Title">
                          {note.createdAt.susbstring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                </Card.Body>    
            </Accordion.Collapse>
              </Card>
            </Accordion>
            ))
          }
    </MainScreen>
  )
}

export default MyNotes
