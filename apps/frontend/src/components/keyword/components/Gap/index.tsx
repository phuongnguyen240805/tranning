import Title from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/Title';
import SearchAlatLayout from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/SearchAlatLayout';
import GapForm from './GapForm';
import GapTable from './GapTable';

const Gap = () => {
  return (
    <>
      <SearchAlatLayout
        className="justify-start"
        // 🔹 HEADER SLOT
        header={
          <div className="flex justify-start">
            <Title
              title="Reveal opportunities with Keyword Gap"
              subtitle="Enter up to 6 sites to compare performance and reveal keywords that your competitors are ranking for but your site is not."
              gradientFrom="#2ecc71"
              gradientTo="#3a8bfd"
            />
          </div>
        }
        // 🔹 MAIN SLOT (search + filters)
        main={<GapForm />}
        // // 🔹 TABLE SLOT
        table={<GapTable />}
        tableClassName="bg-transparent"
        mainStyle="ml-[144px]"
        isTableView
        showOverlay
        footer={<></>}
      />
    </>
  );
};

export default Gap;
