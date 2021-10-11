import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Col,
  Row,
  Button,
} from "reactstrap";
import { ChevronDown, Search, Plus } from "react-feather";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Card, DataTable } from "../../../components";

import OptionButton from "./components/OptionButton";
import CustomPagination from "./components/CustomPagination";
import UserRow from "./components/UserRow";

import UserServices from "../../../services/UserServices";

import "./styles.scss";

const Users = () => {
  const [ users, setUsers ] = useState([]);
  const [ filter, setFilter ] = useState('');
  const [ currentPage, setCurrentPage ] = useState(false);
  const history = useHistory();
  const MySwal = withReactContent(Swal);

  const handleClickUser = ({ id }) => {
    history.push("/tasks/" + id);
  };

  const createUser = () => {
    history.push("/users/create");
  };

  const viewUser = ({ id }) => {
    console.log("VIEW: " + id);
  };

  const deleteUser = ({ id }) => {
    MySwal.fire({
      title: 'Atenção',
      html: 'Tem certeza que deseja deletar esse usuário?',
      icon: 'question',
      footer: 'Ao confirmar, não será possível reverter essa ação.',
      confirmButtonColor: '#24d15d',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      confirmButtonText: 'Deletar',
    }).then((data) => {
      if(data.isConfirmed) {
        UserServices.delete(id).then(({ data }) => {
          load();
        });
      }
    })
  };

  const handlePagination = ({ selected }) => {
    setCurrentPage(cur => cur + 1);
  };

  const load = () => {
    UserServices.get({
      name: filter
    }).then(({ data }) => {
      setUsers(data || []);
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    load();
  }

  useEffect(() => {
    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row className="users-list">
      <Col md={12}>
        <Card className="p-0 border-none">
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <InputGroup className="card-filter">
                <Input placeholder="Pesquisar..." value={filter} onChange={e => setFilter(e.target.value)} />
                <InputGroupAddon addonType="append">
                  <Button type="submit" className="user-search-button" color="secondary" onClick={load}>
                    <Search size={16} />
                  </Button>
                </InputGroupAddon>
                <Button type="button" className="user-cad-button" color="primary" onClick={createUser}>
                  <Plus size={19} />
                  <span>Cadastrar</span>
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Card>
      </Col>
      <Col md={12}>
        <Card className="p-0">
          <DataTable
            pagination
            paginationServer
            striped
            pointerOnHover
            sortIcon={<ChevronDown />}
            paginationComponent={() => (
              <CustomPagination
                currentPage={currentPage || users.current_page || 1}
                perPage={users.per_page}
                totalPages={users.last_page}
                handlePagination={handlePagination}
              />
            )}
            columns={[
              {
                name: "Nome",
                selector: (row) => row.name,
                cell: (row) => <UserRow row={row} />,
                sortable: true,
              },
              {
                name: "",
                sortable: false,
                cell: (row) => (
                  <OptionButton
                    row={row}
                    open={viewUser}
                    destroy={deleteUser}
                  />
                ),
              },
            ]}
            data={users.data}
            onRowClicked={handleClickUser}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Users;
