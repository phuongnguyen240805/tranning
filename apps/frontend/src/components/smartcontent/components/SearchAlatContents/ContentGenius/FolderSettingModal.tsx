import { useState } from 'react';

import { SearchAlatIcons } from '../components/icon';
import InputField from '../components/FormHandle/InputField';
import { Icons } from '../../../icons';
import SelectField from '../components/FormHandle/SelectField';
import { languageList, SelectList } from '../components/FormHandle';
import { ModalWrapper } from '../components/ModalWrapper';
import InstallAppCTA from './InstallAppCTA';

export const searchIntentList: SelectList = [
  { value: '', label: 'Search intent' },
  { value: 'informational', label: 'Informational' },
  { value: 'navigational', label: 'Navigational' },
  { value: 'transactional', label: 'Transactional' },
  { value: 'commercial', label: 'Commercial' },
];

const navItems = [
  { id: 1, label: 'General', href: '#General' },
  { id: 2, label: 'Writing', href: '#Writing' },
  { id: 3, label: 'Default Refiners', href: '#Refiners' },
  { id: 4, label: 'Terms to exclude', href: '#Terms' },
  { id: 5, label: 'Images', href: '#Images' },
  { id: 6, label: 'Links to include', href: '#Links' },
  { id: 7, label: 'Company Info', href: '#Company' },
  { id: 8, label: 'WordPress', href: '#WordPress' },
  { id: 9, label: 'Shopify', href: '#Shopify' },
];

const refinersData = [
  {
    id: 1,
    title: 'Generate Hero Image',
    description: 'Creates a main hero section for the webpage.',
    // icon: <SearchAlatIcons.Target width={20} height={20} />,
  },
  {
    id: 2,
    title: 'Generate FAQ',
    description:
      'Create relevant FAQ sections based on your content and target keywords.',
    // icon: <SearchAlatIcons.Question width={20} height={20} />,
  },
  {
    id: 3,
    title: 'Generate Conclusion',
    description:
      'Generate powerful conclusions that drive action and improve conversions.',
    // icon: <SearchAlatIcons.Flag width={20} height={20} />,
  },
  {
    id: 4,
    title: 'Humanize',
    description:
      'Rewrites your content to feel human and reflect the tone and writing style of your brand, based on how you communicate on your website.',
    // icon: <SearchAlatIcons.Robot width={20} height={20} />,
  },
];

const companyInfo = [
  { label: 'Company Name', placeholder: 'Enter company name' },
  { label: 'Website', placeholder: 'Enter website URL' },
  { label: 'GBP URL', placeholder: 'Enter gbp URL' },
  { label: 'Address', placeholder: 'Enter business address' },
  { label: 'Company Email', placeholder: 'Enter company email' },
  { label: 'Company Phone', placeholder: 'Enter company phone' },
  { label: 'Contact Name', placeholder: 'Enter contact name' },
  { label: 'Contact Email', placeholder: 'Enter contact email' },
  { label: 'Contact Phone', placeholder: 'Enter contact phone' },
];

type FieldConfig = {
  fieldType: 'input' | 'select' | 'textarea' | 'toggle' | 'custom';
  label?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  value?: string;
  options?: SelectList; // dành cho select
  defaultValue?: string; // cho select
  onChange?: (e: any) => void;
  colSpan?: string; // ví dụ "col-span-2"
  description?: string;
  customRender?: React.ReactNode; // cho mấy case đặc biệt
};

function FolderSettingModal({
  setShowFolderSetting,
}: {
  setShowFolderSetting?: (e: boolean) => void;
}) {
  const [activeId, setActiveId] = useState(1);
  const [dialogOpened, setDialogOpened] = useState(false);

  // general
  const [geolocation, setGeolocation] = useState('');
  const [desolocation, setDesolocation] = useState('');
  const [searchIntent, setSearchIntent] = useState('');
  const [businessIntent, setBusinessIntent] = useState('');
  const [companyBackground, setCompanyBackground] = useState('');

  // writing
  const [language, setLanguage] = useState('English (US)');
  const [voice, setVoice] = useState('Professional');
  const [actAs, setActAs] = useState('');
  const [contentLength, setContentLength] = useState('Optimized');
  const [writingStyle, setWritingStyle] = useState('');
  const [generateMetaData, setGenerateMetaData] = useState(false);
  const [boldFocusTerms, setBoldFocusTerms] = useState(false);

  // terms to exclude
  const [termsToExclude, setTermsToExclude] = useState('');

  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  const [internalLinks, setInternalLinks] = useState([]);
  const [externalLinks, setExternalLinks] = useState([]);

  const generalFields: FieldConfig[] = [
    {
      fieldType: 'input',
      label: 'Folder name',
      placeholder: 'All Articles',
      variant: 'secondary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      disabled: true,
      className: 'w-full text-sm max-h-[32px]',
      colSpan: 'col-span-2',
    },
    {
      fieldType: 'input',
      label: 'Domain',
      placeholder: 'https://website.com',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      className: 'w-full text-sm max-h-[32px]',
      colSpan: 'col-span-2',
    },
    {
      fieldType: 'input',
      label: 'Website purpose',
      placeholder: 'Website purpose',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      className: 'w-full text-sm max-h-[32px]',
      onChange: (e) => setDesolocation(e.target.value),
    },
    {
      fieldType: 'input',
      label: 'Niche',
      placeholder: 'Niche',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      className: 'w-full text-sm max-h-[32px]',
    },
    {
      fieldType: 'input',
      label: 'Default audience',
      placeholder: 'Default audience',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      className: 'w-full text-sm max-h-[32px]',
    },
    {
      fieldType: 'select',
      label: 'Geolocation',
      placeholder: 'Geolocation',
      variant: 'secondary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      options: languageList,
      defaultValue: 'United States',
      className: 'w-full text-sm max-h-[32px]',
    },
    {
      fieldType: 'select',
      label: 'Search intent',
      placeholder: 'Search intent',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      options: searchIntentList,
      defaultValue: 'Search intent',
      className: 'w-full text-sm max-h-[32px]',
      onChange: (e) => setSearchIntent(e.target.value),
    },
    {
      fieldType: 'input',
      label: 'Business intent',
      placeholder: 'Business intent',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      className: 'w-full text-sm max-h-[32px]',
      onChange: (e) => setBusinessIntent(e.target.value),
    },
    {
      fieldType: 'textarea',
      label: 'Company background',
      placeholder: 'Company background',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      className: 'w-full text-sm min-h-[54px] py-4',
      value: companyBackground,
      onChange: (e) => setCompanyBackground(e.target.value),
      colSpan: 'col-span-2',
    },
  ];

  const writingFields: FieldConfig[] = [
    {
      fieldType: 'select',
      label: 'Language',
      variant: 'secondary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      options: [
        { value: 'en-US', label: 'English (US)' },
        { value: 'en-GB', label: 'English (UK)' },
        { value: 'vi-VN', label: 'Vietnamese' },
        { value: 'fr-FR', label: 'French' },
        { value: 'de-DE', label: 'German' },
      ],
      defaultValue: language,
      onChange: (e) => setLanguage(e.target.value),
      className: 'w-full text-sm max-h-[32px]',
    },
    {
      fieldType: 'select',
      label: 'Voice',
      variant: 'secondary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      options: [
        { value: 'professional', label: 'Professional' },
        { value: 'casual', label: 'Casual' },
        { value: 'friendly', label: 'Friendly' },
        { value: 'authoritative', label: 'Authoritative' },
      ],
      defaultValue: voice,
      onChange: (e) => setVoice(e.target.value),
      className: 'w-full text-sm max-h-[32px]',
    },
    {
      fieldType: 'input',
      label: 'Act as who?',
      placeholder: 'Act as who?',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      value: actAs,
      onChange: (e) => setActAs(e.target.value),
      className: 'w-full text-sm max-h-[32px]',
    },
    {
      fieldType: 'select',
      label: 'Content length',
      variant: 'secondary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      options: [
        { value: 'short', label: 'short' },
        { value: 'optimized', label: 'optimized' },
        { value: 'long', label: 'long' },
      ],
      defaultValue: contentLength,
      onChange: (e) => setContentLength(e.target.value),
      className: 'w-full text-sm max-h-[32px]',
    },
    {
      fieldType: 'input',
      label: 'Writing style',
      placeholder: 'Writing style',
      variant: 'primary',
      icon: <Icons.InfoCircle width={14} height={14} />,
      value: writingStyle,
      onChange: (e) => setWritingStyle(e.target.value),
      className: 'w-full text-sm max-h-[32px]',
    },
    // {
    //   fieldType: 'toggle',
    //   label: 'Generate Meta data',
    //   value: generateMetaData,
    //   onChange: () => setGenerateMetaData((prev) => !prev),
    //   description:
    //     'Automatically generate meta title and description for your content',
    //   colSpan: 'col-span-2',
    // },
    // {
    //   fieldType: 'toggle',
    //   label: 'Bold Focus Terms in AI Content',
    //   value: boldFocusTerms,
    //   onChange: () => setBoldFocusTerms((prev) => !prev),
    //   colSpan: 'col-span-2',
    // },
  ];

  return (
    <>
      <ModalWrapper
        opened={dialogOpened}
        onClose={() => setDialogOpened(!dialogOpened)}
        width="530px"
        height="100vh"
        showCloseButton={false}
        className="p-0"
        padding="0px 0px"
      >
        <div className="flex h-[350px] max-h-[350px] p-0">
          <InstallAppCTA />
        </div>
      </ModalWrapper>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-48 flex-shrink-0 pr-6">
          <div className="sticky top-0 h-[600px] max-h-[80vh]">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                >
                  <button
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition
                ${
                  activeId === item.id
                    ? 'font-semibold text-[#6b47dc] bg-[#f3f0ff]'
                    : 'font-medium text-gray-700 hover:bg-gray-100'
                }`}
                  >
                    {activeId === item.id && (
                      <span className="w-2 h-2 rounded-full bg-[#6b47dc]"></span>
                    )}
                    {item.label}
                  </button>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Form */}
        <form className="flex-1 pl-8 h-[600px] max-h-[80vh] overflow-y-auto custom-scrollbar scroll-smooth">
          <div className="pr-4">
            {/* GENERAL */}
            <div className="mb-8" id="General">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                GENERAL
              </label>

              {/* GENERAL content */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {generalFields.map((field, index) => (
                  <div key={index} className={field.colSpan ?? ''}>
                    {field.fieldType === 'input' && (
                      <InputField
                        type="input"
                        label={field.label}
                        placeholder={field.placeholder}
                        variant={field.variant}
                        icon={field.icon}
                        className={field.className}
                        disabled={field.disabled}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}

                    {field.fieldType === 'textarea' && (
                      <InputField
                        type="textarea"
                        label={field.label}
                        placeholder={field.placeholder}
                        variant={field.variant}
                        icon={field.icon}
                        className={field.className}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}

                    {field.fieldType === 'select' && (
                      <SelectField
                        label={field.label}
                        variant={field.variant}
                        icon={field.icon}
                        options={field.options || []}
                        defaultValue={field.defaultValue}
                        className={field.className}
                        onChange={field.onChange}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Writing */}
            <div className="mb-8" id="Writing">
              <div className="col-span-2 mt-6">
                <label className="block text-xs font-semibold text-gray-500 mb-2">
                  WRITING
                </label>

                {/* content writing */}
                <div className="grid grid-cols-2 gap-4">
                  {writingFields.map((field, idx) => (
                    <div key={idx} className={field.colSpan ?? ''}>
                      {field.fieldType === 'input' && (
                        <InputField
                          type="input"
                          label={field.label}
                          placeholder={field.placeholder}
                          variant={field.variant}
                          icon={field.icon}
                          className={field.className}
                          value={field.value as string}
                          onChange={field.onChange}
                        />
                      )}

                      {field.fieldType === 'select' && (
                        <SelectField
                          label={field.label}
                          variant={field.variant}
                          icon={field.icon}
                          options={field.options || []}
                          defaultValue={field.defaultValue}
                          className={field.className}
                          onChange={field.onChange}
                        />
                      )}

                      {field.fieldType === 'textarea' && (
                        <InputField
                          type="textarea"
                          label={field.label}
                          placeholder={field.placeholder}
                          variant={field.variant}
                          icon={field.icon}
                          className={field.className}
                          value={field.value as string}
                          onChange={field.onChange}
                        />
                      )}

                      {/* {field.fieldType === 'toggle' && (
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                type="button"
                                aria-pressed={!!field.value}
                                onClick={field.onChange}
                                className={`relative w-10 h-4 transition-colors duration-200 rounded-full focus:outline-none ${
                                  field.value ? 'bg-[#8e5cff]' : 'bg-gray-200'
                                }`}
                              >
                                <span
                                  className={`absolute left-1 top-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                                    field.value ? 'translate-x-4' : ''
                                  }`}
                                />
                              </button>
                              <span className="text-[15px] font-medium text-gray-700">
                                {field.label}
                              </span>
                              {field.description && (
                                <span
                                  className="ml-1 text-gray-400 cursor-pointer"
                                  title={field.description}
                                >
                                  <Icons.InfoCircle width={14} height={14} />
                                </span>
                              )}
                            </div>
                          )} */}
                    </div>
                  ))}

                  {/* Writing options */}
                  <div className="col-span-2 mt-4">
                    <label className="block text-xs font-semibold text-gray-500 mb-2">
                      Writing options
                    </label>
                    <div className="flex items-center gap-8">
                      {/* Generate Meta data toggle */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-pressed={generateMetaData}
                          onClick={() => setGenerateMetaData((prev) => !prev)}
                          className={`relative w-10 h-4 transition-colors duration-200 rounded-full focus:outline-none ${
                            generateMetaData ? 'bg-[#8e5cff]' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`absolute left-1 top-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                              generateMetaData ? 'translate-x-4' : ''
                            }`}
                          ></span>
                        </button>
                        <span className="text-[15px] font-medium text-gray-700">
                          Generate Meta data
                        </span>
                        <span
                          className="ml-1 text-gray-400 cursor-pointer"
                          title="Automatically generate meta title and description for your content"
                        >
                          <Icons.InfoCircle width={14} height={14} />
                        </span>
                      </div>
                      {/* Bold Focus Terms toggle */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-pressed={boldFocusTerms}
                          onClick={() => setBoldFocusTerms((prev) => !prev)}
                          className={`relative w-10 h-4 transition-colors duration-200 rounded-full focus:outline-none ${
                            boldFocusTerms ? 'bg-[#8e5cff]' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`absolute left-1 top-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                              boldFocusTerms ? 'translate-x-4' : ''
                            }`}
                          ></span>
                        </button>
                        <span className="text-[15px] font-medium text-gray-700">
                          Bold Focus Terms in AI Content
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refiners */}
            <div className="mb-8" id="Refiners">
              <div className="col-span-2 mt-6">
                <label className="text-xs font-semibold text-gray-500 mb-2 flex items-center gap-1">
                  DEFAULT MICROSEMANTIC REFINERS
                  <span
                    className="ml-1 text-gray-400 cursor-pointer"
                    title="Choose which microsemantic refiners to apply by default to your content."
                  >
                    <Icons.InfoCircle width={14} height={14} />
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {refinersData.map((item) => (
                    <div
                      key={item.id}
                      className="relative inline-block w-full max-w-sm max-h-[38px]"
                    >
                      {/* Header */}
                      <div
                        className="flex items-center justify-between bg-white px-3 py-2 border border-gray-300 rounded-lg cursor-pointer"
                        onClick={() =>
                          setOpenId(openId === item.id ? null : item.id)
                        }
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="w-5 h-5"
                            onClick={(e) => e.stopPropagation()}
                          />
                          {/* <span className="text-gray-600">{item.icon}</span> */}
                          <span className="text-[12px] font-medium text-gray-800">
                            {item.title}
                          </span>
                        </div>

                        <SearchAlatIcons.Drop
                          width={18}
                          height={18}
                          className={`text-gray-400 transition-transform duration-200 ${
                            openId === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      {/* Dropdown note */}
                      {openId === item.id && (
                        <div className="absolute left-0 right-0 mt-1 p-3 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                          <p className="text-[12px] text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Terms to exclude */}
            <div className="mb-8" id="Terms">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                TERMS TO EXCLUDE
              </label>
              <InputField
                type="input"
                label="AI will try to write without using these terms"
                placeholder="Enter term(s) and phrase(s), separated by commas, and hit enter."
                variant="secondary"
                className="w-full text-sm max-h-[32px]"
                value={termsToExclude}
                onChange={(e) => setTermsToExclude(e.target.value)}
              />
            </div>

            {/* Images */}
            <div className="mb-8" id="Images">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                IMAGES
              </label>
              <div className="flex flex-col gap-4">
                {/* Toggles */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-pressed={isChecked}
                      onClick={() => setIsChecked((prev) => !prev)}
                      className={`relative w-10 h-4 transition-colors duration-200 rounded-full focus:outline-none ${
                        isChecked ? 'bg-[#8e5cff]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`absolute left-1 top-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                          isChecked ? 'translate-x-4' : ''
                        }`}
                      />
                    </button>
                    <span className="text-[15px] font-medium text-gray-700">
                      Generate an article hero image
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-pressed={isOpen}
                      onClick={() => setIsOpen((prev) => !prev)}
                      className={`relative w-10 h-4 transition-colors duration-200 rounded-full focus:outline-none ${
                        isOpen ? 'bg-[#8e5cff]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`absolute left-1 top-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                          isOpen ? 'translate-x-4' : ''
                        }`}
                      />
                    </button>
                    <span className="text-[15px] font-medium text-gray-700">
                      Generate one image per H2 section
                    </span>
                  </div>
                </div>
                {/* Aspect ratio */}
                <div>
                  <SelectField
                    label="Aspect ratio"
                    variant="secondary"
                    className="w-64 text-sm max-h-[32px]"
                    options={[
                      { value: 'vertical', label: 'Vertical image (2:3)' },
                      {
                        value: 'horizontal',
                        label: 'Horizontal image (3:2)',
                      },
                      { value: 'square', label: 'Square image (1:1)' },
                    ]}
                    defaultValue={geolocation}
                    onChange={(e) => setGeolocation(e.target.value)}
                  />
                </div>
                {/* AI Image Generation Prompt */}
                <div>
                  <InputField
                    type="textarea"
                    label="AI Image Generation Prompt"
                    placeholder="Enter AI Image Generation Prompt"
                    variant="secondary"
                    className="w-full text-sm min-h-[54px] py-4"
                  />
                </div>
              </div>
            </div>

            {/* LINKS TO INCLUDE */}
            <div className="mb-8" id="Links">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                LINKS TO INCLUDE
              </label>
              {/* Global internal links */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-gray-700">
                    Global internal links
                  </span>
                  <span
                    className="text-gray-400 cursor-pointer"
                    title="These links will be included in all generated content as internal links."
                  >
                    <Icons.InfoCircle width={13} height={13} />
                  </span>
                  <button
                    type="button"
                    className="ml-auto text-xs text-[#3a8bfd] font-semibold hover:underline"
                    onClick={() => {
                      setInternalLinks([
                        ...internalLinks,
                        { type: 'Required', url: '' },
                      ]);
                    }}
                  >
                    + Add internal link
                  </button>
                </div>
                {internalLinks.map((link, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <select
                      className="border border-gray-300 rounded px-2 py-1 text-xs w-[90px] bg-white"
                      value={link.type}
                      onChange={(e) => {
                        const updated = [...internalLinks];
                        updated[idx].type = e.target.value;
                        setInternalLinks(updated);
                      }}
                    >
                      <option value="Required">Required</option>
                      <option value="Optional">Optional</option>
                    </select>
                    <input
                      type="text"
                      className="border border-gray-300 rounded px-2 py-1 text-xs flex-1"
                      placeholder="Link"
                      value={link.url}
                      onChange={(e) => {
                        const updated = [...internalLinks];
                        updated[idx].url = e.target.value;
                        setInternalLinks(updated);
                      }}
                    />
                    <button
                      type="button"
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => {
                        setInternalLinks(
                          internalLinks.filter((_, i) => i !== idx)
                        );
                      }}
                      title="Remove"
                    >
                      <Icons.InfoCircle width={16} height={16} />
                    </button>
                  </div>
                ))}
              </div>
              {/* Global external links */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-gray-700">
                    Global external links
                  </span>
                  <span
                    className="text-gray-400 cursor-pointer"
                    title="These links will be included in all generated content as external links."
                  >
                    <Icons.InfoCircle width={13} height={13} />
                  </span>
                  <button
                    type="button"
                    className="ml-auto text-xs text-[#3a8bfd] font-semibold hover:underline"
                    onClick={() => {
                      setExternalLinks([
                        ...externalLinks,
                        { type: 'Required', url: '' },
                      ]);
                    }}
                  >
                    + Add external link
                  </button>
                </div>
                {internalLinks.map((link, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <select
                      className="border border-gray-300 rounded px-2 py-1 text-xs w-[90px] bg-white"
                      value={link.type}
                      onChange={(e) => {
                        const updated = [...internalLinks];
                        updated[idx].type = e.target.value;
                        setInternalLinks(updated);
                      }}
                    >
                      <option value="Required">Required</option>
                      <option value="Optional">Optional</option>
                    </select>
                    <input
                      type="text"
                      className="border border-gray-300 rounded px-2 py-1 text-xs flex-1"
                      placeholder="Link"
                      value={link.url}
                      onChange={(e) => {
                        const updated = [...internalLinks];
                        updated[idx].url = e.target.value;
                        setInternalLinks(updated);
                      }}
                    />
                    <button
                      type="button"
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => {
                        setInternalLinks(
                          internalLinks.filter((_, i) => i !== idx)
                        );
                      }}
                      title="Remove"
                    >
                      <Icons.InfoCircle width={16} height={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="mb-8" id="Company">
              <label className="flex text-xs font-semibold text-gray-500 mb-2 items-center gap-1">
                Company Info
                <span title="Company Info">
                  <Icons.InfoCircle
                    width={14}
                    height={14}
                    className="inline-block text-gray-400"
                  />
                </span>
              </label>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="divide-y divide-gray-100">
                  {companyInfo.map((field) => (
                    <div key={field.label} className="flex items-center py-2">
                      <label className="w-1/4 text-[15px] font-medium text-gray-500">
                        {field.label}
                      </label>
                      <InputField
                        type="input"
                        variant="secondary"
                        placeholder={field.placeholder}
                        className="flex-1 bg-transparent border-0 text-[15px] text-gray-500 placeholder-gray-300 focus:ring-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WordPress */}
            <div className="mb-8" id="WordPress">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                WORDPRESS INTEGRATION
              </label>
              <div className="flex flex-col gap-4">
                {/* Website select */}
                <div className="flex items-center gap-2 pr-6">
                  <SelectField
                    label="Website"
                    variant="secondary"
                    className="w-full text-sm max-h-[32px]"
                    options={[
                      { value: '', label: 'Website' },
                      {
                        value: 'billigt-elselskab.dk',
                        label: 'billigt-elselskab.dk',
                      },
                      {
                        value: 'neuroinversionista.com',
                        label: 'neuroinversionista.com',
                      },
                    ]}
                    defaultValue=""
                    onChange={() => {}}
                  />
                  <button
                    type="button"
                    className="ml-2 text-xs text-[#3a8bfd] font-semibold hover:underline"
                    onClick={() => {}}
                  >
                    +Add site
                  </button>
                </div>
                {/* Post status */}
                <div className="flex items-center gap-6">
                  <span className="text-xs text-gray-700 mr-2">
                    Post status
                  </span>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="wp-post-status"
                      className="accent-[#8e5cff]"
                      defaultChecked
                    />
                    <span className="text-sm">Draft</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="wp-post-status"
                      className="accent-[#8e5cff]"
                    />
                    <span className="text-sm">Published</span>
                  </label>
                </div>
                {/* Post type */}
                <div className="flex items-center gap-6">
                  <span className="text-xs text-gray-700 mr-2">Post type</span>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="wp-post-type"
                      className="accent-[#8e5cff]"
                      defaultChecked
                    />
                    <span className="text-sm">Blog post</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="wp-post-type"
                      className="accent-[#8e5cff]"
                    />
                    <span className="text-sm">Page</span>
                  </label>
                </div>
                {/* Category select */}
                <div>
                  <SelectField
                    label="Category select"
                    variant="secondary"
                    className="w-72 text-sm max-h-[32px]"
                    options={[
                      { value: '', label: 'Category' },
                      // Add more category options here
                    ]}
                    defaultValue=""
                    onChange={() => {}}
                  />
                </div>
                {/* Auto-upload toggle */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    type="button"
                    aria-pressed={isChecked}
                    onClick={() => setIsChecked((prev) => !prev)}
                    className={`relative w-10 h-4 transition-colors duration-200 rounded-full focus:outline-none ${
                      isChecked ? 'bg-[#8e5cff]' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`absolute left-1 top-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                        isChecked ? 'translate-x-4' : ''
                      }`}
                    />
                  </button>
                  <span className="text-xs text-gray-700">
                    Auto-upload to WordPress the articles created with "Write
                    with AI in Bulk"
                  </span>
                </div>
              </div>
            </div>

            {/* Shopify */}
            <div className="mb-8" id="Shopify">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                SHOPIFY INTEGRATION
              </label>
              <div className="bg-[#20506B] rounded-lg p-4 flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <SearchAlatIcons.Shopify
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-base mb-1">
                    Publish Content to Shopify
                  </div>
                  <div className="text-white text-xs mb-3">
                    Install the SearchAtlas app to your Shopify store and Start
                    Publishing content directly from the SEO Content Assistant
                  </div>
                  <button
                    type="button"
                    onClick={() => setDialogOpened(!dialogOpened)}
                    className="bg-[#A7D08C] text-[#20506B] text-xs font-semibold px-4 py-1 rounded hover:bg-[#8ec07c] transition-colors"
                  >
                    View Instructions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <footer className="fixed bottom-0 right-6 w-full bg-white ml-6 py-4 px-12 flex justify-end items-center z-30">
        <button
          onClick={() => setShowFolderSetting(false)}
          type="button"
          className="text-gray-600 text-base font-medium mr-6 focus:outline-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#8456B3] hover:bg-[#6d4696] text-white text-base font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none"
        >
          Update settings
        </button>
      </footer>
    </>
  );
}

export default FolderSettingModal;
