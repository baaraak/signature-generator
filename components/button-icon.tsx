type Props = {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: String;
  id: String;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};

const IconButton = ({
  children,
  icon,
  className = '',
  onClick,
  id,
  ...props
}: Props) => {
  return (
    <button
      id={id}
      className={`flex flex-col items-center p-3 rounded-md text-gray-500 hover:text-gray-900 transition z-10 ${className}`}
      {...props}
      onClick={onClick}
    >
      {icon}
      <span className="mt-2 text-xs">{children}</span>
    </button>
  );
};

export default IconButton;
