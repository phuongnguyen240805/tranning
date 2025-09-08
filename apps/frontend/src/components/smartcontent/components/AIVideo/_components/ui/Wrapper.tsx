type WrapperProps = {
  title?: string;
  children: React.ReactNode;
  borderColor?: string;
  className?: string;
};

export default function Wrapper({
  title,
  children,
  borderColor = 'rgb(66,67,254)',
  className,
}: WrapperProps) {
  return (
    <div
      className={`bg-white border rounded-xl p-6 shadow-md ${className}`}
      style={{ borderColor }}
    >
      {title && (
        <div
          className="font-bold mb-3 text-lg"
          style={{ fontFamily: 'Inter, Arial, sans-serif', color: borderColor }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
