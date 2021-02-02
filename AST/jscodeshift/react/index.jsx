import * as React from 'react';
import styles from './index.module.scss';
import { Button } from "../react1/node_modules/@alifd/next";


const Button1 = () => {
  return (
    <div>
      <h2>转译前</h2>
      <div>
        <Button type="normal">Normal</Button>
        <Button type="primary">Prirmary</Button>
        <Button type="secondary">Secondary</Button>
        

        <Button type="normal" text>Normal</Button>
        <Button type="primary" text>Primary</Button>
        <Button type="secondary" text>Secondary</Button>
        

        <Button type="normal" warning>Normal</Button>
      </div>
    </div>
  );
};