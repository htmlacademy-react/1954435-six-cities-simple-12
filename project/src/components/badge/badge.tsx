type BadgeProps = {
  className: string;
  text: string;
};

export default function Badge({className,text}: BadgeProps) {
  return (
    <div className={className} data-testid="badge">
      <span>{text}</span>
    </div>
  );
}

