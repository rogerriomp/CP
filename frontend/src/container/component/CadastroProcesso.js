import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';


const { TabPane } = Tabs;


class CadastroProcesso extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
     

    }

  
  }



  render() {
    return (
      <div>
        <Modal
          width={600}
          title="Cadastro de Agências"
          visible={this.state.visible}
          footer={[
            <Button key="back" onClick={(e) => this.CloseModal()}>
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={this.cadastrar}>
              Cadastrar
            </Button>,
          ]}
        >
          <Tabs onChange={console.log()} type="card">
            <TabPane tab="Dados do Agência" key="1">
            <p>TESTE</p>
            </TabPane>
            <TabPane tab="Endereço" key="3">
             <p>TESTE</p>

            </TabPane>

            <TabPane tab="Contato" Key='4'>
            <p>TESTE</p>
            </TabPane>



          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default CadastroProcesso;