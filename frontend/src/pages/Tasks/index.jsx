import React, { useState, useEffect } from "react";
import {
  Link,
  useParams
} from "react-router-dom";

import { Col, Row } from "reactstrap";
import { toast } from 'react-toastify';

import { Avatar } from "../../components";
import StatusList from "./components/StatusList";
import TaskModal from "./components/TaskModal";
import { X } from "react-feather";

import TaskServices from "../../services/TaskServices";
import UserServices from "../../services/UserServices";

import "./styles.scss";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsModalOpen(openTask ? true : false);
  }, [openTask]);

  const load = async () => {
    TaskServices.get({
      user: params?.user || null
    }).then(({ data }) => {
      setTasks(data || []);
    }).catch(() => {
      toast.error('Ops! Tivemos um erro para buscar as tarefas');
      setTasks([]);
    })
  }

  const getUsers = () => {
    UserServices.get()
      .then(({ data }) => {
        setUsers(data?.data || []);
      })
      .catch(() => {
        toast.error("Ops! Tivemos um erro ao buscar usuários");
      });
  };

  const status = [
    {
      id: "pendente",
      name: "Pendente",
    },
    {
      id: "fazendo",
      name: "Fazendo",
    },
    {
      id: "teste",
      name: "Em Teste",
    },
    {
      id: "feito",
      name: "Feito",
    },
  ];

  useEffect(() => {
    load();
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tasks-page p-2">
      <Row className="tasks-row mx-0 px-0">
        <Col md={12} className="px-0">
          <div className="tasks-header">
            <h1>Tarefas</h1>
            <div className="tasks-headerUsers">
              {users.map((us) => {
                return (!params?.user || Number(params?.user) === us.id) && (
                  <Link
                    to={`/tasks/${us.id}`}
                    className="task-avatarLink"
                  >
                    <Avatar innerClass="mb-0" id={`avatarFilter-${us.id}`} tooltipPosition="left" name={us.name}  onClick=""/>
                  </Link>
                )
              })}
              {params?.user && (
                <Link
                  to={`/tasks`}
                  className="task-limparFiltros"
                >
                  <X size={12}/> Limpar filtros
                </Link>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row className="tasks-row flex-nowrap tasks-scroll mx-0 px-0">
        {status.map((st) => (
          <StatusList
            key={st.id}
            data={st}
            open={setOpenTask}
            tasks={tasks.filter((elem) => elem.status === st.id)}
            fetch={load}
          />
        ))}
      </Row>
      <TaskModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        task={openTask}
        close={() => setOpenTask(false)}
        status={status}
        users={users}
        callback={load}
      />
    </div>
  );
};

export default Tasks;
