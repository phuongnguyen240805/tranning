import { SearchAlatIcons } from '../icon';

export interface Article {
  id: string | number;
  title: string;
  subtitle: string;
  folder: string;
  domain?: string;
  status: string;
  wpSync: string;
  tm?: boolean;
  targetKwds?: number;
  wordCount?: number;
  createdOn?: string;
  assignee?: string;
  dueOn?: string;
}

export const mockArticles: Article[] = [
  {
    id: 92833,
    title: 'Mejora Tu Trading: Estrategias para Invertir con Éxito',
    subtitle: 'Created from Scratch',
    folder: 'Topic Map',
    domain: 'neuroinversionista.com',
    status: 'Needs review',
    wpSync: 'Success',
    targetKwds: 2,
    wordCount: 2877,
    createdOn: '15 Aug',
    assignee: 'Otto',
    dueOn: '25 Aug',
  },
  {
    id: 92834,
    title: 'Psicología del Inversionista y sus impactos en Inversiones',
    subtitle: 'Created from Scratch',
    folder: 'Topic Map',
    domain: 'neuroinversionista.com',
    status: 'Needs review',
    wpSync: 'Success',
    targetKwds: 2,
    wordCount: 3859,
    createdOn: '15 Aug',
    assignee: 'Otto',
    dueOn: '25 Aug',
  },
  {
    id: 92835,
    title: 'the mercer brand',
    subtitle: 'Created from Scratch',
    folder: 'Select Folder',
    domain: '',
    status: 'In Progress',
    wpSync: '',
    targetKwds: 2,
    wordCount: 589,
    createdOn: '18 Aug',
    assignee: 'Otto',
    dueOn: '25 Aug',
  },
  {
    id: 92836,
    title: 'fungo na pele',
    subtitle: 'Created from Scratch',
    folder: 'Select Folder',
    domain: '',
    status: 'Needs review',
    wpSync: '',
    targetKwds: 2,
    wordCount: 3080,
    createdOn: '16 Aug',
    assignee: 'Otto',
    dueOn: '25 Aug',
  },
  {
    id: 92837,
    title: 'carcinoma de células escamosas da pele',
    subtitle: 'Created from Scratch',
    folder: 'Select Folder',
    domain: '',
    status: 'Needs review',
    wpSync: '',
    targetKwds: 2,
    wordCount: 2284,
    createdOn: '16 Aug',
    assignee: 'Otto',
    dueOn: '25 Aug',
  },
  {
    id: 92838,
    title: 'doenças de pele',
    subtitle: 'Created from Scratch',
    folder: 'Select Folder',
    domain: '',
    status: 'Needs review',
    wpSync: '',
    targetKwds: 0,
    wordCount: 2085,
    createdOn: '16 Aug',
    assignee: 'Otto',
    dueOn: '25 Aug',
  },
  {
    id: 92839,
    title: 'Maximiza tus Ganancias con Inversiones a Largo Plazo',
    subtitle: 'Created from Scratch',
    folder: 'Topic Map',
    domain: 'neuroinversionista.com',
    status: 'Needs review',
    wpSync: 'Success',
    targetKwds: 2,
    wordCount: 2898,
    createdOn: '15 Aug',
    assignee: 'Otto',
    dueOn: '25 Aug',
  },
];

const TableBox = ({ articleData = [] }: { articleData?: Article[] }) => {
  return (
    <div className="relative max-w-[1070px] min-w-[1050px] w-full bg-white rounded-2xl shadow-lg border border-[#e2e8f0]">
      <div className="relative overflow-x-auto scroll-smooth custom-scrollbar">
        {articleData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14 min-w-[400px]">
            <div className="mb-2">
              <SearchAlatIcons.Box />
            </div>
            <div className="text-[#888] text-base font-medium">
              No data available
            </div>
          </div>
        ) : (
          <div className="relative">
            <table className="min-w-[900px] w-full text-[15px]">
              <thead>
                <tr className="bg-[#f8fafc] sticky top-0 z-20 text-left text-[#64748b] border-b border-[#e2e8f0]">
                  <th className="px-4 py-4 font-bold w-10 sticky left-0 bg-[#f8fafc] z-30">
                    <input
                      type="checkbox"
                      className="accent-[#3a8bfd] w-5 h-5"
                      title="Select all"
                    />
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[320px] sticky left-[52px] bg-[#f8fafc] z-30">
                    ARTICLE
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[260px]">
                    FOLDER
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[120px]">
                    STATUS
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[120px]">
                    WP SYNC
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[120px]">
                    TARGET KWDS.
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[120px]">
                    WORD COUNT
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[120px]">
                    CREATED ON
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[120px]">
                    ASSIGNEE
                  </th>
                  <th className="px-3 py-4 font-bold w-full min-w-[120px]">
                    DUE ON
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {articleData.map((article) => (
                  <tr
                    key={article.id}
                    className="border-b border-[#e2e8f0] transition-colors duration-150 hover:bg-[#f3f7fa] group"
                  >
                    <td className="px-4 py-3 sticky left-0 bg-[#f8fafc] z-30 group-hover:bg-[#f3f7fa]">
                      <input
                        type="checkbox"
                        className="accent-[#3a8bfd] w-5 h-5"
                        title="Select article"
                      />
                    </td>
                    <td className="px-3 py-3 min-w-[220px] sticky left-[52px] bg-[#f8fafc] z-30">
                      <div className="flex items-center gap-3">
                        <span className="inline-block w-5 h-5">
                          <i className="fas fa-circle-notch text-[#2ecc71] text-base"></i>
                        </span>
                        <div>
                          <div className="font-bold text-[16px] leading-tight text-[#3a8bfd] cursor-pointer hover:underline truncate max-w-[200px]">
                            {article.title}
                          </div>
                          <div className="text-gray-500 text-[13px] leading-tight font-medium truncate max-w-[200px]">
                            {article.subtitle}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 min-w-[160px]">
                      <div>
                        <span className="bg-[#e3f6ff] text-[#3a8bfd] text-[13px] px-3 py-1 rounded font-bold">
                          {article.folder}
                        </span>
                        <div className="text-gray-500 text-[11px] mt-1 font-medium truncate max-w-[140px]">
                          {article.domain || '\u00A0'}
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 min-w-[120px]">
                      <span className="bg-[#fff7e6] text-yellow-600 text-[13px] px-3 py-1 rounded font-bold capitalize">
                        {article.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 min-w-[120px]">
                      <span className="bg-[#e6f9f0] text-[#2ecc71] text-[13px] px-3 py-1 rounded font-bold capitalize">
                        {article.wpSync}
                      </span>
                    </td>
                    <td className="px-3 py-3 min-w-[60px] text-right">
                      <button
                        className="text-gray-400 hover:text-gray-800 text-lg transition-colors"
                        title="More actions"
                      >
                        <i className="fas fa-ellipsis-h"></i>
                      </button>
                    </td>
                    <td className="px-3 py-3 min-w-[120px] text-center">
                      {article.targetKwds ?? '-'}
                    </td>
                    <td className="px-3 py-3 min-w-[120px] text-center">
                      {article.wordCount?.toLocaleString() ?? '-'}
                    </td>
                    <td className="px-3 py-3 min-w-[120px] text-center">
                      {article.createdOn ?? '-'}
                    </td>
                    <td className="px-3 py-3 min-w-[120px] text-center">
                      {article.assignee ?? '-'}
                    </td>
                    <td className="px-3 py-3 min-w-[120px] text-center">
                      {article.dueOn ?? '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Shadow fade bên phải */}
            <div
              className="pointer-events-none absolute top-0 right-0 h-full w-8 z-30"
              style={{
                background:
                  'linear-gradient(to left, #fff 80%, rgba(255,255,255,0) 100%)',
              }}
            />
          </div>
        )}
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        @media (max-width: 900px) {
          table {
            min-width: 700px !important;
          }
        }
        @media (max-width: 600px) {
          table {
            min-width: 500px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TableBox;
