import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Form, FormGroup, Input, Col, Row, Button } from "reactstrap";
import { toast } from 'react-toastify';

import { Card } from "../../../components";

import UserServices from "../../../services/UserServices";

const Users = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const defaultData = {
    id: 0,
    name: "",
    email: "",
  };

  const onChange = (e) => {
    e.persist();

    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (user.id) {
      UserServices.update(user.id, user)
      .then(() => {
        toast.success('Usuário editado com sucesso');
      })
      .catch(() => {
        toast.error('Ops! Tivemos um erro ao editar o seu usuário');
      });
    } else {
      UserServices.create(user)
        .then(() => {
          history.push("/users");
        })
        .catch(() => {
          toast.error('Ops! Tivemos um erro ao criar o seu usuário');
        });
    }
  };

  const loadUser = () => {
    if (id) {
      UserServices.show(id).then(({ data }) => {
        setUser(data || defaultData);
      });
    } else {
      setUser(defaultData);
    }
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <Form onSubmit={onSubmit}>
        <Row className="users-edit">
          <Col md={12}>
            <FormGroup className="mb-2">
              <Input
                name="name"
                placeholder="Nome completo"
                value={user?.name || ""}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup className="mb-2">
              <Input
                name="email"
                placeholder="E-mail"
                value={user?.email || ""}
                onChange={onChange}
              />
            </FormGroup>
          </Col>
          <Col md={12} className="text-end mt-2">
            <Button
              type="button"
              outline
              color="secondary"
              className="me-2"
              onClick={() => history.goBack()}
            >
              Voltar
            </Button>
            <Button type="submit" color="primary">
              Salvar
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Users;
