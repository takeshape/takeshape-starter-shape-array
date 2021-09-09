import React, { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  background?:string;
};
;
const Background = (props: IBackgroundProps) => (
  <>
    <div className={props.color}>{props.children}</div>
    { 
      props.background && 
      <img style={{margin:'auto'}} src={props.background}/>
    }
  </>
);

export { Background };
