"use client"
import { useState, FC } from 'react';
import ProcessSidebar from './ProcessSidebar';
import ProcessContent from './ProcessContent';
import "./Process.css";

const Process: FC = () => {
  const [activeStep, setActiveStep] = useState('ideation');

  return (
    <div className='flex flex-col container'>
      <h2 className='text-6xl pb-12'>Whats the <span className='text-lime-400'>process?</span></h2>
      <div className='flex w-[1440px]'>
        <div className='w-1/4'>
      <ProcessSidebar activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
        <div className='w-3/4'>

      <ProcessContent activeStep={activeStep} />
        </div>
      </div>
    </div>
  );
}

export default Process;