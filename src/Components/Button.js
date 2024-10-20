import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const testUrl = ""
const testName = "Rofl"


const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Daten laden
    </button>
  );
};

export default Button;
