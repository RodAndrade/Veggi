import React, { useEffect, useState } from "react";

import { Trash } from "react-feather";
import { toast } from "react-toastify";
import { Button, Card, CardBody } from "reactstrap";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Avatar } from "../../../components";

import TaskServices from "../../../services/TaskServices";

import "./TaskCard.styles.scss";

const TaskCard = ({ task, name, description, user, open }) => {
  const [deleteCard, setDeleteCard] = useState(false);
  const [hideCard, setHideCard] = useState(false);

  const MySwal = withReactContent(Swal);

  const handleDelete = (next) => {
    TaskServices.delete(task).then(() => {
      next();
      toast.success('Tarefa deletada com sucesso');
    }).catch(() => {
      setDeleteCard(false);
      toast.error('Ops! Tivemos um erro ao deletar sua task, por favor, tente novamente');
    });
  }

  const hideTask = (e) => {
    e.stopPropagation();

    MySwal.fire({
      title: 'Atenção',
      html: 'Tem certeza que deseja deletar essa tarefa?',
      icon: 'question',
      footer: 'Ao confirmar, não será possível reverter essa ação.',
      confirmButtonColor: '#24d15d',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      confirmButtonText: 'Deletar',
    }).then((data) => {
      if(data.isConfirmed) {
        handleDelete(() => {
          setDeleteCard(true);
        });
      }
    });
  }

  useEffect(() => {
    if (deleteCard) {
      setTimeout(() => {
        setHideCard(true);
      }, 500);
    }
  }, [deleteCard]);

  return (
    <>
      {!hideCard && (
        <Card
          className={`task-card ${deleteCard ? "delete" : ""} ${
            hideCard ? "hide" : ""
          }`}
          onClick={open}
        >
          <CardBody className="task-cardbody">
            <Button
              color="transparent"
              className="task-btnDeleteTask"
              onClick={hideTask}
            >
              <Trash size={12} />
            </Button>
            <p className="task-name">{name || ""}</p>
            <p className="task-description">{description || ""}</p>
            {(user.avatar || user.name) && (
              <Avatar className="task-user" hover id={`taskAvatar-${task}`} src={user?.avatar || ''} name={user?.name || ''}/>
            )}
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default TaskCard;
