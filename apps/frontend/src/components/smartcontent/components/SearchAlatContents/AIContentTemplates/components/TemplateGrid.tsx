import TemplateCard, { TemplateCardProps } from './TemplateCard';

interface TemplateGridProps {
  templates: TemplateCardProps[];
}

// Dựa vào file TemplateCard.tsx để bổ sung data mẫu cho templates
const templates: TemplateCardProps[] = [
  {
    title: 'Blog Post Intro Paragraph',
    description:
      'Blast through writers block by letting AI write your opening paragraph',
    onClick: () => {},
    icon: undefined,
    isFavorite: false,
    onToggleFavorite: () => {},
  },
  {
    title: 'Amazon Product Description',
    description: 'Create compelling product descriptions for Amazon listings',
    onClick: () => {},
    icon: undefined,
    isFavorite: false,
    onToggleFavorite: () => {},
  },
  {
    title: 'Facebook Ad Headline',
    description: 'Generate catchy headlines for your Facebook ads',
    onClick: () => {},
    icon: undefined,
    isFavorite: false,
    onToggleFavorite: () => {},
  },
  {
    title: 'SEO Meta Description',
    description: 'Write optimized meta descriptions for better search rankings',
    onClick: () => {},
    icon: undefined,
    isFavorite: false,
    onToggleFavorite: () => {},
  },
  {
    title: 'YouTube Video Script',
    description:
      'Let AI help you draft engaging scripts for your YouTube videos',
    onClick: () => {},
    icon: undefined,
    isFavorite: false,
    onToggleFavorite: () => {},
  },
  {
    title: 'Product Review',
    description: 'Quickly generate honest and detailed product reviews',
    onClick: () => {},
    icon: undefined,
    isFavorite: false,
    onToggleFavorite: () => {},
  },
];

export default function TemplateGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template, index) => (
        <TemplateCard
          key={index}
          title={template.title}
          description={template.description}
          onClick={template.onClick}
          icon={template.icon}
          isFavorite={template.isFavorite}
          onToggleFavorite={template.onToggleFavorite}
        />
      ))}
    </div>
  );
}
