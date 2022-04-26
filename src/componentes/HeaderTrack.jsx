import React, { Component } from 'react';
import logoSVG from '../files/svg/logo.svg'

export function HeaderTrack(){ 

        return (
            <>
            <nav class="navbar bg-light justify-content-center p-0">
            <a class="navbar-brand" href="#">
              <img src={logoSVG} width="150" height="80"/>
            </a>
          </nav>
            </>
        )

}