import React from 'react';
import Button from '../button';
import BrowserMockContainer from './browser-mock-container';

const Preview = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-10/12 max-w-3xl">
        <BrowserMockContainer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          id, vitae minus adipisci minima nisi, amet animi neque voluptatibus ut
          a maiores dolor provident quia alias incidunt. Dolorum, eligendi
          culpa.
        </BrowserMockContainer>

        <div className="mt-10 flex justify-between">
          <Button className="bg-indigo-500 hover:bg-indigo-400 text-white border-indigo-700 px-12 py-4 w-full mr-4">
            Copy HTML
          </Button>
          <Button className="bg-green-500 hover:bg-green-400 text-white border-green-700 px-12 py-4 w-full">
            Generate HTML
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
