import Title from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/Title';
import SearchAlatLayout from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/SearchAlatLayout';
import MagicToolForm from './MagicToolForm';
import MagicToolTable from './MagicToolTable';

const MagicTool = () => {
  return (
    <>
      <SearchAlatLayout
        className="justify-start"
        // 🔹 HEADER SLOT
        header={
          <div className="flex justify-start">
            <Title
              title="Keyword Magic Tool"
              subtitle="Simplify keyword research with Search Volume, CPCs, Keyword Difficulty
  and other essential metrics"
              gradientFrom="#2ecc71"
              gradientTo="#3a8bfd"
            />
          </div>
        }
        // 🔹 MAIN SLOT (search + filters)
        main={<MagicToolForm />}
        // // 🔹 TABLE SLOT
        table={<MagicToolTable />}
        tableClassName="bg-transparent"
        mainStyle='ml-[144px]'
        isTableView
        showOverlay
        footer={<></>}
      />
    </>
  );
};

export default MagicTool;
