import React from 'react';
import App from 'next/app';
import UserContext from '../components/UserContext';
import Router from 'next/router';

export default class MyApp extends App {
    state = {
        user: null,
        isLoggedIn: false
      };        

      toggleLoginButton= () => {
          console.log("clicked", this.state.isLoggedIn)
          
          this.setState({
              isLoggedIn: !this.state.isLoggedIn
          })
          console.log("after state change", this.state.isLoggedIn)
      }  

      signIn = (username) => {
        localStorage.setItem('coolapp-user', username);
    
        this.setState(
          {
            user: username
          },
          () => {
            Router.push('/');
          }
        );
      };
    
      signOut = () => {
        localStorage.removeItem('coolapp-user');
        this.setState({
          user: null
        });
        Router.push('/login');
      };

      canView = () => {
          if (this.state.user) Router.push('/articles');
          Router.push('/login');    
      }

      render() {
        const { Component, pageProps } = this.props;
    
        return (
          <UserContext.Provider value={{ user: this.state.user, signIn: this.signIn, signOut: this.signOut, isLoggedIn: this.state.isLoggedIn, toggleLoginButton: this.toggleLoginButton, canView: this.canView}}>
            <Component {...pageProps} />
          </UserContext.Provider>
        );
      }
    }