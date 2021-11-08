import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

import CadastroProcesso from './container/component/CadastroProcesso'

export class Routes extends Component {
    state = {
        theme: 'dark',
        current: '1',
      };
    
      changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render() {
        return (
                <Switch>
                    <Route exact path='/' component={""}/>
                    <Route exact path='/cadprocesso' component={CadastroProcesso}/>
                  

                </Switch>


        )
    }
};

export default Routes;