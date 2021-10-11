import React, { useState } from "react";

import { X } from "react-feather";
import { Button, Col } from "reactstrap";
import { toast } from "react-toastify";
import TaskCard from "./TaskCard";

import TaskServices from "../../../services/TaskServices";

const StatusList = ({ data, tasks, open, fetch }) => {
  const [title, setTitle] = useState("");
  const [isNewCard, setIsNewTask] = useState(false);

  const create = () => {
    if(!title) {
      toast.error('Por favor, informe o título da tarefa');
      return;
    };

    TaskServices.create({
      title,
      status: data.id
    }).then(() => {
      fetch();
      setTitle("");
      setIsNewTask(false);
      toast.success('Tarefa criada com sucesso');
    }).catch(() => {
      setIsNewTask(true);    
      toast.error('Ops! Ocorreu um erro ao criar a tarefa');    
    });
  };

  const handleNewTask = (state) => setIsNewTask(state);

  return (
    <>
      <Col className="tasks-col" xs={11} sm={6} md={5} lg={3} xl={3}>
        <div className="task-list">
          <div className="task-status">
            <p className="task-statusName">{data.name || ""}</p>
            <p className="task-statusCount">{tasks.length}</p>
          </div>

          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task.id}
              name={task.title}
              user={task.user || {}}
              description={task.description || ""}
              open={() => open(task)}
            />
          ))}
        </div>

        {!isNewCard ? (
          <Button
            className="task-btnNovaTask"
            outline
            size="sm"
            color="primary"
            onClick={() => handleNewTask(true)}
          >
            + Nova tarefa
          </Button>
        ) : (
          <div className="task-divNewCard">
            <textarea
              autoFocus
              className="form-control mb-2 task-novoTitulo"
              placeholder="Digite um título para essa tarefa"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              className="me-2 task-btnSalvarNovaTask"
              size="sm"
              color="primary"
              onClick={create}
            >
              Salvar
            </Button>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => handleNewTask(false)}
            >
              <X size={14} />
            </Button>
          </div>
        )}
      </Col>
    </>
  );
};

export default StatusList;
