import { FC } from 'react';

interface Props {
  activeStep: string;
}

const ProcessContent: FC<Props> = ({ activeStep }) => {
  const content = {
    'ideation': 'During this phase, we gather information about your company. We want to learn about your business goals, target audience, unique value proposition, current state, and vision for future development. Together with your team, we collect all the necessary data and meet your needs by conducting a workshop. As a result, we create a list of assumptions validated in the research phase. From the beginning, we search for possible sustainable solutions for your web presence and recommend them to you.',
    'discovery': 'Content for Discovery...',
    'ux-design': 'Content for UX Design...',
    'ui-design': 'Content for UI Design...',
    'development': 'Content for Development...'
  };

  return <div className='text-xl w-[720px]'>{content[activeStep]}</div>;
}

export default ProcessContent;