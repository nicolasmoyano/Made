import { FC } from 'react';

interface Props {
  activeStep: string;
  setActiveStep: (step: string) => void;
}

const ProcessSidebar: FC<Props> = ({ activeStep, setActiveStep }) => {
  const steps = [
    { id: 'ideation', label: '01. Ideation' },
    { id: 'discovery', label: '02. Discovery' },
    { id: 'ux-design', label: '03. UX Design' },
    { id: 'ui-design', label: '04. UI Design' },
    { id: 'development', label: '05. Development' }
  ];

  return (
    <div>
      <ul className='text-3xl Sidebar'>
        {steps.map(step => (
          <li className='pb-4 text-gray-700' key={step.id}>
            <a
              href="#"
              className={step.id === activeStep ? 'active underline text-white' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActiveStep(step.id);
              }}
            >
              {step.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProcessSidebar;