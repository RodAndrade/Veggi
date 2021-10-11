import React, { useState, useEffect } from "react";

import Sheet from "react-modal-sheet";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Col,
  Row,
} from "reactstrap";

import { AlignLeft, CheckSquare, User, Tag } from "react-feather";
import { toast } from "react-toastify";

import "./TaskModal.styles.scss";

import TaskServices from "../../../services/TaskServices";

const TaskModal = ({ isModalOpen, setIsModalOpen, close, task, status, users, callback }) => {
  const [data, setData] = useState(task);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!data.title) {
      toast.error('Por favor, informe o título da tarefa');
      return;
    };  

    TaskServices.update(data.id, {
      user_id: data.person_id || null,
      title: data.title,
      description: data.description,
      status: data.status
    }).then((response) => {
      toast.success('Tarefa atualizada com sucesso');
      setIsModalOpen(false);
      callback();
    }).catch((error) => {
      toast.error('Ops! Tivemos um erro ao atualizar sua tarefa, por favor, tente novamente');
    });
  }

  const onChange = (e) => {
    e.persist();

    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setData(task);
  }, [task]);

  return (
    <Sheet
      className="task-modal"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onCloseStart={close}
      rootId="root"
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content
          style={{
            padding: "10px 25px",
          }}
        >
          <Row>
            <form onSubmit={onSubmit}>
              <Col className="task-right" md={12}>
                <div className="task-user">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <User size={24} />
                    </InputGroupAddon>
                    <Input
                      type="select"
                      name="person_id"
                      value={data?.person_id || task?.user?.id || ""}
                      onChange={onChange}
                    >
                      <option key={0} value="">
                        Usuário
                      </option>
                      {users.map((us) => (
                        <option key={us.id} value={us.id}>
                          {us.name}
                        </option>
                      ))}
                    </Input>
                  </InputGroup>
                </div>
                <div className="task-tag">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <Tag size={24} />
                    </InputGroupAddon>
                    <Input
                      type="select"
                      name="status"
                      value={data?.status || ""}
                      onChange={onChange}
                    >
                      {status.map((st) => (
                        <option key={st.id} value={st.id}>
                          {st.name}
                        </option>
                      ))}
                    </Input>
                  </InputGroup>
                </div>
              </Col>
              <Col className="task-left" md={12}>
                <div className="task-title">
                  <CheckSquare size={24} />
                  <Input
                    name="title"
                    value={data.title || ""}
                    onChange={onChange}
                  />
                </div>
                <div className="task-description">
                  <AlignLeft size={24} />
                  <textarea
                    className="form-control"
                    name="description"
                    value={data.description || ""}
                    onChange={onChange}
                  />
                </div>
                <div className="task-actions">
                  <Button
                    outline
                    type="button"
                    color="danger"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="ms-2"
                    color="primary"
                  >
                    Salvar
                  </Button>
                </div>
              </Col>
            </form>
          </Row>
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop onClick={() => setIsModalOpen(false)} />
    </Sheet>
  );
};

export default TaskModal;
