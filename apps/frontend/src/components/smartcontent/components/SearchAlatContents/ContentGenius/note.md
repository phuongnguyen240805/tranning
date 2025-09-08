  const metadata: SectionConfig[] = [
    {
      id: 'General',
      label: 'GENERAL',
      fields: [
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
      ],
    },
    {
      id: 'Writing',
      label: 'WRITING',
      fields: [
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
          className: 'w-full text-sm max-h-[32px] col-span-1',
        },
        {
          fieldType: 'custom',
          customRender: (
            <div className="flex flex-col gap-4 w-full col-span-2">
              <div className="mt-4">
                <label className="block text-xs font-semibold text-gray-500 mb-2">
                  Writing options
                </label>
                <div className="flex items-center gap-8">
                  {/* Generate Meta data toggle */}
                  <div className="col-span-2 flex items-center gap-2">
                    <button
                      type="button"
                      aria-pressed={generateMetaData}
                      onClick={() => setGenerateMetaData((prev) => !prev)}
                      className={`relative w-10 h-4 transition-colors duration-200 rounded-full focus:outline-none ${
                        generateMetaData ? 'bg-[#8e5cff]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
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
                  <div className="col-span-2 flex items-center gap-2">
                    <button
                      type="button"
                      aria-pressed={boldFocusTerms}
                      onClick={() => setBoldFocusTerms((prev) => !prev)}
                      className={`relative w-10 h-4 transition-colors duration-200 rounded-full focus:outline-none ${
                        boldFocusTerms ? 'bg-[#8e5cff]' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
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
          ),
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
      ],
    },
    {
      id: 'Refiners',
      label: 'DEFAULT MICROSEMANTIC REFINERS',
      description:
        'Choose which microsemantic refiners to apply by default to your content.',
      fields: [
        {
          fieldType: 'custom',
          customRender: refinersData.map((item) => (
            <div
              key={item.id}
              className="relative inline-block w-full max-h-[38px]"
            >
              <div
                className="flex items-center justify-between bg-white px-3 py-2 border border-gray-300 rounded-lg cursor-pointer"
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    onClick={(e) => e.stopPropagation()}
                  />
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
              {openId === item.id && (
                <div className="absolute left-0 right-0 mt-1 p-3 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <p className="text-[12px] text-gray-600">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          )),
        },
      ],
    },
    {
      id: 'Terms',
      label: 'TERMS TO EXCLUDE',
      fields: [
        {
          fieldType: 'input',
          label: 'AI will try to write without using these terms',
          placeholder:
            'Enter term(s) and phrase(s), separated by commas, and hit enter.',
          variant: 'secondary',
          value: termsToExclude,
          onChange: (e) => setTermsToExclude(e.target.value),
          className: 'w-full text-sm max-h-[32px]',
          colSpan: 'col-span-2',
        },
      ],
    },
    {
      id: 'Images',
      label: 'IMAGES',
      fields: [
        {
          fieldType: 'custom',
          customRender: (
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
                    className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
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
                    className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                      isOpen ? 'translate-x-4' : ''
                    }`}
                  />
                </button>
                <span className="text-[15px] font-medium text-gray-700">
                  Generate one image per H2 section
                </span>
              </div>
            </div>
          ),
        },
        {
          fieldType: 'select',
          label: 'Aspect ratio',
          variant: 'secondary',
          className: 'w-64 text-sm',
          value: geolocation,
          onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
            setGeolocation(e.target.value),
          options: [
            { value: 'vertical', label: 'Vertical image (2:3)' },
            { value: 'horizontal', label: 'Horizontal image (3:2)' },
            { value: 'square', label: 'Square image (1:1)' },
          ],
        },
        {
          fieldType: 'textarea',
          label: 'AI Image Generation Prompt',
          placeholder: 'Enter AI Image Generation Prompt',
          variant: 'secondary',
          className: 'w-full text-sm min-h-[54px] py-4',
          colSpan: 'col-span-2',
        },
      ],
    },
  ];




<form className="flex-1 pl-8 h-[600px] max-h-[80vh] overflow-y-auto custom-scrollbar scroll-smooth">
        <div className="pr-4">
          {metadata.map((section) => (
            <div key={section.id} id={section.id} className="mb-8">
              <label className="block text-xs font-semibold text-gray-500 mb-2">
                {section.label}
              </label>
              {section.description && (
                <p className="text-xs text-gray-400 mb-2">
                  {section.description}
                </p>
              )}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {section.fields.map((field, idx) => (
                  <div key={idx} className={field.colSpan ?? ''}>
                    {field.fieldType === 'input' && (
                      <InputField
                        type="input"
                        label={field.label}
                        placeholder={field.placeholder}
                        variant={field.variant}
                        icon={field.icon}
                        className={field.className}
                        disabled={field.disabled}
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
                    {field.fieldType === 'custom' && (
                      <div className="grid grid-cols-2 gap-4">
                        {field.customRender}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </form>
