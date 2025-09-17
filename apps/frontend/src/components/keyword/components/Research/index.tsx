import Title from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/Title';
import SearchAlatLayout from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/SearchAlatLayout';
import { useState } from 'react';
import ResearchForm from './ResearchForm';
import ResearchTable from './ResearchTable';

const Research = () => {
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <>
      <SearchAlatLayout
        className="justify-center"
        header={
          <div className="flex justify-center">
            <Title
              className="text-center items-center"
              title="Explore Thousands of Keywords"
              subtitle="Simplify keyword research with Search Volume, CPCs, Keyword Difficulty and other essential metrics"
              gradientFrom="#2ecc71"
              gradientTo="#3a8bfd"
            />
          </div>
        }
        main={<ResearchForm />}
        table={<ResearchTable />}
        tableClassName="bg-transparent"
        isTableView
        showOverlay
        footer={<></>}
      />
    </>
  );
};

export default Research;
