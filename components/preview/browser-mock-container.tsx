import React from 'react';

type Props = {
  children: React.ReactNode;
};

const BrowserMockContainer = ({ children }: Props) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl">
      <div className="bg-gray-300 border border-gray-300 rounded-t-lg flex items-stretch">
        <div className="px-4 pt-4 pb-3 mr-4 text-sm flex-0 text-gray-400 whitespace-no-wrap">
          <i className="mx-1 rounded-full w-3 h-3 bg-gray-400 inline-block"></i>
          <i className="mx-1 rounded-full w-3 h-3 bg-gray-400 inline-block"></i>
          <i className="mx-1 rounded-full w-3 h-3 bg-gray-400 inline-block"></i>
        </div>
        <div className="relative px-4 py-2 mt-2 -mb-px flex-0 border-t border-gray-300 bg-gray-100 rounded-t-lg">
          <div
            className="absolute bottom-0 w-4 h-8 border-b border-r border-gray-300 bg-gray-300 rounded-br-lg sh"
            style={{ right: '100%;' }}
          ></div>

          <div className="text-sm overflow-hidden pt-1 w-56 whitespace-no-wrap ">
            Signature Preview
          </div>

          <span
            className="absolute h-full rounded-tr-lg top-0 right-0 m-px w-1/2"
            style={{
              background:
                'linear-gradient(to right, rgba(247, 250, 252, 0.0) 0%,rgb(247, 250, 252) 80%);',
            }}
          ></span>

          <div className="text-gray-500 absolute top-0 right-0 pt-3 pr-2 text-xs">
            <svg
              className="mx-px w-4 h-4 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <div
            className="absolute bottom-0 w-4 h-8 border-b border-l border-gray-300 bg-gray-300 rounded-bl-lg sh"
            style={{ left: '100%;' }}
          ></div>
        </div>
      </div>
      <div className="bg-gray-100 border-l border-r border-b border-gray-300 flex flex-col py-4 px-8">
        <div className="text-sm text-gray-500 font-light border-b border-gray-300 py-2 w-full">
          <span className="mr-2 text-xs">To:</span>
          <span className="border border-gray-300 rounded-full py-1 px-2 shadow">
            James Smith
          </span>
        </div>
        <div className="text-sm text-gray-500 font-light border-b border-gray-300 py-2 w-full">
          <span className="mr-2 text-xs">Subject:</span>
          <span className="text-gray-800 font-normal">
            Hey James, check out my new signature
          </span>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
};

export default BrowserMockContainer;
