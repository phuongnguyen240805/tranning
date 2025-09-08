import { useState } from 'react';
import Title from '../components/Title';
import SearchAlatLayout from '../SearchAlatLayout';
import TopicalMapsTable from './TopicalMapsTable';
import { ModalWrapper } from '../components/ModalWrapper';
import CreateTopicalMap from './CreateTopicalMap';

const TopicalMaps = () => {
  const [dialogOpened, setDialogOpened] = useState(false);

  const topicData = [
    {
      url: 'https://neoinversionista.com/',
      keyword: 'inversiones, trading, neoinversionista',
      topicCount: 150,
      edge: 0,
      created: 0,
      published: 0,
    },
    {
      url: 'https://neoinversionista.com/',
      keyword: 'macro inversionista',
      topicCount: 150,
      edge: 0,
      created: 0,
      published: 0,
    },
    {
      url: 'https://neoinversionista.com/invertir-en-acciones-financieros/',
      keyword: 'invertir en acciones',
      topicCount: 150,
      edge: 0,
      created: 0,
      published: 0,
    },
    {
      url: 'https://neoinversionista.com/',
      keyword: 'macro inversionista',
      topicCount: 150,
      edge: 0,
      created: 0,
      published: 0,
    },
  ];

  return (
    <>
      <ModalWrapper
        opened={dialogOpened}
        onClose={() => setDialogOpened(!dialogOpened)}
        width="750px"
        height="100vh"
        showCloseButton={false}
        className="p-0"
        padding="0px 0px"
        title="Create Topical Map"
      >
        <div className="flex max-w-[750px] p-0">
          <CreateTopicalMap setDialogOpened={setDialogOpened}/>
        </div>
      </ModalWrapper>

      <SearchAlatLayout
        // 🔹 HEADER SLOT
        header={
          <Title
            title="Topical Maps"
            subtitle="The AI Topical Map generator tool automatically creates detailed visual representations of related topics, helping users identify 
            key content areas and optimize their SEO strategy."
            gradientFrom="#2ecc71"
            gradientTo="#3a8bfd"
          />
        }
        // 🔹 MAIN SLOT (search + filters)
        main={
          <button
            onClick={() => setDialogOpened(true)}
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold px-5 py-2 rounded flex items-center gap-2 transition text-[15px]"
            type="button"
          >
            <span className="text-lg">+</span>Create Topical Map
          </button>
        }
        // TABLE
        table={<TopicalMapsTable />}
        isTableView
        showOverlay
        footer={<></>}
      />
    </>
  );
};

export default TopicalMaps;
