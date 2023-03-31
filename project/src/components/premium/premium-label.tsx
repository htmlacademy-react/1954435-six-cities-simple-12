type PremiumLabelProps = {
  cssClass: string;
};

export default function PremiumLabel({cssClass}: PremiumLabelProps) {
  return (
    <div className={cssClass}>
      <span>Premium</span>
    </div>
  );
}

